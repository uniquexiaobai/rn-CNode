/**
 * 抽屉菜单导航栏
 */

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight,
} from 'react-native';

export default class extends Component {
  
  goMenuItem(tabName, isTop) {
    this.props.goMenuItem(tabName, isTop);
  }

  render() {

    return (
      <TouchableHighlight
        underlayColor='green'
        onPress={this.goMenuItem.bind(this, this.props.name, this.props.isTop)}
      >
        <View style={styles.nav_item}>
          <Image source={this.props.source} style={styles.nav_icon} />
          <Text style={[styles.nav_link]}>{this.props.name}</Text>
        </View>
      </TouchableHighlight>
    );

  }

};

const styles = StyleSheet.create({
  nav_item: {
    padding: 15,
    paddingLeft: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
  },
  nav_icon: {
    width: 22,
    height: 22,
    marginRight: 35,
  },
  nav_link: {
    fontSize: 16,
    color: '#464646',
  },
});
