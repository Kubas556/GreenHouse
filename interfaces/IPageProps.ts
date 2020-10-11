import {Breakpoint} from "@material-ui/core/styles/createBreakpoints";

export default interface IPageProps {
    //setThemeBtn:(value: Boolean)=>void,
    appTheme:number,
    switchTheme:()=>void,
    user:string,
    width:Breakpoint
}