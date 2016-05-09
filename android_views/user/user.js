/**
 * 用户详情页面
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';


export default class extends Component {

  render() {
    return (

      <View>
        <Text>用户详情页</Text>
        <Text>{this.props.author_id}</Text>
      </View>

    );
  }



};

const styles = StyleSheet.create({




});
