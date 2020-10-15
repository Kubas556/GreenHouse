import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {ChangeEvent, FormEvent, FormEventHandler, useEffect, useState} from "react";
import {number} from "prop-types";
import {types} from "util";
import {TextField} from "@material-ui/core";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";

interface IWaterMixerTable {
    onChange:(obj:{fertiliser:number,total:number})=>void,
    water:number,
    fertiliser:number
}

export default function WaterMixerTable(props:IWaterMixerTable) {
    const [waterValue, setWaterValue] = useState<number>(props.water);
    const [fertiliserValue, setFertiliserValue] = useState<number>(props.fertiliser);
    const [ratio, setRatio] = useState<string>('');

    useEffect(() => {
        setWaterValue(props.water);
    },[props.water]);

    useEffect(() => {
        setFertiliserValue(props.fertiliser);
    },[props.fertiliser]);

    useEffect(() => {
        setRatio((props.fertiliser < props.water ?"1.00:"+(props.water/props.fertiliser).toFixed(2):(props.fertiliser/props.water).toFixed(2)+":1.00"));
    },[props.fertiliser,props.water]);

    function validate(event:FormEvent<HTMLSpanElement>) {
        let input:HTMLSpanElement = event.nativeEvent.target as HTMLSpanElement;
        if(isNaN(Number(input.innerText))) {
            input.innerText = String(input.id==="water"?waterValue:fertiliserValue);
        } else {
            if(input.id==="water") {
                //if(Number(input.innerText) > 100) {
                setWaterValue(Number(input.innerText));
                let ratio = (fertiliserValue < Number(input.innerText)?"1.00:"+(Number(input.innerText)/fertiliserValue).toFixed(2):(fertiliserValue/Number(input.innerText)).toFixed(2)+":1.00");
                props.onChange({
                    fertiliser:fertiliserValue,
                    total:Number(input.innerText)+fertiliserValue
                });
                //}
                setRatio(ratio);
            }

            if(input.id==="fertiliser") {
                //if(Number(input.innerText) > 100) {
                setFertiliserValue(Number(input.innerText));
                let ratio = (Number(input.innerText) < waterValue?"1.00:"+(waterValue/Number(input.innerText)).toFixed(2):(Number(input.innerText)/waterValue).toFixed(2)+":1.00");
                props.onChange({
                    fertiliser:Number(input.innerText),
                    total:Number(input.innerText)+waterValue
                });
                //}
                setRatio(ratio);
            }
        }
    }

    return(
        <TableContainer>
            <Table size="small" aria-label="a dense table" style={{maxWidth:"100%",}}>
                <TableHead>
                    <TableRow>
                        <TableCell align={'left'}>Hnojivo</TableCell>
                        <TableCell align={'left'}>Voda</TableCell>
                        <TableCell align={'left'}>Poměr</TableCell>
                        <TableCell align={'right'}>Celkem</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                        <TableRow>
                            <TableCell align={'left'}><span id={"fertiliser"} contentEditable={true} suppressContentEditableWarning={true} onBlur={validate}>{fertiliserValue}</span><span> ml</span></TableCell>
                            <TableCell align={'left'}><span id={"water"} contentEditable={true} suppressContentEditableWarning={true} onBlur={validate}>{waterValue}</span><span> ml</span></TableCell>
                            <TableCell align={'left'}>{ratio}</TableCell>
                            <TableCell align={'right'}>{fertiliserValue + waterValue} ml</TableCell>
                        </TableRow>
                </TableBody>
            </Table>
        </TableContainer>
    )
}