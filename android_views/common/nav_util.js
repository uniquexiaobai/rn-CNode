/**
 * Navigator Util 模块
 * 主要提供 nav 的工具方法
 */

import React, {
  ProgressBarAndroid,
  Dimensions,
  PixelRatio,
  Linking,
} from 'react-native';

export default {
  
  // 用浏览器打开外部链接
  openExternalLink(url) {
    Linking.openURL(url).catch(err => console.error('An error occurred', err));
  },
  
  // 处理 toolbar 中返回按钮 press 事件，仅用于 menu/items 中
  navigationBack(navigator) {
    navigator.pop();
  },

};
