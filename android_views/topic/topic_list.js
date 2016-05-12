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
} from 'react-native';

export default class extends Component {
  
  componentWillReceiveProps(nextProps) {
    if(nextProps.activeTab !== this.props.activeTab) {
      this.setState({tab: this.props.activeTab});
    }
  }

  constructor(props) {
    super(props);
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      topicsSource: ds.cloneWithRows([]),
      show: false,
      tab: 'all'
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

        <ScrollView style={styles.scrollView}>
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
        goTopicDetail={this.props.goTopicDetail}
        goUserDetail={this.props.goUserDetail}
      />
    );
  }
  

  
  getData() {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    var that = this;
    var url = 'http://cnodejs.org/api/v1/topics?tab=' + this.state.tab + '&page=1';

    // 数据加载前 loading 动画
    this.setState({
      show: false
    });

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

  // 请求 topics 数据
  componentDidMount() {
    
    this.getData();

  }

};

const styles = StyleSheet.create({
  scrollView: {
    height: Util.size.height - 80,
    width: Util.size.width,
  },
});
