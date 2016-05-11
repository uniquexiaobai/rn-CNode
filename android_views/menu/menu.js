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
  goMenuItem(name) {
    var component;
    switch(name) {
      case '消息': component = Message; break;
      case '设置': component = Setting; break;
      case '关于': component = About; break;
    }
    this.props.navigator.push({
      component: component
    });
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
