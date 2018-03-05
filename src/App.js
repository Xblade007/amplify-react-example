import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, {API} from 'aws-amplify';
import {withAuthenticator} from 'aws-amplify-react';

//configure and register aws amplify
const amplify_config = {
  Auth: {
    aws_cognito_identity_pool_id: 'ap-southeast-2:fcd83fb3-1c99-4002-b406-80ef5245bf8b',
    aws_user_pools_id: 'ap-southeast-2_GOWBVxrJa',
    aws_user_pools_web_client_id: 'v2oi7kab1irvg83265cisg515',
    aws_cognito_region: 'ap-southeast-2'
  },
  API: {
    endpoints: [
      {
        name: "helloLambdaApiGateway",
        endpoint: "https://7ar0ingi82.execute-api.ap-southeast-2.amazonaws.com",
        region: "ap-southeast-2"
      }
    ]
  }
};
Amplify.configure(amplify_config);

class App extends Component {

  componentDidMount() {
    API.get('helloLambdaApiGateway', '/dev/hello', {}).then(response => {
      console.log(`response is: ${JSON.stringify(response)}`);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
