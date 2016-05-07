/**
 * 封装 Navigator 导航组件
 */

import React, {
  Component,
  View,
  Navigator,
} from 'react-native';

export default class extends Component {

  render() {

    return (

      <Navigator
        initialRoute={{name: 'TopicsPage', component: this.props.component}}
        configureScene={() => {
          return Navigator.SceneConfigs.FloatFromLeft;
        }}
        renderScene={(route, navigator) => {
          var Component = route.component;
          return (
            <View style={{flex: 1}}>
              <Component navigator={navigator} {...route.passProps} />
            </View>
          );
        }}
      />

    );

  }

};
