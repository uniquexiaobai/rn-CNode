/**
 * 话题详情页
 */

import Util from '../common/util';
import Header from '../common/header';
import DetailContent from './detail_content';
import DetailComment from './detail_comment';
import User from '../user/user';                // 用户详情页

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';

export default class extends Component {

  // 切换路由到 user 详情页
  goUserDetail(name) {
    this.props.navigator.push({
      component: User,
      passProps: {
        author_name: name
      }
    });
  }

  render() {
    return (
      <View style={{flex: 1}}>

        <Header
          title={'话题'}
          icon={require('../img/back.png')}
          onIconClicked={Util.navigationBack.bind(this, this.props.navigator)}
        />

        <ScrollView style={styles.scrollView}>

          <DetailContent
            topic_id={this.props.topic_id}
            goUserDetail={this.goUserDetail.bind(this)}
          />

          <DetailComment
            topic_id={this.props.topic_id}
          />

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
