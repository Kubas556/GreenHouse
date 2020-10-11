import React, {useEffect, useRef, useState,MouseEvent,SyntheticEvent} from "react";
import anime from "animejs";
import {firebase} from "../firebase";
import ITermostat from "../interfaces/ITermostat";
import {number} from "prop-types";
import {useTheme} from "@material-ui/styles";
import IWaterMixer from "../interfaces/IWaterMixer";

function WaterMixer(props:IWaterMixer) {
    const radius = 119.82;
    const componentWidth = 337;
    const componentHeight = 337;
    const maxProgress = 2*Math.PI*radius;

    const touchArea = useRef<HTMLDivElement>(null);

    const [fertiliserValue,setFertiliserValue] = useState<number>(0);

    const [redProgress,setRedProgress] = useState<number>(maxProgress+((maxProgress/100)*fertiliserValue));
    const [blueProgress,setBlueProgress] = useState<number>(maxProgress-((maxProgress/100)*(100-fertiliserValue)));
    const [lineAngle,setLineAngle] = useState<number>((360/100)*fertiliserValue);

    function onMouseMove(e:MouseEvent) {
        if(e.nativeEvent.buttons === 1) {
            e.preventDefault();
            calculateAngle(e.nativeEvent.offsetX - (337 / 2), e.nativeEvent.offsetY - (337 / 2));
        }
    }

    // @ts-ignore
    function onTouchMove(e:TouchEvent<HTMLDivElement>) {
        e.nativeEvent.preventDefault();
        if(touchArea.current) {
            let testX = (e.nativeEvent.targetTouches[0].pageX - (touchArea.current.getBoundingClientRect().left + window.scrollX)) - (componentWidth / 2);
            let testY = (e.nativeEvent.targetTouches[0].pageY - (touchArea.current.getBoundingClientRect().top + window.scrollY)) - (componentHeight / 2);

            calculateAngle(testX, testY);
        }
    }

    function calculateAngle(x:number, y:number) {
        let angle = Math.atan2(y, x);
        let angle2 = angle * (180/Math.PI);
        //to 360 range
        if(angle2 < 0)
        {
            angle2 = 360-(-angle2);
        }
        //set 0 angle
        angle2+= 180;
        //corect angle
        if(angle2 > 360)
            angle2-=360;

        angle2=(360-angle2);

        angle2 += 90; //rotate axis to 90 deg
        if(angle2>360)
            angle2-=360;

        setLineAngle(angle2);
        setFertiliserValue((100/360)*angle2);
        /*if(angle2 < 0)
            angle2 = (angleOverlap-((360-maxAngle) + angle2));
        else
            angle2=-(angle2-maxAngle-angleOverlap);*/

        /*if(angle2 >= (minAngle) && angle2 <= (maxAngle)) {
            setCurrentValue(Math.round(((max / maxAngle) * angle2)));
            setAngleTrans(angle2-angleOverlap);
            setHandAngle(angle2-angleOverlap);
        }*/
    }

    useEffect(() => {
        setRedProgress(maxProgress+((maxProgress/100)*fertiliserValue));
        setBlueProgress(maxProgress-((maxProgress/100)*(100-fertiliserValue)));
    },[fertiliserValue]);

    return (
        <div ref={ touchArea } style={{touchAction:"none"}} onMouseMove={ onMouseMove } onTouchMove={ onTouchMove }>
            <style jsx global>{`
                .cls-9-watermixer, .cls-10-watermixer, .cls-7-watermixer, .cls-8-watermixer {
                    transform-origin: 178.77px 215.28px;
                    transform: rotate(-90deg);
                }
                .cls-1-watermixer, .cls-11-watermixer {
                  transform-origin: 178.77px 215.28px;
                }
            `}</style>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 357.53 394.04" style={{display:"block"}} width={componentWidth+"px"} height={componentHeight+"px"}>
                <defs>
                    <style>{".cls-1-watermixer,.cls-10-watermixer,.cls-12-watermixer,.cls-2-watermixer,.cls-7-watermixer,.cls-8-watermixer,.cls-9-watermixer{fill:none;}.cls-1-watermixer,.cls-2-watermixer{stroke:"+(props.theme==1?"white":"black")+";}.cls-1-watermixer,.cls-10-watermixer,.cls-2-watermixer,.cls-7-watermixer,.cls-8-watermixer,.cls-9-watermixer{stroke-miterlimit:10;}.cls-1-watermixer{stroke-opacity:0.49;}.cls-2-watermixer{opacity:0.49;}.cls-3-watermixer{font-size:22px;fill:"+(props.theme==1?"white":"black")+";font-family:\"Roboto\", \"Helvetica\", \"Arial\", sans-serif;}.cls-4-watermixer{letter-spacing:-0.03em;}.cls-5-watermixer{letter-spacing:0.01em;}.cls-6-watermixer{letter-spacing:-0.01em;}.cls-7-watermixer,.cls-8-watermixer{stroke:#18b8d4;}.cls-7-watermixer,.cls-9-watermixer{stroke-width:18px;}.cls-10-watermixer,.cls-8-watermixer{stroke-width:40px;opacity:0.2;}.cls-10-watermixer,.cls-9-watermixer{stroke:#fb6544;}.cls-11-watermixer{fill:#2196f3;}"}</style>
                </defs>
                <g id="Vrstva_2" data-name="Vrstva 2">
                    <g id="Vrstva_4" data-name="Vrstva 4">
                        <line className="cls-1-watermixer" x1="178.77" y1="60.94" x2="178.77" y2="131.97"/>
                        <polyline className="cls-2-watermixer" points="212.55 75.65 230.74 40.81 310.1 40.81"/>
                        <polyline className="cls-2-watermixer" points="144.98 72.06 126.79 37.22 47.43 37.22"/>
                        <text className="cls-3-watermixer" transform="translate(261.32 34.73)">
                            <tspan className="cls-4-watermixer">V</tspan>
                            <tspan x="11.55" y="0">oda</tspan>
                        </text>
                        <text className="cls-3-watermixer" transform="translate(47.43 30.09)">
                            <tspan className="cls-5-watermixer">H</tspan>
                            <tspan x="14.56" y="0">noji</tspan>
                            <tspan className="cls-6-watermixer" x="49.35" y="0">v</tspan>
                            <tspan x="59.71" y="0">o</tspan>
                        </text>
                        <circle className="cls-7-watermixer" cx="178.77" cy="215.28" r="119.82" strokeDasharray={ maxProgress } strokeDashoffset={ blueProgress }/>
                        <circle className="cls-8-watermixer" cx="178.77" cy="215.28" r="119.82" strokeDasharray={ maxProgress } strokeDashoffset={ blueProgress }/>
                        <circle className="cls-9-watermixer" cx="178.77" cy="215.28" r="119.82" strokeDasharray={ maxProgress } strokeDashoffset={ redProgress }/>
                        <circle className="cls-10-watermixer" cx="178.77" cy="215.28" r="119.82" strokeDasharray={ maxProgress } strokeDashoffset={ redProgress }/>
                        <line className="cls-1-watermixer" x1="13.02" y1="215.28" x2="178.77" y2="215.28" style={{transform:"rotate("+(90-lineAngle)+"deg)"}}/>
                        <circle className="cls-11-watermixer" cx="13.02" cy="215.28" r="13.02" style={{transform:"rotate("+(90-lineAngle)+"deg)",cursor:"grab"}}/>
                        <rect className="cls-12-watermixer" width="357.53" height="394.04"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default WaterMixer;