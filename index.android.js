/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import Menu from './android_views/menu/menu';          // 左抽屉菜单
import TopicList from './android_views/topic/topic_list';   // 话题列表
import TopicDetail from './android_views/topic/topic_detail';   // 话题列表

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  DrawerLayoutAndroid,
} from 'react-native';

class CNode extends Component {
  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Left}
        renderNavigationView={() => <Menu />}
      >
        <TopicDetail />
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({

});

AppRegistry.registerComponent('CNode', () => CNode);
