/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import StoryList from './story/StoryList';
import store from './store';


export default class Home extends Component {
  render() {
    return (
        <Provider store={store}>
          <StoryList />
        </Provider>
    );
  }
}

