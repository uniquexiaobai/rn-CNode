/**
 * Util 模块
 * 主要提供工具方法
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
  
  // 处理 toolbar 中返回按钮 press 事件，仅用于 menu 中
  navigationBack(navigator) {
    navigator.pop();
  },

  // 将事件对象格式化成 2015-03-21 的形式
  getFormatDate(d) {
    var date = new Date(d).toLocaleDateString();
    date = date.replace(/\//g, '-');
    return '20' + date;
  },

  /**
   * 获取屏幕最小线宽
   */
  pixel: 1 / PixelRatio.get(),

  /**
   * 获取屏幕尺寸
   */
  size: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },

  /**
   * Android 加载动画
   */
  loading: <ProgressBarAndroid
    styleAttr="Inverse"
    color="#77B800"
  />,

  /**
   * 基于fetch的get方法
   * @param  {string} url               get请求的url地址
   * @param  {function} successCallback 成功时的回调函数
   * @param  {function} failCallback    失败时的回调函数
   */
  get(url, successCallback, failCallback) {
    fetch(url)
      .then((response) => response.text())
      .then((responseText) => {
        successCallback(JSON.parse(responseText));
      })
      .catch(function(err) {
        failCallback(err);
      });
  },

};
