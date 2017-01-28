import React, { Component } from 'react';
import { Provider } from 'react-redux';

import StoryList from './story/component/StoryList';
import store from './store';


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <StoryList />
        </Provider>
    );
  }
}

