import {Map} from 'immutable';
import React, { Component, PropTypes } from 'react';
import {map} from 'react-immutable-proptypes';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import {loadStory} from '../action';


class StoryItem extends Component {
  componentWillMount() {
    this.props.loadStory(this.props.id);
  }

  render() {
    const {
      story,
    } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.title}>{story.get('title') || 'Loading...'}</Text>
        <Text style={styles.author}>{story.get('by') || 'Loading...'}</Text>
        <Text style={styles.time}>{story.get('time') || 'Loading...'}</Text>
      </View>
    );
  }
}

StoryItem.propTypes = {
  id: PropTypes.number.isRequired,
  story: map,
  loadStory: PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  title: {
    fontWeight: '600',
    marginBottom: 4,
  },
  author: {
    fontSize: 10,
  },
  time: {
    fontSize: 10,
  }
});

export default connect((store, props) => {
  return {
    story: store.story.getIn(['stories', '' + props.id]) || Map(),
  };
}, {loadStory})(StoryItem);
