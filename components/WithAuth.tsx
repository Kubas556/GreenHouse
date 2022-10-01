import React from 'react';
import router from 'next/router';
import { authInstance } from '../firebase/index';
import { onAuthStateChanged } from 'firebase/auth';
import Loading from './Loading';
import { namedTypes } from 'ast-types';

const withAuth = (Component: React.ComponentType<any>) => {
  return class extends React.Component {
    constructor(props: any) {
      super(props);
      this.state = {
        status: 'LOADING',
      };
    }
    componentDidMount() {
      onAuthStateChanged(authInstance, (authUser) => {
        if (authUser) {
          this.setState({
            status: 'SIGNED_IN',
          });
        } else {
          router.push('/login');
        }
      });
    }
    renderContent() {
      // @ts-ignore
      const { status } = this.state;
      if (status === 'LOADING') {
        return (
          <div style={{ position: 'absolute', width: '100%', height: '100%' }}>
            <Loading />
          </div>
        );
      }
      if (status === 'SIGNED_IN') {
        // @ts-ignore
        return <Component user={authInstance.currentUser.uid} {...this.props} />;
      }
    }
    render() {
      return <React.Fragment>{this.renderContent()}</React.Fragment>;
    }
  };
};
export default withAuth;
