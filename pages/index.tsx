import {Typography} from "@material-ui/core";
import React from "react";
import withAuth from "../components/WithAuth";
import WithAppBar from "../components/WithAppBar";
import IPageProps from "../interfaces/IPageProps";

function index(){
    return(
        <div>
            <Typography variant="h1" noWrap component={"div"}>
                {"Index page"}
            </Typography>
        </div>
    );
}

export default withAuth((props:IPageProps)=>{return(
    <WithAppBar component={index} title={"Index"} componentProps={props}/>
)});