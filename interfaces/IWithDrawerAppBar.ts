import React from "react";

export default interface IAppBar {
    component:React.ComponentType<any>,
    componentProps:React.ComponentProps<any>,
    title:string,
    deviceId:string
}