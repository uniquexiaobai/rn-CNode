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
    
    // alert(this.props.user.recent_topics);
    var topics = null;
    if(this.props.user.recent_replies !== undefined) {
      topics = this.props.user.recent_replies.map(function(item, index) {
        return <TopicItem key={'user_topic_item' + index} topic={item} />;
      })
    }
    
    return (
      
        <View style={{flex: 1}}>
          {topics}
        </View>
        
    );
  }
  
}
