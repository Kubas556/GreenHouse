export default interface IPageProps {
    defaultValue:number|undefined,
    theme:number
    onValueChanged(value: number): void;
}