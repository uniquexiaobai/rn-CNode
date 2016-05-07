/**
 * 话题列表项
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class extends Component {

  render() {
    return (

      <TouchableHighlight
        underlayColor='#E1E1E1'
        onPress={this.props.goTopicDetail}
      >
        <View style={styles.topic_item}>

          <View style={styles.topic_item_top}>
            <Text style={styles.topic_tab}>{this.props.topic.tab}</Text>
            <Text style={styles.topic_title} numberOfLines={1}>{this.props.topic.title}</Text>
          </View>

          <View style={styles.topic_item_bottom}>

            <Image
              source={{uri: this.props.topic.author.avatar_url}}
              style={styles.author_avatar}
            />

            <View style={styles.topic_item_center}>
              <Text style={[styles.author_name, styles.fontSize13]}>{this.props.topic.author.loginname}</Text>
              <Text style={[styles.topic_createAt, styles.fontSize13]}>创建于：{new Date(this.props.topic.create_at).toLocaleDateString()}</Text>
            </View>

            <View style={styles.topic_item_right}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.topic_pv, styles.fontSize13, {color: '#76B800'}]}>{this.props.topic.reply_count}</Text>
                <Text style={[styles.topic_pv, styles.fontSize13]}> / {this.props.topic.visit_count}</Text>
              </View>
              <Text style={[styles.last_reply_at, styles.fontSize13]}>18小时前</Text>
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
    fontSize: 13,
    borderRadius: 2,
    color: '#aaa',
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
