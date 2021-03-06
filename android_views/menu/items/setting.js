/**
 * 设置 页面
 */

import Header from '../../common/header';
import NavUtil from '../../common/nav_util';

import React , {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class extends Component {
  
  
  render() {
    return (
          
        <View style={{flex: 1}}>
        
          <Header
            title={'设置'}
            icon={require('../../img/back.png')}
            onIconClicked={NavUtil.navigationBack.bind(this, this.props.navigator)}
          />
          
          <View style={styles.setting}>
            <Text style={{fontSize: 24}}>待完成...</Text>
          </View>
          
        </View>
      
    );
  }
  
};

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
