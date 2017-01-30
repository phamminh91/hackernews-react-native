import React, { Component, PropTypes } from 'react';
import {
  ListView,
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { connect } from 'react-redux';

import MovieListItem from './MovieListItem';
import {
} from '../action';


class NowShowlingList extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadTopStories();
  }

  shouldComponentUpdate(nProps) {
    return this.props.story !== nProps.story;
  }

  render() {
    const topTenStories = this.props.story.get('topStories').toJS();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    const rows = ds.cloneWithRows(topTenStories);
    return (
        <View style={styles.container}>
          <ListView
              dataSource={rows}
              renderRow={storyId => <StoryItem id={storyId} />}
              enableEmptySections={true}
              initialListSize={10}
          />
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
