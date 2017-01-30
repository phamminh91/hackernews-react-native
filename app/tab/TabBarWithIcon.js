import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Tabs from 'react-native-tabs';

export default class Example extends Component {
  constructor(props){
    super(props);
    this.state = {page:'second'};
  }

  render() {
    var self = this;
    return (
        <View style={styles.container}>
          <Tabs selected={this.state.page} style={styles.tabContainer}
                selectedStyle={{color:'blue'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Icon name="ios-list-box-outline"
                  size={30}
                  color="gray"
                  style={styles.tabItem}
            />
            <Icon name="ios-funnel-outline"
                  size={30}
                  color="gray"
                  style={styles.tabItem}
            />
          </Tabs>
          <Text style={styles.welcome}>
            Welcome to React Native
          </Text>
          <Text style={styles.instructions}>
            Selected page: {this.state.page}
          </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabContainer: {
    height: 50,
    backgroundColor:'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  // tabItem: {
  //   flex: 1,
  //   margin: 0,
  //   padding: 0,
  // },
  // tabItemLabel: {
  //   fontSize: 10,
  //   color: '#eee',
  // },
});

