import React, { Component } from 'react';
import { Provider } from 'react-redux';

import createStore from './configureStore';

import RouterComponent from './Router';

class App extends Component {
  render() {
    const store = createStore({});
    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
