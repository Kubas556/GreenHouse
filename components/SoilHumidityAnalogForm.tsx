import React, {useEffect, useState} from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import SoilHumiditySensorIcon from "../icons/soilHumiditySensor";
import {Typography} from "@material-ui/core";
import {height} from "@material-ui/system";
import {number} from "prop-types";

export default function SoilHumidityAnalogForm(props:{
    analogData:{min:number,max:number},
    open:boolean,
    handleClose:()=>void,
    onChange:(analogData:{min:number,max:number})=>void
}) {

    const [analogMin,setAnalogMin] = useState<number>(props.analogData.min);
    const [analogMax,setAnalogMax] = useState<number>(props.analogData.max);

    useEffect(()=>{
        setAnalogMin(props.analogData.min);
        setAnalogMax(props.analogData.max);
    },[props.analogData]);

    return (
        <div>
            <Dialog open={props.open} onClose={props.handleClose} aria-labelledby="soil-analog-config-form-dialog">
                <DialogTitle id="form-dialog-title">Nastavení</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        <Typography>Nastavení analog hodnot čidla vlhkosti</Typography>
                    </DialogContentText>
                    <TextField
                        defaultValue={props.analogData.min}
                    margin="dense"
                    id="min"
                    label="Min"
                    type="number"
                        onChange={(e)=>{setAnalogMin(parseInt(e.currentTarget.value))}}
                    fullWidth
                    />
                    <TextField
                        defaultValue={props.analogData.max}
                        margin="dense"
                        id="max"
                        label="Max"
                        type="number"
                        onChange={(e)=>{setAnalogMax(parseInt(e.currentTarget.value))}}
                        fullWidth
                    />
                    <DialogContentText style={{textAlign:"center",paddingTop:"1rem"}}>
                        <SoilHumiditySensorIcon style={{height:"4em",width:"4em"}}/>
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={props.handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={()=>{
                        props.onChange({min:analogMin,max:analogMax});
                        props.handleClose();
                    }} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
);
}