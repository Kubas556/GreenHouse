import React, { useEffect, useRef, useState, MouseEvent, SyntheticEvent } from 'react';
import anime, { AnimeInstance } from 'animejs';
import ITermostat from '../interfaces/ITermostat';
import { useTheme } from '@material-ui/styles';

function Termostat(props: ITermostat) {
  const min = 0;
  const max = 50;
  const [componentWidth, setComponentWidth] = useState<number>(props.config.width ? props.config.width : 337);
  const [componentHeight, setComponentHeight] = useState<number>(props.config.height ? props.config.height : 337);
  const minAngle = 0;
  const maxAngle = 270;
  const angleOverlap = (maxAngle - 180) / 2;
  const lineSegCount = 25; // optional 11;
  const valueLineSegCount = 16 * 2 + 1;
  const valueLineSegBigEach = 8;
  const theme = useTheme();
  // @ts-ignore
  const handleColor = theme.palette.primary.main;

  const workplace = useRef<HTMLDivElement>(null);
  const lines = useRef<HTMLDivElement>(null);
  const valueInput = useRef<HTMLInputElement>(null);
  const hand = useRef<HTMLDivElement>(null);
  const handle = useRef<SVGSVGElement>(null);

  const [containers, setContainers] = useState<HTMLCollectionOf<Element>>();

  const [lastNode, setLastNode] = useState<ChildNode>();
  const [lastNodeAngle, setLastNodeAngle] = useState<number>(0);
  const [currentDefaultPropAnimation, setCurrentDefaultPropAnimation] = useState<AnimeInstance>();
  const [textUserInputAnimation, setTextUserInputAnimation] = useState<AnimeInstance>();
  const [handAngle, setHandAngle] = useState<number>(0);
  const [currentValue, setCurrentValue] = useState<number>(props.defaultValue || 0);
  const [drag, setDrag] = useState<boolean>(false);

  const workspaceSize = {
    height: `${componentHeight}px`,
    width: `${componentWidth}px`,
  };

  const linesSize = {
    width: `${componentWidth}px`,
  };

  const lineContainerSizes = {
    width: `${componentWidth / 2}px`,
  };

  const handSize = {
    width: `${componentWidth / 2}px`,
  };

  // lze upravovat
  const handPathSize = {
    width: `${componentWidth / 3}px`,
    height: `${componentHeight / 3}px`,
  };

  const handleSize = {
    right: `${componentWidth / 2 / 3}px`,
  };
  // -----------------------------------
  const handPathCircle = {
    circleRadius: 2 * Math.PI * 80.6,
    transform: `rotate(${-angleOverlap}deg)`,
    maxRadius: 2 * Math.PI * 80.6 - ((2 * Math.PI * 80.6) / 360) * maxAngle,
  };

  function generateSegments() {
    let k = 0;
    if (lines.current) lines.current.innerHTML = '';
    for (let i = 0; i < valueLineSegCount; i++) {
      const handAngle = Math.round((maxAngle / max) * k) - angleOverlap;
      const line = `<div style="transform:rotate(${handAngle}deg)!important;width:${
        lineContainerSizes.width
      };" class="valueLineContainer"><div class="valueLineGroup"><div class=${
        i % valueLineSegBigEach === 0 ? 'bigValueLine' : 'smallValueLine'
      }></div><div class="value" style="transform:rotate(${-handAngle}deg)">${
        i % valueLineSegBigEach === 0 ? Math.round(k) : ''
      }</div></div></div>`;
      if (lines.current) lines.current.innerHTML += line;
      k += max / (valueLineSegCount - 1);
    }

    let j = 0;
    for (let i = 0; i < lineSegCount; i++) {
      const handAngle = Math.round((maxAngle / max) * j) - angleOverlap;
      const line = `<div rotate=${handAngle} style="transform:rotate(${handAngle}deg)!important;width:${lineContainerSizes.width};"class="lineContainer"><div class="line"></div></div>`;
      if (lines.current) lines.current.innerHTML += line;
      j += max / (lineSegCount - 1);
    }

    const contData = document.getElementsByClassName('lineContainer');

    const lineSegs = document.getElementsByClassName('line');
    const first = [73, 80, 245];
    const second = [244, 67, 54];

    for (let i = 0; i < lineSegs.length; i++) {
      const percent = i / (lineSegs.length - 1);

      const red = first[0] + percent * (second[0] - first[0]);
      const green = first[1] + percent * (second[1] - first[1]);
      const blue = first[2] + percent * (second[2] - first[2]);

      lineSegs[i].setAttribute('style', `background:rgb(${red},${green},${blue});`);
    }

    setContainers(contData);
  }

  function inputUpdated(e: any) {
    const val = Number.parseInt(e.target.innerHTML);
    if (textUserInputAnimation) textUserInputAnimation.pause();

    const propTransition = {
      value: 0,
    };

    setTextUserInputAnimation(
      anime({
        targets: propTransition,
        value: [currentValue, val],
        easing: 'linear',
        duration: 500,
        update() {
          setCurrentValue(Math.round(propTransition.value));
        },
      }),
    );
    setCurrentValue(val);
    props.onValueChanged(Number.parseInt(currentValue.toString()));
  }

  function calculateAngle(x: number, y: number) {
    const angle = Math.atan2(y, x);
    let angle2 = angle * (180 / Math.PI);
    // to 360 range
    if (angle2 < 0) {
      angle2 = 360 - -angle2;
    }
    // set 0 angle
    angle2 += 180;
    // corect angle
    if (angle2 > 360) angle2 -= 360;

    angle2 = maxAngle - angle2;
    if (angle2 < 0) angle2 = angleOverlap - (360 - maxAngle + angle2);
    else angle2 = -(angle2 - maxAngle - angleOverlap);

    if (angle2 >= minAngle && angle2 <= maxAngle) {
      setCurrentValue(Math.round((max / maxAngle) * angle2));
      // setAngleTrans(angle2-angleOverlap);
      // setHandAngle(angle2-angleOverlap);
    }
  }

  function onMove(e: MouseEvent) {
    e.nativeEvent.preventDefault();
    if (drag) {
      calculateAngle(e.nativeEvent.offsetX - componentWidth / 2, e.nativeEvent.offsetY - componentHeight / 2);
      props.onValueChanged(Number.parseInt(currentValue.toString()));
    }
  }

  function onDrag(e: MouseEvent) {
    if (!drag) {
      setDrag(true);
      if (handle.current) handle.current.style.pointerEvents = 'none';
    }
  }

  function onDragEnd(e: MouseEvent) {
    if (drag) {
      setDrag(false);
      if (handle.current) handle.current.style.pointerEvents = 'all';
    }
  }

  // @ts-ignore
  function onTouchMove(e: TouchEvent<HTMLDivElement>) {
    e.nativeEvent.preventDefault();
    if (workplace.current) {
      const testX =
        e.nativeEvent.targetTouches[0].pageX -
        (workplace.current.getBoundingClientRect().left + window.scrollX) -
        componentWidth / 2;
      const testY =
        e.nativeEvent.targetTouches[0].pageY -
        (workplace.current.getBoundingClientRect().top + window.scrollY) -
        componentHeight / 2;

      calculateAngle(testX, testY);
      props.onValueChanged(Number.parseInt(currentValue.toString()));
    }
  }

  useEffect(() => {
    generateSegments();
  }, []);

  useEffect(() => {
    if (containers) {
      const angle = Math.round(handAngle);
      if (angle <= maxAngle && angle >= minAngle - angleOverlap) {
        const targetSegment = Array.from(containers).filter(c => parseInt(c.getAttribute('rotate') as string) <= angle).pop();
        if (targetSegment) {
          const otherSegments = Array.from(containers).filter(c => parseInt(c.getAttribute('rotate') as string) !== parseInt(targetSegment.getAttribute('rotate') as string));
          otherSegments.forEach((segment:any) => {
            anime({
              targets: segment.childNodes[0],
              scale: [{ value: 1, easing: 'easeInOutQuad', duration: 500 }],
              delay: 0,
            });
          });
          anime({
            targets: targetSegment.childNodes[0],
            scale: [{ value: 1.5, easing: 'easeOutSine', duration: 500 }],
            delay: 0,
          });
          // setLastNode(targetSegment.childNodes[0]);
          setLastNodeAngle(parseInt(targetSegment.getAttribute('rotate') as string));
        }
        if (hand.current) hand.current.style.transform = `rotate(${angle}deg)`;
      }
    }
  }, [handAngle]);

  useEffect(() => {
    if (valueInput.current) valueInput.current.innerHTML = currentValue.toString();

    setHandAngle((maxAngle / max) * currentValue - angleOverlap);
    // if(!initialize)
    // props.onValueChanged(Number.parseInt(currentValue.toString()));
  }, [currentValue]);

  useEffect(() => {
    const initValue = props.defaultValue;
    if (initValue !== undefined) {
      const initAngleTrans = {
        value: currentValue,
      };

      if (currentDefaultPropAnimation) currentDefaultPropAnimation.pause();

      setCurrentDefaultPropAnimation(
        anime({
          targets: initAngleTrans,
          value: initValue,
          easing: 'linear',
          duration: 500,
          update() {
            setCurrentValue(Math.round(initAngleTrans.value));
          },
        }),
      );
    }
  }, [props.defaultValue]);

  return (
    <div>
      <div
        id="work"
        ref={workplace}
        onMouseMove={onMove}
        onMouseUp={onDragEnd}
        style={workspaceSize}
        className="workspace"
      >
        <svg id="handPath" style={handPathSize} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.45 161.45">
          <defs>
            <style>
              {`.pathcircle{fill:none;stroke:${
                props.theme ? 'white' : 'black'
              };stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:3px;}`}
            </style>
          </defs>
          <title>Datový zdroj 22</title>
          <g id="Vrstva_2" data-name="Vrstva 2">
            <g id="Vrstva_2-2" data-name="Vrstva 2">
              <circle
                className="pathcircle"
                cx="80.73"
                cy="80.73"
                r="80.6"
                style={{ transform: handPathCircle.transform, transformOrigin: 'center' }}
                strokeDasharray={handPathCircle.circleRadius}
                strokeDashoffset={handPathCircle.maxRadius}
              />
            </g>
          </g>
        </svg>
        <div ref={lines} id="lines" style={linesSize}></div>
        <div ref={hand} id="hand" style={handSize}>
          <svg
            ref={handle}
            onMouseDown={onDrag}
            onTouchMove={onTouchMove}
            id="handle"
            style={handleSize}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 26.04 26.04"
          >
            <defs>
              <style>{`.handle{fill:${handleColor}}`}</style>
            </defs>
            <title>Datový zdroj 25</title>
            <g id="Vrstva_2" data-name="Vrstva 2">
              <g id="Vrstva_2-2" data-name="Vrstva 2">
                <circle className="handle" cx="13.02" cy="13.02" r="13.02" />
              </g>
            </g>
          </svg>
        </div>
        <div className={'valueGroup'}>
          <p>
            <span ref={valueInput} style={{ pointerEvents: 'all' }} onBlur={inputUpdated} contentEditable />
            <span>°C</span>
          </p>
        </div>
      </div>
      <style>{`.smallValueLine,.bigValueLine{background:${props.theme ? 'white' : 'black'}}`}</style>
      <style jsx global>{`
        .workspace {
          background:/*#212121*/ none;
          touch-action: none;
          //height:500px;
          //width:500px;
          margin: auto;
          position: relative;
          border-radius: 100%;
          user-select: none;
          font-family: 'Inter', sans-serif;
          display:flex;
        }
        .workspace .valueGroup {
          position: absolute;
          margin: 0px;
          margin-top: 50%;
          margin-left: 50%;
          transform: translate(-50%, -50%);
          font-size: ${props.config.centerTextSize ? props.config.centerTextSize : '2rem'};
        }
        #lines,
        #handPath,
        .lineContainer,
        .valueLineContainer,
        .valueGroup {
          pointer-events: none;
          overflow: visible;
        }
        #handPath {
          width: 5rem;
          height: 5rem;
        }
        #lines {
          position: absolute;
          height: 0px;
          //width:500px;
          margin-top: 50%;
        }
        .lineContainer,
        .valueLineContainer {
          //width: 250px;
          height: 0;
          position: absolute;
          display: flex;
          align-items: center;
          flex-direction: row;
          transform-origin: right center;
        }
        .line {
          height: ${props.config.outerLinesHeight ? props.config.outerLinesHeight : '5px'};
          width: ${props.config.outerLinesWidth ? props.config.outerLinesWidth : '2rem'};
          margin-left: ${props.config.outerLinesLeftOffset ? props.config.outerLinesLeftOffset : '0.5rem'};
          transform-origin: right center;
        }
        .smallValueLine {
          height: 2px;
          width: 0.5rem;
          margin-left: ${props.config.innerLinesLeftOffset ? props.config.innerLinesLeftOffset : '3.5rem'};
          opacity: 0.2;
        }
        .bigValueLine {
          height: 2px;
          width: 1rem;
          margin-left: ${props.config.innerLinesLeftOffset ? props.config.innerLinesLeftOffset : '3.5rem'};
          opacity: 0.2;
        }
        .valueLineGroup {
          display: flex;
          flex-direction: row;
          align-items: center;
          font-size: 1.5rem;
        }
        .value {
          margin-left: ${props.config.innerLinesTextLeftOffset ? props.config.innerLinesTextLeftOffset : '0.5rem'};
        }
        #handPath {
          //width: 250px;
          //height: 250px;
          margin: 50%;
          transform: translate(-50%, -50%) rotate(180deg);
          position: absolute;
        }
        #hand {
          margin-top: 50%;
          background: red;
          transform-origin: right center;
          position: absolute;
          //width:250px;
          height: 0;
        }
        #handle {
          cursor: grab;
          width: 2rem;
          height: 2rem;
          transform: translate(50%, -50%);
          right: 50%;
          position: absolute;
        }
      `}</style>
    </div>
  );
}

export default Termostat;
