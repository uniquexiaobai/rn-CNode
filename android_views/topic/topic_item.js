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
        onPress={() => alert('topic_item')}
        underlayColor='green'
      >
        <View style={styles.topic_item}>

          <View style={styles.topic_item_top}>
            <Text style={styles.topic_tab}>分享</Text>
            <Text style={styles.topic_title}>怎眼打造高性能的http接口服务</Text>
          </View>

          <View style={styles.topic_item_bottom}>

            <Image
              source={{uri: "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"}}
              style={styles.author_avatar}
            />

            <View style={styles.topic_item_center}>
              <Text style={[styles.author_name, styles.fontSize13]}>alsotang</Text>
              <Text style={[styles.topic_createAt, styles.fontSize13]}>创建于：2016-04-16 16:02:08</Text>
            </View>

            <View style={styles.topic_item_right}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.topic_pv, styles.fontSize13, {color: '#76B800'}]}>46</Text>
                <Text style={[styles.topic_pv, styles.fontSize13]}> / 3434</Text>
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
