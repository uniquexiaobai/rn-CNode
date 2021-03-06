/**
 * 路由初始页面
 */

import Menu from './menu/menu';          // 左抽屉菜单
import TopicList from './topic/topic_list';   // 话题列表

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
  BackAndroid,
} from 'react-native';

export default class extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 'all'               // 此状态控制 tab 切换
    };
  }
  
  /**
   * 切换 tab，更改 topic_list 中请求的url
   */
  switchTab(tab) {
    this.setState({activeTab: tab});
    alert(tab);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.backAndroidPress.bind(this));
  }

  componentWillUnMount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.backAndroidPress.bind(this));
  }

  // 处理 Android 返回键事件
  backAndroidPress() {
    const {navigator} = this.props;
    const routers = navigator.getCurrentRoutes();
    if(routers.length > 1) {
      navigator.pop();
      return true;
    }
    return false;
  }
  
  // 点击主页面 toolbar 的菜单 icon 图标触发
  openDrawerClick() {
    this.refs.drawer.openDrawer();
  }
  
  /**
   * 关闭抽屉菜单
   */
  cloneDrawer() {
    this.refs.drawer.closeDrawer();
  }

  render() {
    return (

      <DrawerLayoutAndroid
        ref="drawer"
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu switchTab={this.switchTab.bind(this)} navigator={this.props.navigator} cloneDrawer={this.cloneDrawer.bind(this)}/>}
      >

        <TopicList
          openDrawerClick={this.openDrawerClick.bind(this)}
          navigator={this.props.navigator ? this.props.navigator : false}
          activeTab={this.state.activeTab}
        />

      </DrawerLayoutAndroid>

    );
  }

}
