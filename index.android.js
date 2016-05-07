/**
 * CNode社区
 * https://github.com/uniquexiaobai/rn-CNode
 */

import Navigator from './android_views/common/navigation';
import App from './android_views/App';

import React, {
  AppRegistry,
  Component,
} from 'react-native';

class CNode extends Component {

  render() {
    return (

      <Navigator component={App} />

    );
  }

};

AppRegistry.registerComponent('CNode', () => CNode);
