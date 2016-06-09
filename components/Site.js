
import React, {Component} from 'react';
import {DrawerLayoutAndroid, ListView, PullToRefreshViewAndroid, ScrollView, Text, Image, StyleSheet, TextInput, ToolbarAndroid, TouchableHighlight, TouchableOpacity, View, RecyclerViewBackedScrollView, TouchableNativeFeedback} from 'react-native';

import styles  from './styles';
import {Actions} from 'react-native-router-flux'

export default class Site extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
    };
    this.props.callback(this.load.bind(this))
  }

  componentDidMount = this.load.bind(this);

  load (cb){
    this.run( (err, images) => {
      this.setState({
        loaded: true,
        ds : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2}).cloneWithRows(images)
      })
      if(cb){
        cb()
      }
    })
  }

  render(){
    return (
      <View style={{flex: 1}}>
        <View style={[{flexDirection:'row', flex: 1, justifyContent:'space-between'}]}>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red', false)}>
            <View style={[{paddingLeft:5},Styles.button,{flexDirection:'row', flexDirection: 'row', alignItems : 'center'}]}>
              <Image source={{uri:this.favicon}} style={styles.components.favicon}/>
              <Text style={styles.components.title}>{this.name}</Text>
            </View>
          </TouchableNativeFeedback>
          <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red', false)}>
            <View style={Styles.button}>
              <Text style={styles.components.title}>Favorites</Text>
            </View>
          </TouchableNativeFeedback>
        </View>
        { this.state.loaded &&
          <ListView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            dataSource={this.state.ds}
            renderRow={this.renderImage}
            style={styles.components.listView}
          />
        }
      </View>
    )
  }

  renderImage (image){
    return (
      <TouchableHighlight
        underlayColor={"#f0f0f0"}
        onPress={Actions.SingleImage.bind(null, {image:image})}
        >
        <Image

          source={{uri:image.preview_url}}
          style={{height:100, width:100}}
        />
      </TouchableHighlight>
    )
  }
}

const Styles = StyleSheet.create({
  button: {
    elevation: 2,
    borderRadius: 2,
    backgroundColor: '#282D31',
    margin: 5,
    paddingTop: 4,
    paddingBottom: 4
  },
});
