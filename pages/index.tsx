import {Typography} from "@material-ui/core";
import React from "react";
import withAuth from "../components/WithAuth";

function index(){
    return(
        <div>
            <Typography variant="h1" noWrap component={"div"}>
                {"Index page"}
            </Typography>
        </div>
    );
}

export default withAuth(index);