import {useEffect} from "react";
import anime from "animejs";

function Loading(){
    useEffect(()=>{
        anime({
            targets:".loadingDot",
            translateY:[
                {value:"-100%",duration:300,easing:"easeOutCubic"},
                {value:"0",duration:600,easing:"easeOutCubic"}
            ],
            direction: 'alternate',
            delay: anime.stagger(300, {start: 0}),
            loop: true,
        })
    },[]);
return (
    <div>
        <div className="wrap">
            <div>Loading</div>
            <div className="loadingDot">.</div>
            <div className="loadingDot">.</div>
            <div className="loadingDot">.</div>
        </div>
        <style jsx global>{`
            .wrap{
              width:100%;
              height:100%;
              position:absolute;
              display:flex;
              align-items: center;
              justify-content: center;
            }
            
            .wrap > div{
              font-size:5rem;
            }
            
            .wrap > .loadingDot{
              width:2rem;
              height:2rem;
              position:relative;
              margin:1rem;
              border-radius:100%;
            }
        `}</style>
    </div>
)
}

export default Loading;