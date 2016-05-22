/**
 * 关于 页面
 */

import Header from '../../common/header';
import NavUtil from '../../common/nav_util';

import React , {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Image,
  Linking,
} from 'react-native';


export default class extends Component {
  
  render() {
    return (
          
        <View style={{backgroundColor: '#fff'}}>
        
          <Header
            title={'关于'}
            icon={require('../../img/back.png')}
            onIconClicked={NavUtil.navigationBack.bind(this, this.props.navigator)}
          />
          
          <Image style={styles.cnode_logo} source={require('../../img/cnode_logo.png')} />
          
          <View style={styles.about}>
            
            <TouchableHighlight
              style={[styles.about_item, {borderTopWidth: 1}]}
              underlayColor='#E1E1E1'
              onPress={NavUtil.openExternalLink.bind(this, 'https://github.com/uniquexiaobai/rn-CNode')}
            >
              <View>
                <Text style={styles.item_title}>项目开源地址</Text>
                <Text style={styles.item_content}>https://github.com/uniquexiaobai/rn-CNode</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight
              style={styles.about_item}
              underlayColor='#E1E1E1'
              onPress={NavUtil.openExternalLink.bind(this, 'https://cnodejs.org/about')}
            >
              <View>
                <Text style={styles.item_title}>关于CNode社区</Text>
                <Text style={styles.item_content}>https://cnodejs.org/about</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight
              style={styles.about_item}
              underlayColor='#E1E1E1'
              onPress={NavUtil.openExternalLink.bind(this, 'https://github.com/uniquexiaobai')}
            >
              <View>
                <Text style={styles.item_title}>关于作者</Text>
                <Text style={styles.item_content}>https://github.com/uniquexiaobai</Text>
              </View>
            </TouchableHighlight>
            
            <TouchableHighlight
              style={styles.about_item}
              underlayColor='#E1E1E1'
              onPress={NavUtil.openExternalLink.bind(this, 'https://github.com/soliury/noder-react-native')}
            >
              <View>
                <Text style={styles.item_title}>特别感谢</Text>
                <Text style={styles.item_content}>https://github.com/soliury/noder-react-native</Text>
              </View>
            </TouchableHighlight>
            
          </View>
          
        </View>
      
    );
  }
  
};

const styles = StyleSheet.create({
  about: {
    marginTop: 20,
  },
  cnode_logo: {
    width: Util.size.width,
  },
  about_item: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#EBEBEB',
  },
  item_title: {
    color: '#282828',
    fontSize: 17,
    marginBottom: 3,
  },
  item_content: {
    color: '#858585',
    fontSize: 15,
  },
});
