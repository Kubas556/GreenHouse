import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { FormEvent, useEffect, useState } from 'react';

interface IWaterMixerTable {
  onChange: (obj: { fertiliser: number; total: number }) => void;
  water: number;
  fertiliser: number;
}

export default function WaterMixerTable(props: IWaterMixerTable) {
  const [waterValue, setWaterValue] = useState<number>(props.water);
  const [fertiliserValue, setFertiliserValue] = useState<number>(props.fertiliser);
  const [ratio, setRatio] = useState<string>('');

  useEffect(() => {
    setWaterValue(props.water);
  }, [props.water]);

  useEffect(() => {
    setFertiliserValue(props.fertiliser);
  }, [props.fertiliser]);

  useEffect(() => {
    const ratio =
      fertiliserValue < waterValue
        ? // tslint:disable-next-line:prefer-template
          '1.00:' + (fertiliserValue === 0 ? '0.00' : (waterValue / fertiliserValue).toFixed(2))
        : // tslint:disable-next-line:prefer-template
          (waterValue === 0 ? '0.00' : (fertiliserValue / waterValue).toFixed(2)) + ':1.00';
    setRatio(ratio);
  }, [waterValue, fertiliserValue]);

  function validate(event: FormEvent<HTMLSpanElement>) {
    const input: HTMLSpanElement = event.nativeEvent.target as HTMLSpanElement;
    if (isNaN(Number(input.innerText))) {
      input.innerText = String(input.id === 'water' ? waterValue : fertiliserValue);
    } else {
      if (input.id === 'water') {
        // if(Number(input.innerText) > 100) {
        setWaterValue(Number(input.innerText));
        props.onChange({
          fertiliser: fertiliserValue,
          total: Number(input.innerText) + fertiliserValue,
        });
        // }
      }

      if (input.id === 'fertiliser') {
        // if(Number(input.innerText) > 100) {
        setFertiliserValue(Number(input.innerText));
        props.onChange({
          fertiliser: Number(input.innerText),
          total: Number(input.innerText) + waterValue,
        });
      }
    }
  }

  return (
    <TableContainer>
      <Table size="small" aria-label="a dense table" style={{ maxWidth: '100%' }}>
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
            <TableCell align={'left'}>
              <span id={'fertiliser'} contentEditable={true} suppressContentEditableWarning={true} onBlur={validate}>
                {Math.round(fertiliserValue)}
              </span>
              <span> ml</span>
            </TableCell>
            <TableCell align={'left'}>
              <span id={'water'} contentEditable={true} suppressContentEditableWarning={true} onBlur={validate}>
                {Math.round(waterValue)}
              </span>
              <span> ml</span>
            </TableCell>
            <TableCell align={'left'}>{ratio}</TableCell>
            <TableCell align={'right'}>{Math.round(fertiliserValue + waterValue)} ml</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
