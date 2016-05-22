/**
 * 用户页 topic item
 */

import Util from '../common/util';
import TopicDetail from '../topic/topic_detail';
import User from './user';

 import React, {
   Component,
   StyleSheet,
   View,
   Image,
   TouchableHighlight,
   Text,
 } from 'react-native';
 
 export default class extends Component {
   
   // 切换路由到 user 详情页
   goUserDetail(name) {
     this.props.navigator.push({
       component: User,
       passProps: {
         author_name: name
       }
     });
   }
   
   // 切换路由到 topic 详情页
   goTopicDetail(id) {
     if(this.props.navigator) {
       this.props.navigator.push({
         component: TopicDetail,
         passProps: {
           topic_id: id
         }
       });
     }
   }
   
   render() {
     
     var topic = this.props.topic;
     
     return (
       
       <TouchableHighlight
         underlayColor='#E1E1E1'
         onPress={this.goTopicDetail.bind(this, topic.id)}
         style={{backgroundColor: '#fff'}}
       >
 
         <View style={styles.topic_item}>
         
           <TouchableHighlight
             underlayColor='#fff'
             onPress={this.goUserDetail.bind(this, topic.author.loginname)}
           >
             <Image
               source={{uri: topic.author.avatar_url}}
               style={styles.author_avatar}
             />
           </TouchableHighlight>
           
           <View style={{flex: 1}}>
           
             <View style={styles.topic_item_top}>
               <Text style={styles.topic_title} numberOfLines={1}>{topic.title}</Text>
             </View>
             
             <View style={styles.topic_item_bottom}>
               <Text style={styles.author_name}>{topic.author.loginname}</Text>
               <Text style={styles.last_reply_at} numberOfLines={1}>{Util.getTimeDistance(topic.last_reply_at)}</Text>
             </View>
             
           </View>
          
         </View>
       
       </TouchableHighlight>
 
     );
   }
   
 };
 

 const styles = StyleSheet.create({
   topic_item: {
     borderBottomWidth: 1,
     borderBottomColor: '#E1E1E1',
     flex: 1,
     flexDirection: 'row',
     padding: 15,
   },
   
   author_avatar: {
     width: 42,
     height: 42,
     borderRadius: 21,
     marginRight: 15,
   },
   
   topic_item_top: {
     flex: 1,
     marginBottom: 5,
   },
   topic_title: {
     color: '#212121',
     fontSize:16,
   },
   author_name: {
     color: '#949494',
   },
   
   topic_item_bottom: {
     flexDirection: 'row',
     justifyContent: 'space-between',
   },
   last_reply_at: {
     color: '#949494',
   },
   
  
 });
