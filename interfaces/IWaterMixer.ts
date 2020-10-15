import {number} from "prop-types";

export default interface IWaterMixer {
    theme:number,
    defaults:{fertiliser:number,total:number},
    onChange:(data:{water:number,fertiliser:number,ratio:string,total:number})=>void
}