/**
 * 抽屉菜单
 */

import MenuHeader from './menu_header';
import NavList from './nav_list';

import Message from './items/message';
import Setting from './items/setting';
import About from './items/about';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class extends Component {
  
  // 点击菜单 item 后跳转到相应的页面
  goMenuItem(tabName, isTop) {
    
    var component;
    
    if(isTop) {
      var t = 'all';
      switch(tabName) {
        case '全部': t= 'all'; break;
        case '精华': t = 'good'; break;
        case '分享': t = 'share'; break;
        case '问答': t = 'ask'; break;
        case '招聘': t = 'job'; break;
      }
      this.props.switchTab(t);
    }
    
    else {
      switch(tabName) {
        case '消息': component = Message; break;
        case '设置': component = Setting; break;
        case '关于': component = About; break;
      }
      this.props.navigator.push({
        component: component
      });
    }
    
    this.props.cloneDrawer();           // 关闭抽屉菜单
    
  }

  render() {

    return (
      <View>
        <MenuHeader />
        <NavList goMenuItem={this.goMenuItem.bind(this)}/>
      </View>
    );

  }

};
