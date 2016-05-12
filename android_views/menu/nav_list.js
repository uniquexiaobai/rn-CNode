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
        <NavItem name={'全部'} isTop={true} source={require('../img/quanbu.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'精华'} isTop={true} source={require('../img/jinghua.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'分享'} isTop={true} source={require('../img/fenxiang.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'问答'} isTop={true} source={require('../img/wenda.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'招聘'} isTop={true} source={require('../img/zhaopin.png')} goMenuItem={this.props.goMenuItem} />
        <View style={styles.line}></View>
        <NavItem name={'消息'} isTop={false} source={require('../img/xiaoxi.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'设置'} isTop={false} source={require('../img/shezhi.png')} goMenuItem={this.props.goMenuItem} />
        <NavItem name={'关于'} isTop={false} source={require('../img/guanyu.png')} goMenuItem={this.props.goMenuItem} />
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
