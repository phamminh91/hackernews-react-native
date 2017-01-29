import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';

import store from './store';
import StoryList from './story/component/StoryList';
import StoryView from './story/component/StoryView';


export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
            <Scene key="root">
              <Scene key="topStories" component={StoryList} title="Top stories" initial={true} />
              <Scene key="storyView" component={StoryView} title="Story" />
            </Scene>
          </Router>
        </Provider>
    );
  }
}

