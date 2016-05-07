/**
 * 公共头部
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
} from 'react-native';

export default class extends Component {

  render() {
    return (

      <View style={styles.toolbar}>
        <TouchableHighlight onPress={this.props.openDrawerClick}>
          <Image
            style={styles.toolbar_icon}
            source={this.props.icon}
          />
        </TouchableHighlight>
        <Text style={styles.toolbar_title}>{this.props.title}</Text>
      </View>

    );
  }

};

const styles = StyleSheet.create({
  toolbar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#333',
    height: 58,
  },
  toolbar_icon: {
    width: 23,
    height: 23,
    marginRight: 22,
  },
  toolbar_title: {
    color: '#F2F2F2',
    fontSize: 21,
    fontWeight: 'bold',
  },
});
