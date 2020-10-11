import ITermostatConfig from "./ITermostatConfig";
export default interface IPageProps {
    defaultValue:number|undefined,
    theme:number,
    onValueChanged(value: number): void,
    config:ITermostatConfig,
    width?:number,
    height?:number
}