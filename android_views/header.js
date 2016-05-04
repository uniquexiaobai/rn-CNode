/**
 * 公共头部
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import ToolbarAndroid from 'ToolbarAndroid';

export default class extends Component {

  render() {
    return (

      <ToolbarAndroid
        navIcon={require('./img/toolbar.png')}
        style={styles.toolbar}
        title="全部"
        titleColor="#fff"
      >

      </ToolbarAndroid>

    );
  }

};

const styles = StyleSheet.create({
  toolbar: {
    height: 55,
    backgroundColor: '#333',
  }
})
