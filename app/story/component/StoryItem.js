import {Map} from 'immutable';
import React, { Component, PropTypes } from 'react';
import {map} from 'react-immutable-proptypes';
import {
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import {loadStory} from '../action';


class StoryItem extends Component {
  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  componentWillMount() {
    this.props.loadStory(this.props.id);
  }

  shouldComponentUpdate(nProps) {
    return this.props.story !== nProps.story;
  }

  render() {
    const {
      story,
    } = this.props;

    return (
        <TouchableHighlight onPress={this.handlePress}>
          <View style={styles.container}>
            <Text style={styles.title}>{story.get('title') || 'Loading...'}</Text>
            <Text style={styles.author}>{story.get('by') || 'Loading...'}</Text>
            <Text style={styles.time}>{story.get('time') || 'Loading...'}</Text>
          </View>
        </TouchableHighlight>
    );
  }

  handlePress() {
    const story = this.props.story;
    if (story) {
      Actions.storyView({url: story.get('url')});
    }
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
    padding: 10,
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
