import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import StoryItem from './StoryItem';


class StoryList extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.story.map((story, idx) =>
          <StoryItem
            key={idx}
            title="title"
            author="author"
            karma={100}
          />
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect((store) => {
  return {
    story: store.story,
  };
})(StoryList);
