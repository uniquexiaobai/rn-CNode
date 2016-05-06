/**
 * 话题详情页
 */

import Header from '../header';
import DetailContent from './detail_content';
import DetailComment from './detail_comment';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class extends Component {

  render() {
    return (
      <View>

        <Header
          title={'话题'}
          icon={require('../img/back.png')}
          openDrawerClick={this.props.openDrawerClick}
        />

        <DetailContent />

        <DetailComment />

      </View>
    );
  }

};

const styles = StyleSheet.create({

  topic_title: {
    color: '#212121',
    fontSize:16,
    marginLeft: 15,
  },
});
