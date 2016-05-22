/**
 * 用户页 topic list
 */

import TopicItem from './topic_item';

import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class extends Component {
  
  render() {
    
    var topics = null;
    if(this.props.topicList) {
      const that = this;
      topics = this.props.topicList.map(function(item, index) {
        return <TopicItem navigator={that.props.navigator ? that.props.navigator : false} key={'topicList' + index} topic={item} />;
      })
    }
    
    return (
      
        <View style={{flex: 1}}>
          {topics}
        </View>
        
    );
  }
  
}
