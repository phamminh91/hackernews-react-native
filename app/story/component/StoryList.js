import React, { Component, PropTypes } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import StoryItem from './StoryItem';
import {
  loadTopStories,
} from '../action';


class StoryList extends Component {
  componentWillMount() {
    this.props.loadTopStories();
  }

  render() {
    const topTenStories = this.props.story.get('topStories').slice(0, 10);
    return (
      <View style={styles.container}>
        {topTenStories.map((storyId, idx) =>
          <StoryItem key={storyId} id={storyId} />
        )}
      </View>
    );
  }
}

StoryList.propTypes = {
  loadTopStories: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default connect((store) => {
  return {
    story: store.story,
  };
}, {
  loadTopStories,
})(StoryList);
