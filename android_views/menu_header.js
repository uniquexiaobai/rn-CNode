/**
 * 抽屉菜单头部
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

export default class extends Component {

  render() {

    return (
      <View style={styles.menu_header}>
        <View style={styles.left}>
          <Image source={require('./img/logo.jpg')} style={styles.user_logo} />
          <Text style={styles.username} onPress={() => alert('个人主页')}>uniquexiaobai</Text>
          <Text style={styles.grade}>积分：0</Text>
        </View>
        <View style={styles.right}>
          <Text style={styles.logout} onPress={() => alert('注销')}>注销</Text>
        </View>
      </View>
    );

  }


};

const styles = StyleSheet.create({
  menu_header: {
    height: 150,
    backgroundColor: '#DB5259',
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 20,
  },
  left: {
    flex: 1,
  },
  user_logo: {
    height: 60,
    width: 60,
    borderRadius: 30,
    backgroundColor: '#DB5259',
    marginBottom: 15,
  },
  username: {
    marginBottom: 5,
    fontSize: 15,
    color: '#F9E4E5',
  },
  grade: {
    fontSize: 15,
    color: '#EFB7BA',
  },
  right: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  logout: {
    marginBottom: 10,
    fontSize: 15,
    color: '#EFB7BA',
  },
});
