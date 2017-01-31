import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';


export default class ColoredView extends Component {
  componentWillMount() {
    Icon.getImageSource('md-arrow-back', 30)
        .then((source) => this.setState({ backIcon: source }));
  }

  _navigateToSubview() {
    this.props.navigator.push({
      component: ColoredView,
      title: this.props.pageText,
      leftButtonIcon: this.state.backIcon,
      onLeftButtonPress: () => this.props.navigator.pop(),
      passProps: this.props,
    });
  }

  render() {
    return (
        <View style={[styles.tabContent, {backgroundColor: this.props.color}]}>
          <Text style={styles.tabText}>{this.props.pageText}</Text>
          <TouchableOpacity onPress={() => this._navigateToSubview()}>
            <View style={styles.button}><Text style={styles.buttonText}>Tap Me</Text></View>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
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
