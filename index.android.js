/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import Menu from './android_views/menu';

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
        <View style={styles.container}>
          <Text style={styles.welcome}>
            Welcome to React Native!
          </Text>

        </View>
      </DrawerLayoutAndroid>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

AppRegistry.registerComponent('CNode', () => CNode);
