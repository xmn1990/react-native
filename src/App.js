import React, { Component } from 'react';
import dva from './utils/dva';
import models from './models';
import Router from './routes';
const app = dva({ models });

class App extends Component {
  render() {
    return (
      <Router
        ref={nav => {
          GLOBAL.navigation = nav;
        }}
      />
    );
  }
}

export default app.start(<App />);
