/**
 * 用户详情页-用户信息组件
 */

import Util from '../common/util';
import NavUtil from '../common/nav_util';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
  Linking,
} from 'react-native';

export default class extends Component {

  render() {
    return (

      <View style={styles.user_info}>

        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>

          <View>
            <TouchableHighlight
              underlayColor="#6C6A67"
              style={{borderRadius: 20, padding: 5}}
              onPress={NavUtil.navigationBack.bind(this, this.props.navigator)}
            >
              <Image style={styles.toolbar_icon} source={require('../img/back.png')} />
            </TouchableHighlight>
          </View>

          <View style={{alignItems: 'center'}}>
            <Image style={styles.user_avatar} source={{uri: this.props.user.avatar_url}} />
            <Text style={styles.user_name}>{this.props.user.loginname}</Text>
            <Text 
              style={[styles.user_github]}
              onPress={NavUtil.openExternalLink.bind(this, 'https://github.com/' + this.props.user.githubUsername)}
            >
              https://github.com/{this.props.user.githubUsername}
            </Text>
          </View>

          <View>
            <TouchableHighlight
              underlayColor="#6C6A67"
              onPress={() => {}}
              style={{borderRadius: 20, padding: 7}}
            >
              <Image style={[styles.toolbar_icon, {width: 21, height: 21}]} source={require('../img/browser.png')} />
            </TouchableHighlight>
          </View>

        </View>

        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
          <Text style={styles.create_at}>注册时间：{Util.getFormatDate(this.props.user.create_at)}</Text>
          <Text style={styles.score}>积分：{this.props.user.score}</Text>
        </View>

      </View>

    );
  }

};

var styles = StyleSheet.create({
  user_info: {
    backgroundColor: '#373230',
    padding: 15,
  },
  toolbar_icon: {
    width: 23,
    height: 23,
  },
  user_avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginTop: 10,
  },
  user_name: {
    color: '#fff',
    fontSize: 17,
    marginTop: 7,
    marginBottom: 4,
  },
  user_github: {
    color: '#B8B7B6',
    fontSize: 14,
  },
  create_at: {
    color: '#fff',
    fontSize: 13,
  },
  score: {
    color: '#74A60B',
    fontSize: 13,
  }
});
