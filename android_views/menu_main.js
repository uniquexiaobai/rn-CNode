/**
 * 抽屉菜单导航栏
 */

import NavItem from './nav_item';

import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  View,
} from 'react-native';

export default class extends Component {

  render() {

    return (
      <View>
        <NavItem name={'全部'} source={require('./img/quanbu.png')}/>
        <NavItem name={'精华'} source={require('./img/jinghua.png')}/>
        <NavItem name={'分享'} source={require('./img/fenxiang.png')}/>
        <NavItem name={'问答'} source={require('./img/wenda.png')}/>
        <NavItem name={'招聘'} source={require('./img/zhaopin.png')}/>
        <View style={styles.line}></View>
        <NavItem name={'消息'} source={require('./img/xiaoxi.png')}/>
        <NavItem name={'设置'} source={require('./img/shezhi.png')}/>
        <NavItem name={'关于'} source={require('./img/guanyu.png')}/>
      </View>
    );

  }

};

const styles = StyleSheet.create({
  line: {
    height: 1,
    backgroundColor: '#EBEBEB',
    marginTop: 5,
    marginBottom: 5,
  }
});
