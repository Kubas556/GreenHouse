import React, {useEffect, useRef, useState} from "react";
import anime from "animejs";
import {firebase} from "../firebase/index";
function Termostat(props){
    const min = 0;
    const max = 50;
    const minAngle = 0;
    const maxAngle = 180;
    const segCount = 22//11;
    const initValue = props.defaultValue;
    const lines = useRef();
    const valueInput = useRef();
    const hand = useRef();
    const handle = useRef();
    let [containers,setContainers] = useState();
    let [lastNode,setLastNode] = useState();
    let [lastNodeAngle,setLastNodeAngle] = useState(0);
    let [angleTrans,setAngleTrans] = useState(0);
    let [currentAngle,setCurrentAngle] = useState(0);
    let [handAngle,setHandAngle] = useState(0);
    let [currentValue,setCurrentValue] = useState(0);
    let [drag,setDrag] = useState(false);

    function inputUpdated(e){
        let val = e.target.value;
        setCurrentValue(val);
        setCurrentAngle((maxAngle/max)*val);
    }

    function onMove(e){
        if(drag){
            let angle = Math.atan2(e.nativeEvent.offsetY-250, e.nativeEvent.offsetX-250);
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
                angle2-=360

            if(angle2 >= 0 && angle2 <= maxAngle) {
                setCurrentValue(Math.round((max / maxAngle) * angle2));
                setAngleTrans(angle2);
                setHandAngle(angle2);
            }
        }
    }

    function onDrag(e){
        if(!drag) {
            setDrag(true);
            handle.current.style.pointerEvents= "none";
        }
    }

    function onDragEnd(e){
        if(drag){
            setDrag(false);
            handle.current.style.pointerEvents="all";
        }
    }

    useEffect(()=>{
        if(containers) {
            let angle = Math.round(handAngle);
            if (angle <= maxAngle && angle >= minAngle) {
                for (let i = 0; i < containers.length; i++) {

                    let containerAngle = parseInt(containers[i].getAttribute('rotate'));
                    if ((containerAngle > lastNodeAngle && containerAngle <= angle) || (containerAngle < lastNodeAngle && angle <= containerAngle)) {
                        anime({
                            targets: lastNode,
                            scale: [
                                {value: 1, easing: 'easeInOutQuad', duration: 500}
                            ],
                            delay: 0,
                        });
                        anime({
                            targets: containers[i].childNodes,
                            scale: [
                                {value: 1.5, easing: 'easeOutSine', duration: 500}
                            ],
                            delay: 0,
                        });
                        setLastNode(containers[i].childNodes[0]);
                        setLastNodeAngle(containerAngle);
                        break;
                    }

                }
                ;
                hand.current.style.transform = "rotate(" + (angle) + "deg)";
            }
        }
    },[handAngle]);

    useEffect(()=>{
        let anim = {
            value:angleTrans
        };

        anime({
            targets:anim,
            value:(currentAngle),
            easing:"linear",
            duration:500,
            update:function(){
                //updateHandAngle(anim.value);
                setHandAngle(anim.value);
            },
            complete:()=>{
                setAngleTrans(currentAngle);
            }
        });
    },[currentAngle]);

    useEffect(()=>{
        valueInput.current.value = currentValue;
    },[currentValue]);

    useEffect(()=>{
        let j = 0;
        for(let i = 0; i < segCount; i++){
            let handAngle = Math.round((maxAngle/max)*j);
            let line = '<div rotate='+handAngle+' style="transform:rotate('+handAngle+'deg)!important;" class="lineContainer"><div class="line"></div></div>';
            lines.current.innerHTML += line;
            j+=max/(segCount-1);
        }

        let contData = document.getElementsByClassName('lineContainer');
        let initlastNode = contData[0].childNodes[0];
        let initLastNodeAngle = 0;
        anime({
            targets: contData[0].childNodes[0],
            scale: [
                {value: 1.5, easing: 'easeOutSine', duration: 500}
            ],
            delay: 0,
        });

        let lineSegs = document.getElementsByClassName("line");
        const first = [73, 80, 245];
        const second = [244, 67, 54];

        for(let i = 0; i < lineSegs.length;i++){
            var percent = ((i)/(lineSegs.length-1));

            var red = first[0] + percent * (second[0] - first[0]);
            var green = first[1] + percent * (second[1] - first[1]);
            var blue = first[2] + percent * (second[2] - first[2]);

            lineSegs[i].style.background = "rgb("+red+","+green+","+blue+")";
        };

        setContainers(contData);
        const updateHandAngle = (angle) => {
            angle = Math.round(angle);

            if(angle <= maxAngle && angle >= minAngle){
                for(let i = 0; i < contData.length; i++){

                    let containerAngle = parseInt(contData[i].getAttribute('rotate'));
                    if((containerAngle > initLastNodeAngle && containerAngle <= angle) || (containerAngle < initLastNodeAngle && angle <= containerAngle)) {
                        anime({
                            targets: initlastNode,
                            scale: [
                                {value: 1, easing: 'easeInOutQuad', duration: 500}
                            ],
                            delay: 0,
                        });
                        anime({
                            targets: contData[i].childNodes,
                            scale: [
                                {value: 1.5, easing: 'easeOutSine', duration: 500}
                            ],
                            delay: 0,
                        });
                        initlastNode = contData[i].childNodes[0];
                        initLastNodeAngle = containerAngle;
                        break;
                    }

                };
                //document.getElementById("hand").style.transform="rotate("+(angle)+"deg)";
            }
        };

        let initAngleTrans = {
            value:0
        }

        anime({
            targets:initAngleTrans,
            value:((maxAngle/max)*initValue),
            easing:"linear",
            duration:500,
            update:function(){
                updateHandAngle(initAngleTrans.value);
            },
            complete:function () {
                setLastNode(initlastNode);
                setLastNodeAngle(initLastNodeAngle);
                setCurrentValue(initValue);
                setCurrentAngle((maxAngle/max)*initValue);
            }
        });
    },[]);

    return(
        <div>
            <div id="work" onMouseMove={onMove} onMouseUp={onDragEnd} className="workspace">
                <svg id="handPath" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 161.45 161.45">
                    <defs>
                        <style>{".pathcircle{fill:none;stroke:"+(props.theme==1?"white":"black")+";stroke-miterlimit:10;stroke-opacity:0.08;stroke-width:2px;}"}</style>
                    </defs>
                    <title>Datový zdroj 22</title>
                    <g id="Vrstva_2" data-name="Vrstva 2">
                        <g id="Vrstva_2-2" data-name="Vrstva 2">
                            <circle className="pathcircle" cx="80.73" cy="80.73" r="80.6" stroke-dasharray="253" stroke-dashoffset="253"/>
                        </g>
                    </g>
                </svg>
                <div ref={lines} id="lines">
                </div>
                <div ref={hand} id="hand">
                    <svg ref={handle} onMouseDown={onDrag} id="handle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.04 26.04">
                        <defs>
                            <style>{".handle{fill:#2196f3;}"}</style>
                        </defs>
                        <title>Datový zdroj 25</title>
                        <g id="Vrstva_2" data-name="Vrstva 2">
                            <g id="Vrstva_2-2" data-name="Vrstva 2">
                                <circle className="handle" cx="13.02" cy="13.02" r="13.02"/>
                            </g>
                        </g>
                    </svg>
                </div>
            </div>
            <input ref={valueInput} onBlur={inputUpdated} type = "number"></input>
            <style jsx global>{`
                .workspace{
                  background:/*#212121*/none;
                  height:500px;
                  width:500px;
                  margin:auto;
                  position:relative;
                  border-radius:100%;
                }
                #lines,#handPath,.lineContainer{
                  pointer-events: none;
                  overflow:visible;
                }
                #handPath{
                  width:5rem;
                  height:5rem;
                }
                #lines{
                  position:absolute;
                  height:0px;
                  width:500px;
                  margin-top:50%;
                }
                .lineContainer{
                  width: 250px;
                  position:absolute;
                  transform-origin: right center;
                }
                .line{
                  height:5px;
                  width:3rem;
                  margin-left:1.5rem;
                }
                #handPath{
                  width: 250px;
                    height: 250px;
                    margin: 50%;
                    transform: translate(-50%, -50%);
                    position: absolute;
                }
                #hand{
                  margin-top:50%;
                  background:red;
                  transform-origin: right center;
                  position:absolute;
                  width:250px;
                  height:0;
                }
                #handle{
                  cursor: grab;
                  width:2rem;
                  height:2rem;
                  transform:translate(50%,-50%);
                  right:125px;
                  position:absolute;
                }
            `}</style>
        </div>
    )
}

export default Termostat;