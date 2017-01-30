import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  NavigatorIOS,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ColoredView from './ColoredView';


function CustomNavigator({pageText, color}) {
  return (
      <NavigatorIOS
          style={styles.navigator}
          initialRoute={{
              component: ColoredView,
              passProps: { color, pageText },
              title: pageText,
            }}
      />
  );
}

export default class TabBarNative extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 'home',
    };
  }

  render() {
    return (
        <TabBarIOS tintColor="black" barTintColor="#3abeff">
          <Icon.TabBarItemIOS
              title="Home"
              iconName="ios-home-outline"
              selectedIconName="ios-home"
              selected={this.state.selectedTab === 'home'}
              onPress={() => this.setState({selectedTab: 'home'})}
          >
            <CustomNavigator color="#414A8C" pageText="Home" />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
              title="Starred"
              iconName="ios-star-outline"
              selectedIconName="ios-star"
              selected={this.state.selectedTab === 'starred'}
              onPress={() => this.setState({selectedTab: 'starred'})}
          >
            <CustomNavigator color="#900" pageText="Starred" />
          </Icon.TabBarItemIOS>
          <Icon.TabBarItemIOS
              title="Settings"
              iconName="ios-settings-outline"
              selectedIconName="ios-settings"
              iconColor="#ffffff"
              selectedIconColor="#000099"
              selected={this.state.selectedTab === 'settings'}
              renderAsOriginal={true}
              onPress={() => this.setState({selectedTab: 'settings'})}
          >
            <CustomNavigator color="#009" pageText="Settings" />
          </Icon.TabBarItemIOS>
        </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabText: {
    color: 'white',
  },
  button: {
    marginTop: 20,
    padding: 8,
    backgroundColor: 'white',
    borderRadius: 4,
  },
});
