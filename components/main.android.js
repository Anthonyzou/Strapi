

import React, {Component} from 'react';
import {DrawerLayoutAndroid, Image, ListView, PullToRefreshViewAndroid, ScrollView, Text, TextInput, ToolbarAndroid, TouchableNativeFeedback, TouchableOpacity, View, RecyclerViewBackedScrollView} from 'react-native';

import styles  from './styles';
import Strats from './strategies';
import {Actions} from 'react-native-router-flux'
import _ from 'lodash'
import Async from 'async'

export default class Index extends Component{
  constructor (props, context) {
    super(props, context);

    this.state = {
      sites: new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(Strats),
      input: "",
    };
    
    this.navigationView = (
      <View style={{flex: 1, backgroundColor: 'grey'}}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('red', false)}>
          <View styles={styles.button}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('red', false)}>
          <View styles={styles.button}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('red', false)}>
          <View styles={styles.button}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('red', false)}>
          <View styles={styles.button}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.Ripple('red', false)}>
          <View styles={styles.button}>
            <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
          </View>
        </TouchableNativeFeedback>
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
      <View>
        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          actions={[{title: 'Drawer!', show: 'always'}]}
          onActionSelected={this.onActionSelected.bind(this)}>

        </ToolbarAndroid>

            <ListView
              dataSource={this.state.sites}
              renderRow={this.renderRow.bind(this)}
            />
      </View>
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
