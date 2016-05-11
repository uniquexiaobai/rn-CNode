/**
 * 关于 页面
 */

import Header from '../../common/header';
import Util from '../../common/util';

import React , {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class extends Component {
  
  
  render() {
    return (
          
        <View>
          <Header
            title={'关于'}
            icon={require('../../img/back.png')}
            onIconClicked={Util.navigationBack.bind(this, this.props.navigator)}
          />
          <Text>关于页面</Text>
        </View>
      
    );
  }
  
};
