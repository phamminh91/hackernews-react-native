import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';
import StoryList from './story/component/StoryList';


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <StoryList />
        </Provider>
    );
  }
}

