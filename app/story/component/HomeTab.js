import React, { Component } from 'react';
import { Platform, StyleSheet } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import StoryList from './StoryList';
import StoryView from './StoryView';


const paddingTop = Platform.OS === 'ios'? 64 : 54; //nav bar height
console.log(paddingTop);

export default class HomeTab extends Component {
  render() {
    return (
        <Router navigationBarStyle={style.navbar}
                titleStyle={style.navbarTitle}
                barButtonTextStyle={style.navbarButtonText}
                barButtonIconStyle={style.navbarButtonIcon}
        >
          <Scene key="root">
            <Scene key="topStories" sceneStyle={style.scene} component={StoryList} title="Top stories" initial={true} />
            <Scene key="storyView" sceneStyle={style.scene} component={StoryView} title="Story" />
          </Scene>
        </Router>
    );
  }
}

let style = StyleSheet.create({
  scene: {
    paddingTop: Platform.OS === 'ios'? 64 : 54, //nav bar height
    flex: 1,
  },
  navbar: {
    backgroundColor:'#0d47a1',
  },
  navbarTitle: {
    color: '#ffffff',
  },
  navbarButtonText:{
    color:'#FFFFFF'
  },
  navbarButtonIcon:{
    tintColor:'rgb(255,255,255)'
  },
});
