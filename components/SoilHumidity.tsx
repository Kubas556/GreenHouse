import React, {useRef} from "react";
//@ts-ignore
import anime, {AnimeInstance} from "animejs";
import {useState,useEffect} from "react";
import ISoilHumudity from "../interfaces/ISoilHumudity";
import {number} from "prop-types";


/*type Props = {
    width:String
}*/

const SoilHumidity = (props:ISoilHumudity) => {
    const [componentWidth,setComponentWidth] = useState<number>(props.config.width?props.config.width:337);
    const [componentHeight,setComponentHeight] = useState<number>(props.config.height?props.config.height:337);
    const bubbleBaseSize = 7;
    const minY = 251.27;
    const maxY = 113.27 ;
    const bubbleConfig = [{y:50,delay:1000},{y:40,delay:3000},{y:60,delay:2000}];
    const [currentValue,setCurrentValue] = useState(props.value?props.value:0);
    const [currentY,setCurrentY] = useState(minY);
    const [animX,setAnimX] = useState({x:37.49});
    const [currentAnimation,setCurrentAnimation] = useState<AnimeInstance>();
    const waves = useRef<SVGPathElement>(null);
    const percentageLine = useRef<SVGLineElement>(null);
    const percentageLine2 = useRef<SVGLineElement>(null);
    const percentageLevel = useRef();
    const waterLevel = useRef<SVGRectElement>(null);
    const percentageText = useRef<SVGTextElement>(null);
    const waveGap = 195;

    function setValue(val:number) {
        let value = maxY + ((minY-maxY)/100)*(100-val);
        let percentage = Math.round(100-(((value-maxY)/(minY-maxY))*100));
        setCurrentY(percentage>0?value:(minY+(componentHeight/2)));

        if(percentageLine.current) {
            percentageLine.current.setAttribute("y1", value.toString());
            percentageLine.current.setAttribute("y2", value.toString());
        }

        if(percentageLine2.current) {
            percentageLine2.current.setAttribute("y1", value.toString());
            percentageLine2.current.setAttribute("y2", value.toString());
        }

        if(waterLevel.current) {
            waterLevel.current.style.height = (minY - value) + "px";
            waterLevel.current.style.transform = "translate(51px," + value + "px)";
        }

        if(percentageText.current) {
            percentageText.current.setAttribute(
                "transform",
                "translate(248 " + (value - 2.5) + ")"
            );
            percentageText.current.innerHTML = percentage+"%";
        }

        document.querySelectorAll(".bubble").forEach((el,i)=>{
            el.setAttribute("cy",value.toString());
            anime({
                targets:el,
                cy:value-bubbleConfig[i].y,
                opacity:[{
                    value:1,
                    easing:"linear",
                    duration:1500
                },{
                    value:0,
                    easing:"linear",
                    duration:1000
                }],
                loop:true,
                duration:2000,
                easing:"easeInOutQuad",
                delay:bubbleConfig[i].delay
            })
        });
    }

    anime({
        targets: animX,
        x: [10,75],
        loop:true,
        duration:4000,
        easing:"easeInOutQuad",
        direction: 'alternate',
        update: function() {
            if(waves.current)
                waves.current.setAttribute(
                    "transform",
                    "translate("+animX.x+","+(currentY-waveGap)+")"
                );
        }
    });

    useEffect(() => {
        const animParam = {
            value:currentValue
        };

        if(currentAnimation)
            currentAnimation.pause();

        setCurrentAnimation(anime({
            targets: animParam,
            value:props.value?props.value:0,
            update: function() {
                setValue(animParam.value);
                setCurrentValue(animParam.value);
            }
        }));
    },[props.value]);

    return (
        <div style={{width:componentWidth,height:componentHeight,position:"relative"}}>
            <style>
                {
                    ".vlh-pud-svg{" +
                        "position:absolute;"+
                        "pointer-events:none;"+
                        "left:0"+
                    "}"
                }
            </style>
            <svg style={{height:0}} className={"vlh-pud-svg"}>
                <defs>
                    <filter id="filter">
                        <feGaussianBlur stdDeviation="11 11" result="blur"/>
                        <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" in="blur" result="colormatrix"/>
                        <feComposite in="SourceGraphic" in2="colormatrix" operator="atop" result="composite"/>
                    </filter>
                </defs>
            </svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={"vlh-pud-svg"} style={{width:componentWidth,zIndex:1}} viewBox="0 0 277.6 273.27">
                <defs>
                    <style>{".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:"+(props.theme==1?"white":"black")+";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path-vlh-pud);}.cls-8-vlh-pud{fill:#18b8d4;}"}</style>
                    <clipPath id="clip-path-vlh-pud" transform="translate(37.49)">
                        <path className="cls-1-vlh-pud" d="M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z"/>
                    </clipPath>
                </defs>
                <title>Datový zdroj 39</title>
                <g id="Vrstva_2" data-name="Vrstva 2">
                    <g id="Vrstva_4" data-name="Vrstva 4">
                        <text id="Percentage-text" ref={percentageText} style={{
                            fontSize: 12+"px",
                            fill: (props.theme==1?"white":"black"),
                            fontFamily: "'Inter', sans-serif"
                        }}>50%</text>
                        <polygon className="cls-3-vlh-pud" points="38.16 100.94 242.91 100.94 196 261.92 85.08 261.92 38.16 100.94"/>
                        <line className="cls-4-vlh-pud" id="Percentage-line" ref={percentageLine2} x1="140.54" y1="171.72" x2="277.03" y2="171.72"/>
                        <line className="cls-5-vlh-pud" x1="140.54" y1="100.94" x2="78.71" y2="121.49"/>
                        <path className="cls-6-vlh-pud" d="M104.54,30.4V101h-3V32.36l.09-.25c.21-.58.42-1.15.65-1.71Z" transform="translate(37.49)"/>
                        <path className="cls-6-vlh-pud" d="M104.08,43.66c-.82-.79-1.67-1.55-2.54-2.28A53.92,53.92,0,0,0,30,43.66l-1.12,1.08L30,45.83A53.19,53.19,0,0,0,67,60.58a53.3,53.3,0,0,0,34.51-12.47c.87-.73,1.72-1.49,2.54-2.28l.46-.44V44.1ZM67,57.58a50.25,50.25,0,0,1-33.8-12.84,50.92,50.92,0,0,1,67.61,0A50.26,50.26,0,0,1,67,57.58Z" transform="translate(37.49)"/>
                        <path className="cls-6-vlh-pud" d="M174,71.75a51.74,51.74,0,0,0-69.42-16.32c-.71.41-1.42.85-2.11,1.3l-.89.58v.8l.46.7c.8,1.22,1.65,2.41,2.54,3.55A51.4,51.4,0,0,0,134.65,81.1a52.31,52.31,0,0,0,10.74,1.12,51.46,51.46,0,0,0,28.13-8.39l1.26-.82Zm-38.69,6.42a48.53,48.53,0,0,1-29.91-19.74,48.72,48.72,0,0,1,65.23,13.7A48.46,48.46,0,0,1,135.27,78.17Z" transform="translate(37.49)"/>
                        <path className="cls-6-vlh-pud" d="M163.38,2.82a48.37,48.37,0,0,0-61.1,27.58c-.23.56-.44,1.13-.65,1.71l-.09.25v1.32l1,.35c.67.24,1.33.46,2,.66a48.25,48.25,0,0,0,14.23,2.15,48.21,48.21,0,0,0,20.7-4.69A48.13,48.13,0,0,0,164.29,4.74l.51-1.42ZM138.19,29.44A45.11,45.11,0,0,1,105,31.69,45.39,45.39,0,0,1,160.93,5.16,45.14,45.14,0,0,1,138.19,29.44Z" transform="translate(37.49)"/>
                        <polyline className="cls-5-vlh-pud" points="175.47 136.72 140.54 100.94 130.06 142.65"/>
                        <line className="cls-5-vlh-pud" x1="110.93" y1="110.78" x2="116.13" y2="127.94"/>
                        <line className="cls-5-vlh-pud" x1="156.22" y1="117" x2="175.47" y2="107.74"/>
                        <line className="cls-5-vlh-pud" x1="136.51" y1="117" x2="147.87" y2="129.75"/>
                        <g className="cls-7-vlh-pud">
                <line className="cls-4-vlh-pud" id="Percentage-line" ref={percentageLine} style={{zIndex:10}} x1="277.03" y1="171.72" x2="38.16" y2="171.72"/>
            </g></g></g></svg>

            <svg xmlns="http://www.w3.org/2000/svg" className={"vlh-pud-svg"} style={{filter: "url(#filter)", zIndex:0, width:componentWidth}} viewBox="0 0 277.6 273.27">
                <defs>
                    <style>{".cls-1-vlh-pud,.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{fill:none;}.cls-2-vlh-pud{fill:#fff;}.cls-3-vlh-pud,.cls-4-vlh-pud{stroke:"+(props.theme==1?"white":"black")+";}.cls-3-vlh-pud,.cls-4-vlh-pud,.cls-5-vlh-pud{stroke-miterlimit:10;}.cls-3-vlh-pud{stroke-opacity:0.49;}.cls-4-vlh-pud{stroke-width:0.25px;}.cls-5-vlh-pud{stroke:#925f36;stroke-width:3px;}.cls-6-vlh-pud{fill:#80bb50;}.cls-7-vlh-pud{clip-path:url(#clip-path);}.cls-8-vlh-pud{fill:#18b8d4;}"}</style>
                    <clipPath id="clip-path" transform="translate(37.49)">
                        <path className="cls-1-vlh-pud" d="M191.25,112.08Q171,181.44,150.83,250.78H55.26Q35,181.44,14.84,112.08Z"/>
                    </clipPath>
                </defs>
                <title>Datový zdroj 39</title>
                <g id="Vrstva_2" data-name="Vrstva 2">
                    <g id="Vrstva_4" data-name="Vrstva 4">
                        <g className="cls-7-vlh-pud">
                            <path className="cls-8-vlh-pud" ref={waves} id="waves" d="M-37.49,186.07s21.6-11.18,35.87-9.94c4.86.43,18.05,9.46,56,9.94,18.25.23,11.15-10.47,35.65-6.45,21.14,3.47,37.89,7.81,42.32,7.81,17.23,0,20.75-6.33,27.61-3.17,21.18,9.76,31-2.27,49.3,3.17,17.78,5.28,25.25,1.22,26.32-1.36v87.2h-273Z" transform="translate(37.49)"/>
                <circle className="bubble cls-8-vlh-pud" cx="143.17" cy="255.18" r={(bubbleBaseSize+1)}/>
                <circle className="bubble cls-8-vlh-pud" cx="103.17" cy="255.18" r={(bubbleBaseSize+2.63)}/>
                <circle className="bubble cls-8-vlh-pud" cx="183.17" cy="255.18" r={(bubbleBaseSize+1.63)}/>
                <rect id="water-level" ref={waterLevel} className="cls-8-vlh-pud" style={{transform: "translate(51px, 58px)",width: 179+"px"}}/>
                        </g>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default SoilHumidity;