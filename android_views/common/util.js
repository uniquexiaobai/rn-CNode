/**
 * Util 模块
 * 主要提供工具方法
 */

import React, {
  ProgressBarAndroid,
  Dimensions,
  PixelRatio,
} from 'react-native';

export default {
  
  // 格式化时间，返回时间差
  getTimeDistance(data) {
    
    // 获取时间差
    var time = Date.now() - Date.parse(data);

    if(Math.floor(time / 604800000)) {
      return Math.floor(time / 604800000) + '周前'
    }
    if(Math.floor(time / 86400000)) {
      return Math.floor(time / 86400000) + '天前'
    }
    if(Math.floor(time / 3600000)) {
      return Math.floor(time / 3600000) + '小时前'
    }
    if(Math.floor(time / 60000)) {
      return Math.floor(time / 60000) + '分钟前'
    }

    return '刚刚';
    
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
