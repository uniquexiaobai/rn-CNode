/**
 * Navigator Util 模块
 * 主要提供 nav 的工具方法
 */

import React, {
  Linking,
} from 'react-native';

export default {
  
  // 用浏览器打开外部链接
  openExternalLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  },
  
  // 处理 toolbar 中返回按钮 back 事件，仅用于 menu/items 中
  navigationBack(navigator) {
    navigator.pop();
  },
  
  // 切换路由到 user 详情页
  goUserDetail(navigator, component, name) {
    
    if(navigator) {
      navigator.push({
        component: component,
        passProps: {
          author_name: name
        }
      });
    }
    
  },
  
  // 切换路由到 topic 详情页
  goTopicDetail(navigator, component, id) {
    
    if(navigator) {
      navigator.push({
        component: component,
        passProps: {
          topic_id: id
        }
      });
    }
    
  }

};
