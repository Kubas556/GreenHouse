import React, {useEffect, useRef, useState} from "react";
import anime, {AnimeInstance} from "animejs";
import {firebase} from "../firebase";
import ITempmeter from "../interfaces/ITempmeter";
function Tempmeter(props:ITempmeter){
    const maxHeight = 8;
    const minHeight = 215;
    const height = (minHeight-maxHeight);
    const maxTemp = 50;
    const minTemp = -50;
    const [currentAnim,setCurrentAnim] = useState<AnimeInstance>();
    //const range = Math.abs(minTemp)+maxTemp;

    const text = useRef<SVGTextElement>(null);
    const tempValue = useRef<SVGLineElement>(null);
    const textLine = useRef<SVGLineElement>(null);
    //const water = useRef();

    const duration = 5000;
    const easing = "spring(1, 82, 12, 0)";
    const [currentTemp,setCurrentTemp] = useState(minTemp);
    const [textValue,setTextValue] = useState(minTemp);

    useEffect(()=>{
        let rangeVal = textValue>=0?(textValue+50):50-(Math.abs(textValue));
        let y = height-(((height/100)*rangeVal)-8);

        if(tempValue.current) {
            tempValue.current.setAttribute("y2", y.toString());
        }

        if(textLine.current) {
            textLine.current.setAttribute("y2", y.toString());
            textLine.current.setAttribute("y1", y.toString());
        }

        if(text.current) {
            text.current.setAttribute("transform", "translate(50.59 "+(y-2.77)+")");
        }
    },[textValue]);

    useEffect(()=>{

        var textAnim = {
            text:textValue
        };

        if(currentAnim) {
            currentAnim.pause();
            //console.log("paused")
        }

        setCurrentAnim(anime({
            targets:textAnim,
            text:currentTemp,
            duration:duration,
            easing:easing,
            round:1,
            update:function(){
                setTextValue(textAnim.text);
            }
        }));
    },[currentTemp]);

    useEffect(()=>{
        setCurrentTemp(props.temp);
    },[props.temp]);

    return(
        <div id={"tempmeterContainer"}>
            <style jsx>
                {
                    `#tempmeter {
                        font-family: 'Inter', sans-serif;
                    }`
                }
            </style>
            <svg id={"tempmeter"} xmlns="http://www.w3.org/2000/svg" width={"110"} viewBox="0 0 83.45 252.84">
                <defs>
                    <style>{".cls-1-termostat,.cls-3-termostat,.cls-5-termostat{fill:none;stroke-miterlimit:10;}.cls-1-termostat{stroke:#4950f5;stroke-linecap:round;stroke-width:7px;}.cls-2-termostat{fill:#4950f5;}.cls-3-termostat,.cls-5-termostat{stroke:"+(props.theme==1?"white":"black")+";stroke-width:0.25px;}.cls-4-termostat{font-size:12px;fill:"+(props.theme==1?"white":"black")+";}.cls-5-termostat{stroke - dasharray:0.99 0.99;}"}</style>
                </defs>
                <title>Datový zdroj 27</title>
                <g id="Vrstva_2" data-name="Vrstva 2">
                    <g id="Vrstva_2-2" data-name="Vrstva 2">
                        <line ref={tempValue} className="cls-1-termostat" x1="39.07" y1="236.19" x2="39.07" y2={minHeight}/>
                        <circle className="cls-2-termostat" cx="39.07" cy="236.19" r="12.65"/>
                        <line className="cls-3-termostat" x1="31.85" y1="214.27" x2="6.31" y2="214.27"/>
                        <text className="cls-4-termostat" transform="translate(6.31 211.27)">-50</text>
                        <text className="cls-4-termostat" transform="translate(0 10.31)">50</text>
                        <path className="cls-3-termostat" d="M31.85,221.33a16.53,16.53,0,1,0,14.45,0v-7.07"/>
                        <path className="cls-3-termostat" d="M0,13.31H29.77a2.08,2.08,0,0,1,2.08,2.08V221.33"/>
                        <line ref={textLine} className="cls-3-termostat" x1="82.82" y1={minHeight} x2="39.07" y2={minHeight}/>
                        <text ref={text} className="cls-4-termostat" transform={"translate(50.59 "+(minHeight-2.77)+")"}>{textValue}°C</text>
                        <text className="cls-4-termostat" transform="translate(6.3 110.81)">0</text>
                        <line className="cls-3-termostat" x1="6.31" y1="113.81" x2="31.85" y2="113.81"/>
                        <line className="cls-3-termostat" x1="45.66" y1="113.81" x2="45.16" y2="113.81"/>
                        <line className="cls-5-termostat" x1="44.18" y1="113.81" x2="32.85" y2="113.81"/>
                        <line className="cls-3-termostat" x1="32.35" y1="113.81" x2="31.85" y2="113.81"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default Tempmeter;