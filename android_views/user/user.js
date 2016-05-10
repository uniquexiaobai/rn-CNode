/**
 * 用户详情页面
 */

import UserInfo from './user_info';
import Util from '../common/util';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';


export default class extends Component {

  constructor(props) {

    super(props);

    this.state = {
      user: {},
      show: false
    };

  }

  // 处理 toolbar 中返回按钮 press 事件
  navigationBack() {
    this.props.navigator.pop();
  }

  render() {
    return (

      <View>
        {
          this.state.show
          ?
            <UserInfo user={this.state.user} navigationBack={this.navigationBack.bind(this)}/>
          : Util.loading
        }
        <Text>用户详情页</Text>
        <Text>{this.props.author_id}</Text>
      </View>

    );
  }

  /**
   * 页面加载完成后，根据 author_id 请求作者详细信息
   */
  componentDidMount() {

    var author_name = this.props.author_name;
    var url = 'http://cnodejs.org/api/v1/user/' + author_name;
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
        user: data.data,
        show: true
      });

    }, function(err) {

      alert(err);

    });

  }

};

const styles = StyleSheet.create({




});
