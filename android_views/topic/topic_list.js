/**
 * 话题列表
 */

import Header from '../common/header';      // toolbar
import TopicItem from './topic_item';       // topic item
import Util from '../common/util';          // 工具方法

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  ListView,
  ScrollView,
  ToastAndroid,
  RefreshControl,
} from 'react-native';

export default class extends Component {
  
  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      topicsSource: ds.cloneWithRows([]),
      show: false,
      isRefreshing: false
    };
  }

  render() {
    
    return (
      <View>

        <Header
          title={'全部'}
          icon={require('../img/toolbar.png')}
          onIconClicked={this.props.openDrawerClick}
        />

        <ScrollView 
          style={styles.scrollView}
          refreshControl={
            <RefreshControl 
              refreshing={this.state.refreshing}
              size={RefreshControl.LARGE}
              colors={['#77B800']}
              onRefresh={() => {
                this.setState({refreshing: true});
                // ToastAndroid.show('hello world',ToastAndroid.SHORT);
                this.getData(false);
                this.setState({refreshing: false});
              }}
            />
          }
        >
          {
            this.state.show
            ?
              <ListView
                dataSource={this.state.topicsSource}
                renderRow={this._renderRow.bind(this)}
              />
            : Util.loading
          }
        </ScrollView>

      </View>
    );
  }

  /**
   * 渲染话题项的样式
   * @param  {[type]} topic [一个话题信息]
   */
  _renderRow(topic) {
    return (
      <TopicItem
        topic={topic}
        navigator={this.props.navigator ? this.props.navigator : false}
      />
    );
  }
  
  /**
   * [加载 topic 数据]
   * @param  {Boolean} isLoading [当为false时，使用 RefreshControl 带的动画]
   */
  getData(isLoading) {
    
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var that = this;
    var url = 'http://cnodejs.org/api/v1/topics?tab=' + this.props.activeTab + '&page=1';

    if(isLoading) {
      // 数据加载前 loading 动画
      this.setState({
        show: false
      });
    }

    // get topics 信息
    Util.get(url, function(data) {

      if(!data.success) {
        return alert('数据加载出错！');
      }

      var topics = data.data;

      that.setState({
        topicsSource: ds.cloneWithRows(topics),
        show: true
      })

    }, function(err) {

      alert(err);

    });
  }
  
  componentDidMount() {
    this.getData(true);
  }
  
  

};

const styles = StyleSheet.create({
  scrollView: {
    height: Util.size.height - 80,
    width: Util.size.width,
  },
});
