/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import AppNavigator from './AppNavigator';
import myReducer from './src/Redux/MyReducer';

const store = createStore(myReducer);

export default class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <AppNavigator />
      </Provider>
    );
  }
}