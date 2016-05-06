/**
 * 话题列表
 */

import TopicItem from './topic_item';
import Header from '../header';

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

        <Header
          title={'全部'}
          icon={require('../img/toolbar.png')}
          openDrawerClick={this.props.openDrawerClick}
        />

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
