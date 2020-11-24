import {useEffect} from "react";
import anime from "animejs";
import CircularProgress from '@material-ui/core/CircularProgress';

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
    <div className="wrap">
        {/*<div className="wrap">
            <div>Loading</div>
            <div className="loadingDot">.</div>
            <div className="loadingDot">.</div>
            <div className="loadingDot">.</div>
        </div>*/}
        <CircularProgress />
        <style jsx global>{`
            .wrap{
              width:100%;
              height:100%;
              position:relative;
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