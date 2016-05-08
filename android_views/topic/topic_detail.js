/**
 * 话题详情页
 */

import Util from '../common/util';
import Header from '../common/header';
import DetailContent from './detail_content';
import DetailComment from './detail_comment';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default class extends Component {

  render() {
    return (
      <View style={{flex: 1}}>

        <Header
          title={'话题'}
          icon={require('../img/back.png')}
          openDrawerClick={this.props.openDrawerClick}
        />

        <ScrollView style={styles.scrollView}>

          <DetailContent topic_id={this.props.topic_id} />

          <DetailComment topic_id={this.props.topic_id} />

        </ScrollView>

      </View>
    );
  }

};

const styles = StyleSheet.create({

  scrollView: {
    height: Util.size.height - 80,
    width: Util.size.width,
  }

});
