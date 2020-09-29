import React, {useEffect, useRef, useState} from "react";
import anime from "animejs";
import {firebase} from "../firebase";
import ITempmeter from "../interfaces/ITempmeter";
function Tempmeter(props:ITempmeter){
    const maxHeight = 8;
    const minHeight = 215;
    const height = (minHeight-maxHeight);
    const maxTemp = 50;
    const minTemp = -50;
    //const range = Math.abs(minTemp)+maxTemp;
    let temp = props.temp;
    let rangeVal = temp>=0?((50/maxTemp)*temp)+50:50-((50/Math.abs(minTemp))*Math.abs(temp));
    let y = height-(((height/100)*rangeVal)-8);

    const text = useRef<SVGTextElement>(null);
    const tempValue = useRef<SVGLineElement>(null);
    const textLine = useRef<SVGLineElement>(null);
    const water = useRef();

    const duration = 5000;
    const easing = "spring(1, 82, 12, 0)";
    const [prevText,setPrevtext] = useState(minTemp);

    useEffect(()=>{
        var textAnim = {
            text:prevText
        };

        anime({
            targets:textAnim,
            text:temp,
            duration:duration,
            easing:easing,
            round:1,
            update:function(){
                if(text.current)
                text.current.innerHTML = textAnim.text+"°C";
            },
            complete:function (anim) {
                setPrevtext(temp);
            }
        });

        anime({
            targets:tempValue.current,
            y2:y,
            duration:duration,
            easing:easing,
            update:function(){

            }
        });

        anime({
            targets:textLine.current,
            y2:y,
            y1:y,
            duration:duration,
            easing:easing,
            update:function(){

            }
        });

        anime({
            targets:text.current,
            transform:"translate(50.59 "+(y-2.77)+")",
            duration:duration,
            easing:easing,
            update:function(){

            }
        });

        anime({
            targets:water.current,
            d:"M 0.14 16.09 C 0.14 16.09 21.14 20.25 22.49 12.8 C 23.84 5.35 17.37 0.13 9.87 0.13 C 2.37 0.13 0.14 16.09 0.14 16.09 Z",
            duration:1000,
            easing:'linear',
            direction: 'alternate',
            loop:true
        });

    },[props.temp]);

    return(
        <div>
            <style>
                {"#tempmeter:{font-family: 'Inter', sans-serif;}"}
            </style>
        <svg id={"tempmeter"} xmlns="http://www.w3.org/2000/svg" width={"110"} viewBox="0 0 83.45 252.84">
            <defs>
                <style>{".cls-1,.cls-3,.cls-5{fill:none;stroke-miterlimit:10;}.cls-1{stroke:#4950f5;stroke-linecap:round;stroke-width:7px;}.cls-2{fill:#4950f5;}.cls-3,.cls-5{stroke:"+(props.theme==1?"white":"black")+";stroke-width:0.25px;}.cls-4{font-size:12px;fill:"+(props.theme==1?"white":"black")+";}.cls-5{stroke - dasharray:0.99 0.99;}"}</style>
            </defs>
            <title>Datový zdroj 27</title>
            <g id="Vrstva_2" data-name="Vrstva 2">
                <g id="Vrstva_2-2" data-name="Vrstva 2">
                    <line ref={tempValue} className="cls-1" x1="39.07" y1="236.19" x2="39.07" y2={minHeight}/>
                    <circle className="cls-2" cx="39.07" cy="236.19" r="12.65"/>
                    <line className="cls-3" x1="31.85" y1="214.27" x2="6.31" y2="214.27"/>
                    <text className="cls-4" transform="translate(6.31 211.27)">-50</text>
                    <text className="cls-4" transform="translate(0 10.31)">50</text>
                    <path className="cls-3" d="M31.85,221.33a16.53,16.53,0,1,0,14.45,0v-7.07"/>
                    <path className="cls-3" d="M0,13.31H29.77a2.08,2.08,0,0,1,2.08,2.08V221.33"/>
                    <line ref={textLine} className="cls-3" x1="82.82" y1={minHeight} x2="39.07" y2={minHeight}/>
                    <text ref={text} className="cls-4" transform={"translate(50.59 "+(minHeight-2.77)+")"}>20°C</text>
                    <text className="cls-4" transform="translate(6.3 110.81)">0</text>
                    <line className="cls-3" x1="6.31" y1="113.81" x2="31.85" y2="113.81"/>
                    <line className="cls-3" x1="45.66" y1="113.81" x2="45.16" y2="113.81"/>
                    <line className="cls-5" x1="44.18" y1="113.81" x2="32.85" y2="113.81"/>
                    <line className="cls-3" x1="32.35" y1="113.81" x2="31.85" y2="113.81"/>
                </g>
            </g>
        </svg>
        </div>
    )
}

export default Tempmeter;