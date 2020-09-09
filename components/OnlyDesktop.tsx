import React, {ReactComponentElement, ReactElement} from 'react';

const onlyDesktop = (Component:React.ComponentType<any>) => {
    return class extends React.Component {
        constructor(props:any) {
            super(props);
            this.state = {
                touchDisplay: false,
            };
        }
        componentDidMount() {
            let maxpoints = navigator.maxTouchPoints;
            this.setState({
                touchDisplay: maxpoints
            });
        }
        renderContent() {
            // @ts-ignore
            const { touchDisplay } = this.state;
            if(touchDisplay) {
                return <div style={{position:"absolute",width:"100%",height:"100%"}}><h1>Mobile devices are currently unsuported</h1></div>;
            } else {
                // @ts-ignore
                return <Component { ...this.props } />
            }
        }
        render() {
            return (
                <React.Fragment>
                    {this.renderContent()}
                </React.Fragment>
            );
        }
    };
}
export default onlyDesktop;