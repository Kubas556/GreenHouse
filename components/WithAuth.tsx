import React, {ReactComponentElement, ReactElement} from 'react';
import router from 'next/router';
import { auth } from '../firebase/index';
import {namedTypes} from "ast-types";

const withAuth = (Component:React.ComponentType<any>) => {
    return class extends React.Component {
        constructor(props:any) {
            super(props);
            this.state = {
                status: 'LOADING',
            };
        }
        componentDidMount() {
            auth.onAuthStateChanged(authUser => {
                if(authUser) {
                    this.setState({
                        status: 'SIGNED_IN'
                    });
                }else {
                    router.push('/login');
                }
            });
        }
        renderContent() {
            // @ts-ignore
            const { status } = this.state;
            if(status == 'LOADING') {
                return <h1>Loading ......</h1>;
            }else if(status == 'SIGNED_IN') {
                // @ts-ignore
                return <Component user={auth.currentUser.uid} { ...this.props } />
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
export default withAuth;