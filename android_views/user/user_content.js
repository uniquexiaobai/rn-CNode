/**
 * 用户动态列表
 */

import TopicList from './topic_list';
import Util from '../common/util';

import React, {
  Component,
  StyleSheet,
  View,
  ViewPagerAndroid,
  ScrollView,
  Text,
  TouchableHighlight,
} from 'react-native';

export default class extends Component {
  
  // 点击tab翻页处理事件
  switchTab(tab, page) {
    this.props.switchTab(tab, page);
    this.scrollView.setPage(this.props.page);
  }
  
  // 滑动翻页处理事件
  switchPage(e) {
    this.props.switchPage(e.nativeEvent.position);
  }
  
  render() {
    
    const tabNames = ['最近回复', '最新发布', '话题收藏'];       // tab 数组
    var that = this;
    
    // 生成 tabs 视图的方法
    var tabs = function () {
      var arr = [];
      for(var i=0; i<tabNames.length; i++) {
        var s = (
          <TouchableHighlight
            style={[styles.user_tab_item, that.props.tab === tabNames[i] ? styles.user_active_tab : null]}
            key={'user_tab' + i}
            onPress={that.switchTab.bind(that, tabNames[i], i)}
          >
            <Text style={[styles.user_tab_font, that.props.tab === tabNames[i] ? styles.user_active_tab_font : null]}>{tabNames[i]}</Text>
          </TouchableHighlight>
        );
        arr.push(s);
      }
      return arr;
    }
    
    return (
      <View style={{flex: 1}}>
        
        <View style={styles.user_content_tab}>
          {tabs()}
        </View>
        
        <ScrollView style={{flex: 1}}>
          <ViewPagerAndroid 
            initialPage={0}
            ref={(scrollView) => {this.scrollView = scrollView}}
            onPageSelected={this.switchPage.bind(this)}
            style={{height: Util.size.height - 60, backgroundColor: '#E8E8E8'}}
          >
            <View><TopicList navigator={this.props.navigator ? this.props.navigator : false} topicList={this.props.user.recent_replies || false}/></View>
            <View><TopicList navigator={this.props.navigator ? this.props.navigator : false} topicList={this.props.user.recent_topics || false}/></View>
            <View><Text>page3</Text></View>
          </ViewPagerAndroid>
        </ScrollView>  
      
      </View>
    );
  }
  
};

const styles = StyleSheet.create({
  
  user_content_tab: {
    backgroundColor: '#333',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  
  user_tab_item: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 13,
    borderBottomWidth: 2,
    borderBottomColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  user_tab_font: {
    color: '#ACACAC',
    fontSize: 15,
  },
  
  user_active_tab: {
    borderBottomWidth: 2,
    borderBottomColor: '#88C706',
  },
  
  user_active_tab_font: {
    color: '#fff',
  },
  
});
