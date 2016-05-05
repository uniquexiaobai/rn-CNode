/**
 * 话题详情页 - 正文
 */

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
      <View style={styles.detail_content}>

        <Text style={styles.topic_title}>cnode 社区也切换到 Let's encrypt 了</Text>

        <View style={styles.Section2}>

          <Image
            source={{uri: "https://avatars.githubusercontent.com/u/1147375?v=3&s=120"}}
            style={styles.author_avatar}
          />

          <View style={styles.topic_item_center}>
            <View style={styles.detail_center}>
              <Text style={styles.topic_tab}>置顶</Text>
              <Text style={styles.author_name}>fengmk2</Text>
            </View>
            <Text style={styles.topic_pv}>2周前创建 * 5277次浏览</Text>
          </View>

          <Image
            source={require('../img/good.png')}
            style={styles.detail_good}
          />

        </View>

      </View>
    );
  }

};

const styles = StyleSheet.create({
  detail_content: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 15,
  },
  topic_title: {
    color: '#2C2C2C',
    fontSize:17,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  Section2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  author_avatar: {
    height: 38,
    width: 38,
    borderRadius: 19,
    marginRight: 10,
  },

  detail_center: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  topic_tab: {
    backgroundColor: '#77B800',
    fontSize: 13,
    borderRadius: 5,
    color: '#fff',
    marginRight: 8,
  },
  author_name: {
    color: '#2C2C2C',
    fontSize: 15,
  },
  topic_pv: {
    color: '#8A8A8A',
    marginTop: 5,
    fontSize: 15,
  },

  detail_good: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 19,
    height: 19,
  }

});
