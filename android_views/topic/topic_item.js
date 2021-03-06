/**
 * 话题列表项
 */

import Util from '../common/util';
import NavUtil from '../common/nav_util';
import TopicDetail from '../topic/topic_detail';   // 话题详情
import User from '../user/user';   // 用户详情

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class extends Component {

  /**
   * 格式化 topic tab
   */
  getTab() {
    var topic = this.props.topic;
    if(topic.top) {
      return '置顶';
    }
    switch(topic.tab) {
      case 'ask':
        return '问答';
      case 'share':
        return '分享';
      case 'job':
        return '招聘';
      case 'good':
        return '精华';
    }
  }

  render() {
    return (

      <TouchableHighlight
        underlayColor='#E1E1E1'
        onPress={NavUtil.goTopicDetail.bind(this, this.props.navigator, TopicDetail, this.props.topic.id)}
      >
        <View style={styles.topic_item}>

          <View style={styles.topic_item_top}>
            <Text style={[styles.topic_tab, this.getTab() === '置顶' ? styles.tab_top : null]}>{this.getTab()}</Text>
            <Text style={styles.topic_title} numberOfLines={1}>{this.props.topic.title}</Text>
          </View>

          <View style={styles.topic_item_bottom}>
            <TouchableHighlight
              underlayColor='#fff'
              onPress={NavUtil.goUserDetail.bind(this, this.props.navigator, User, this.props.topic.author.loginname)}
            >
              <Image
                source={{uri: this.props.topic.author.avatar_url}}
                style={styles.author_avatar}
              />
            </TouchableHighlight>

            <View style={styles.topic_item_center}>
              <Text style={[styles.author_name, styles.fontSize13]}>{this.props.topic.author.loginname}</Text>
              <Text style={[styles.topic_createAt, styles.fontSize13]}>创建于：{Util.getFormatDate(this.props.topic.create_at)}</Text>
            </View>

            <View style={styles.topic_item_right}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.topic_pv, styles.fontSize13, {color: '#76B800'}]}>{this.props.topic.reply_count}</Text>
                <Text style={[styles.topic_pv, styles.fontSize13]}> / {this.props.topic.visit_count}</Text>
              </View>
              <Text style={[styles.last_reply_at, styles.fontSize13]}>{Util.getTimeDistance(this.props.topic.last_reply_at)}</Text>
            </View>

          </View>

        </View>
      </TouchableHighlight>

    );
  }

};

const styles = StyleSheet.create({

  topic_item: {
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
    padding: 15,
  },

  topic_item_top: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  topic_tab: {
    backgroundColor: '#eee',
    fontSize: 12,
    paddingLeft: 3,
    paddingRight: 3,
    color: '#aaa',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  tab_top: {
    backgroundColor: '#77B800',
    color: '#fff',
  },
  topic_title: {
    color: '#212121',
    fontSize:16,
    marginLeft: 15,
    width: 285,
  },

  topic_item_bottom: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  author_avatar: {
    height: 34,
    width: 34,
    borderRadius: 17,
  },

  topic_item_center: {
    marginLeft: 10,
  },
  author_name: {
    color: '#212121',
  },
  topic_createAt: {
    marginTop: 3,
  },

  topic_item_right: {
    position: 'absolute',
    right: 0,
    alignItems: 'flex-end',
  },
  topic_pv: {
  },
  last_reply_at: {
    marginTop: 3,
  },

  fontSize13: {
    fontSize: 13,
  },

});
