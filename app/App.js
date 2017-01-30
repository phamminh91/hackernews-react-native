import React, { Component } from 'react';
import {
  NavigatorIOS,
  StyleSheet,
  TabBarIOS,
  Text,
  View,
} from 'react-native';
import { Provider } from 'react-redux';
import { Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/Ionicons';

import store from './store';
import HomeTab from './story/component/HomeTab';


const Tab = {
  home: 0,
  setting: 1,
};

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: Tab.home,
    };
  }

  render() {
    return (
        <Provider store={store}>
          <TabBarIOS tintColor="black" barTintColor="#fafafa">
            <Icon.TabBarItemIOS
                title="Home"
                iconName="ios-home-outline"
                selectedIconName="ios-home"
                selected={this.state.selectedTab === Tab.home}
                onPress={() => this.setState({selectedTab: Tab.home})}
            >
              <HomeTab />
            </Icon.TabBarItemIOS>
            <Icon.TabBarItemIOS
                title="Starred"
                iconName="ios-star-outline"
                selectedIconName="ios-star"
                selected={this.state.selectedTab === Tab.setting}
                onPress={() => this.setState({selectedTab: Tab.setting})}
            >
              <View><Text>Setting</Text></View>
            </Icon.TabBarItemIOS>
          </TabBarIOS>
        </Provider>
    );
  }
}

let style = StyleSheet.create({
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
