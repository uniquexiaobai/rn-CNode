/**
 * 话题详情页 - 正文
 */
import Util from '../common/util';
import NavUtil from '../common/nav_util';
import User from '../user/user';                // 用户详情页

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  WebView,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class extends Component {

  constructor(props) {
    super(props);
    this.state = {
      topic: {author: {}},
      show: false
    };
  }

  render() {

    return (
      <View style={{flex: 1}}>

        {
          this.state.show
          ?
            <View style={styles.detail_content}>

              <Text style={styles.topic_title}>{this.state.topic.title}</Text>

              <View style={styles.Section2}>

                <TouchableHighlight
                  underlayColor='#fff'
                  onPress={NavUtil.goUserDetail.bind(this, this.props.navigator, User, this.state.topic.author.loginname)}
                >
                  <Image
                    source={{uri: this.state.topic.author.avatar_url}}
                    style={styles.author_avatar}
                  />
                </TouchableHighlight>

                <View style={styles.topic_item_center}>
                  <View style={styles.detail_center}>
                    <Text style={styles.topic_tab}>置顶</Text>
                    <Text style={styles.author_name}>{this.state.topic.author.loginname}</Text>
                  </View>
                  <Text style={styles.topic_pv}>2周前创建 * {this.state.topic.visit_count}次浏览</Text>
                </View>

                <Image
                  source={require('../img/good.png')}
                  style={styles.detail_good}
                />

              </View>

              <View style={{flex: 1, backgroundColor: 'red', }}>
              <WebView
                startInLoadingState={false}
                html={this.state.topic.content}
                style={styles.topic_content}
              >
              </WebView>
              </View>

            </View>
          :
            Util.loading
        }

      </View>
    );

  }

  /**
   * 页面加载完成后根据 topic id 查询话题详细信息
   */
  componentDidMount() {

    var id = this.props.topic_id;
    var url = 'http://cnodejs.org/api/v1/topic/' + id;
    var that = this;

    // 数据加载前 loading 动画
    this.setState({
      show: false
    });

    // 发送 get 请求
    Util.get(url, function(data) {

      if(!data.success) {
        return alert('数据加载出错！');
      }

      that.setState({
        topic: data.data,
        show: true
      });

    }, function(err) {

      alert(err);

    });

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
    fontSize:16,
    lineHeight: 23,
    marginBottom: 12,
    fontWeight: 'bold',
  },
  Section2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    backgroundColor: '#eee',
    fontSize: 12,
    paddingLeft: 3,
    paddingRight: 3,
    color: '#aaa',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  author_name: {
    color: '#2C2C2C',
    fontSize: 15,
    marginLeft: 10,
  },
  topic_pv: {
    color: '#8A8A8A',
    marginTop: 5,
    fontSize: 14,
  },

  detail_good: {
    position: 'absolute',
    right: 10,
    top: 10,
    width: 19,
    height: 19,
  },

  topic_content: {
    height: 350,
    width: Util.size.width - 30,
  },

});
