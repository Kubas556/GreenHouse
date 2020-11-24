import React, {useRef} from "react";
//@ts-ignore
import anime, {AnimeInstance} from 'animejs';
import {useState,useEffect} from "react";
import IAirHumudity from "../interfaces/IAirHumudity";


/*type Props = {
    width:String
}*/

const AirHumidity = (props:IAirHumudity) => {
    const [componentWidth,setComponentWidth] = useState<number>(props.config.width?props.config.width:337);
    const [componentHeight,setComponentHeight] = useState<number>(props.config.height?props.config.height:337);
    const minY = 176.4;
    const maxY = 18;
    const [currentValue,setCurrentValue] = useState(props.value?props.value:0);
    const [currentY,setCurrentY] = useState(minY);
    const [animX1,setAnimX1] = useState({x:60.15});
    const [animX2,setAnimX2] = useState({x:60.15});
    const [currentAnimation, setCurrentAnimation] = useState<AnimeInstance>();
    const wave1 = useRef<SVGPathElement>(null);
    const wave2 = useRef<SVGPathElement>(null);
    const percentageLine = useRef<SVGLineElement>(null);
    const percentageLine2 = useRef<SVGLineElement>(null);
    const percentageLevel = useRef<SVGPathElement>(null);
    const percentageText = useRef<SVGTextElement>(null);
    const waveGap = 125;

    function setValue(val:number) {
        let value = maxY + ((minY-maxY)/100)*(100-val)
        let percentage = Math.round(100-(((value-maxY)/(minY-maxY))*100));
        setCurrentY(percentage>0?value:(minY+150));

        if(percentageLine.current) {
            percentageLine.current.setAttribute("y1", value.toString());
            percentageLine.current.setAttribute("y2", value.toString());
        }

        if(percentageLine2.current) {
            percentageLine2.current.setAttribute("y1", value.toString());
            percentageLine2.current.setAttribute("y2", value.toString());
        }

        if(percentageLevel.current)
        percentageLevel.current.setAttribute(
            "d",
            "M107.87,"+value+"V178H-2.5V"+value+"Z"
        );

        if(percentageText.current) {
            percentageText.current.setAttribute(
                "transform",
                "translate(168.67 " + (value - 2.5) + ")"
            );
            percentageText.current.innerHTML = percentage + "%";
        }
    }

    anime({
        targets: animX1,
        x: [60.15,100],
        direction: 'alternate',
        duration: 7000,
        easing: 'easeInOutQuad',
        loop: true,
        update: function() {
            if(wave2.current)
            wave2.current.setAttribute(
                "transform",
                "translate("+animX1.x+","+(currentY-waveGap)+")"
            );
        }
    });
    anime({
        targets: animX2,
        x: [60.15,30],
        direction: 'alternate',
        duration: 5000,
        easing: 'easeInOutQuad',
        loop: true,
        update: function() {
            if(wave1.current)
            wave1.current.setAttribute(
                "transform",
                "translate("+animX2.x+","+(currentY-waveGap)+")"
            );
        }
    });

    /*useEffect(() => {
        setValue(0);
    },[]);*/

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
        <div style={{width:componentWidth,height:componentHeight}}>
            <style>
                {".cls-2-vlh-vz{font-size:12px;fill:"+(props.theme==1?"white":"black")+";font-family: 'Inter', sans-serif;"}
            </style>
            <svg viewBox="0 0 225.68 211.24" style={{width:componentWidth}}>
                <defs>
                    <style>{".cls-1-vlh-vz,.cls-7-vlh-vz,.cls-8-vlh-vz{fill:none;}.cls-2-vlh-vz{font-size:12px;fill:"+(props.theme==1?"white":"black")+";}.cls-3-vlh-vz{clip-path:url(#clip-path-vlh-vz);}.cls-4-vlh-vz,.cls-5-vlh-vz,.cls-6-vlh-vz{fill:#18b8d4;}.cls-5-vlh-vz{opacity:0.2;}.cls-6-vlh-vz{opacity:0.4;}.cls-7-vlh-vz,.cls-8-vlh-vz{stroke:"+(props.theme==1?"white":"black")+";stroke-miterlimit:10;}.cls-7-vlh-vz{stroke-width:0.25px;}.cls-8-vlh-vz{stroke-opacity:0.49;}"}</style>
                    <clipPath id="clip-path-vlh-vz" transform="translate(60.15)">
                        <path className="cls-1-vlh-vz" d="M97.89,131.23a45.2,45.2,0,0,1-90.4,0c0-25,45.2-112.92,45.2-112.92S97.89,106.27,97.89,131.23Z"/>
                    </clipPath>
                </defs>
                <title>Datový zdroj 34</title>
                <g id="Vrstva_2" data-name="Vrstva 2">
                    <g id="Vrstva_2-2" data-name="Vrstva 2">
                        <text className="cls-2-vlh-vz" ref={percentageText} transform="translate(168.67 92.37)">20%</text>
                        <g className="cls-3-vlh-vz">
                            <path className="cls-4-vlh-vz" ref={percentageLevel} d="M107.87,130V178H-2.5V130Z" transform="translate(60.15)"/>
                            <path className="cls-5-vlh-vz" ref={wave1} d="M-60.15,119.12C-50,117.26-33.65,115.07-22.6,106c8.67-7.15,39.09,15,64.25,2.33,16.79-8.48,29.88,7.41,49.55-2.71,21.4-11,26.09,9.28,50.31,5.13,13.61-2.33,18-.34,24,8.42v92.12H-60.15Z" transform="translate(60.15)"/>
                            <path className="cls-6-vlh-vz" ref={wave2} d="M-60.15,130.57c10.16-1.46,18.58-3.63,27.06-13.73,8.21-9.78,26.9,11.07,52.65-.63,19.47-8.84,22.05,5,40.11,1.79,14.11-2.54,31.12-4.79,38.47,1.54s15.27-3.27,21.14-2.38c20.72,3.12,16.17-3,31.36-7.92,13.05-4.26,8.85,14.4,14.89,21.33v73H-60.15Z" transform="translate(60.15)"/>
                            <line ref={percentageLine} className="cls-7-vlh-vz" x1="60.65" y1="94.6" x2="192.78" y2="94.6"/>
                        </g>
                        <path className="cls-8-vlh-vz" d="M104.87,131.47a52.19,52.19,0,0,1-104.37,0C.5,102.64,52.69,1.09,52.69,1.09S104.87,102.64,104.87,131.47Z" transform="translate(60.15)"/>
                        <line ref={percentageLine2} data-name="Percentage-line" className="cls-7-vlh-vz" x1="112.84" y1="94.6" x2="192.78" y2="94.6"/>
                    </g>
                </g>
            </svg>
        </div>
    );
};

export default AirHumidity;