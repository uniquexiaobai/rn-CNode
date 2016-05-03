/**
 * 抽屉菜单
 */

import MenuHeader from './menu_header';
import MenuMain from './menu_main';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

export default class extends Component {

  render() {

    return (
      <View>
        <MenuHeader/>
        <MenuMain/>
      </View>
    );

  }

};
