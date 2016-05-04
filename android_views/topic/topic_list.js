/**
 * 话题列表
 */

import TopicItem from './topic_item';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class extends Component {

  render() {
    return (
      <View>

        <TopicItem />
        <TopicItem />
        <TopicItem />
        <TopicItem />

      </View>
    );
  }

};

const styles = StyleSheet.create({

});
