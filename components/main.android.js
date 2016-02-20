

import React, {
  Component,
  DrawerLayoutAndroid,
  Image,
  ListView,
  PullToRefreshViewAndroid,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
  RecyclerViewBackedScrollView,
} from 'react-native';

import styles  from './styles';
import Strats from './strategies';
import {Actions} from 'react-native-router-flux'
import _ from 'lodash'
import Async from 'async'

export default class Index extends Component{
  constructor (props, context) {
    super(props, context);

    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      sites: ds.cloneWithRows(Strats),
      input: "",
    };
    this.thisSites = []
    this.navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
        <TouchableHighlight
          underlayColor={"#f0f0f0"}>
          <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
        </TouchableHighlight>
      </View>
    )
  }

  handleChange (change) {
    // return console.log(change);
    this.setState({
      isRefreshing: false,
      input: change
    });
  }

  onActionSelected(position) {
    this.refs['DRAWER'].openDrawer();
  }

  renderRow(Site) {

    return <Site callback={this.cb.bind(this)}/>
  }

  cb(updateFn) {
    this.thisSites = _.concat(this.thisSites, updateFn)
  }

  render() {
    return (
      <DrawerLayoutAndroid
        drawerWidth={300}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        ref={'DRAWER'}
        renderNavigationView={() => this.navigationView}>
        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          actions={[{title: 'Drawer!', show: 'always'}]}
          onActionSelected={this.onActionSelected.bind(this)}>
            <TextInput
              multiline={false}
              style={{flex: 1,}}
              value={this.state.input}
              onChangeText={this.handleChange.bind(this)}></TextInput>
        </ToolbarAndroid>
        <PullToRefreshViewAndroid
          style={styles.components.body}
          refreshing={this.state.isRefreshing}
          onRefresh={this._onRefresh.bind(this)}
          colors={['#ff1234', '#00ff00', '#0000ff']}
          progressBackgroundColor={'white'}
          >
            <ListView
              dataSource={this.state.sites}
              renderScrollComponent={props => <RecyclerViewBackedScrollView {...props}></RecyclerViewBackedScrollView>}
              renderRow={this.renderRow.bind(this)}
            />
        </PullToRefreshViewAndroid>
      </DrawerLayoutAndroid>
    );
  }
  _onRefresh(){
    this.setState({isRefreshing: true});
    Async.parallel(
      this.thisSites,
      (err, result)=>{
        this.setState({
          isRefreshing: false,
        });
    })
  }
}
