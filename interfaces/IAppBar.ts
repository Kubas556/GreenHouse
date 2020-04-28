import React from "react";

export default interface IHighOrderComponent {
    component:React.ComponentType<any>,
    componentProps:React.ComponentProps<any>
}