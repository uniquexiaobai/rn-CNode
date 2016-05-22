/**
 * 用户详情页面
 */

import UserInfo from './user_info';
import UserContent from './user_content';
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
      show: false,
      tab: '最近回复',
      page: 0
    };

  }
  
  /**
   * [switchTab 点击 tab 时触发]
   * @param  {[type]} tabName [tab 选项卡名称]
   */
  switchTab(tabName, pageIndex) {
    this.setState({tab: tabName, page: pageIndex});
  }
  
  /**
   * [switchPage 左右滑动切换 page]
   * @param  {[type]} page [page index]
   */
  switchPage(page) {
    const tabNames = ['最近回复', '最新发布', '话题收藏'];  
    this.setState({tab: tabNames[page], page: page});
  }

  render() {
    
    return (

      <View style={{flex: 1}}>
      
        {
          this.state.show
          ?
            <UserInfo user={this.state.user} navigator={this.props.navigator ? this.props.navigator : false} />
          : Util.loading
        }
        
        <UserContent navigator={this.props.navigator ? this.props.navigator : false} user={this.state.user} page={this.state.page} tab={this.state.tab} switchPage={this.switchPage.bind(this)} switchTab={this.switchTab.bind(this)}/>
        
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
