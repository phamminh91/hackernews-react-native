import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class StoryItem extends Component {
  render() {
    const {
      title, author, karma
    } = this.props;
    return (
      <View style={styles.container}>
        <Text>{title}</Text>
        <Text>{author}</Text>
        <Text>{karma}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
