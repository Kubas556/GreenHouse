import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';

export default interface IPageProps {
  appTheme: number;
  switchTheme: () => void;
  user: string;
  width: Breakpoint;
}
