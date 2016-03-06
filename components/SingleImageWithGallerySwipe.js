'use strict';

import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  TouchableOpacity,
  ListView,
  Dimensions,
  ToolbarAndroid,
  ScrollView,
  TouchableNativeFeedback,
  RecyclerViewBackedScrollView,
} from 'react-native';
var Modal   = require('react-native-modalbox');

import {Actions,} from 'react-native-router-flux'
import ImageCache from 'react-native-image-cache'
import ImageZoom from 'react-native-image-zoom'

import styles  from './styles';
const {height, width} = Dimensions.get('window');

export default class ExamplePage extends Component {
  constructor(props, context) {
    super(props, context);

    const {height, width} = Dimensions.get('window');

    this.state = {
      tags : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
            .cloneWithRows(this.props.image.tags.split(' ')),
      modalVisible: true,
      image: {
        height: 300,
      },
      scale: 1,
      scroll:true,
      toolBarHeight: 56,
    };
  }

  renderTag(tag){
    return (
      <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('red', false)}>
        <View style={Styles.button}>
          <Text style={Styles.text}>{tag}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }

  componentDidMount(){

  }

  tap(){
    const {height, width} = Dimensions.get('window');
    this.setState({
      scroll:false,
      image:{
        height: this.state.image.height == 300 ? height-56 : 300,
      },
      scale: this.state.image.height == 300 ? 0: 1,
      toolBarHeight: this.state.image.height == 300 ? 0:56,

    });
  }

  render() {
    const style = {
      width: Math.min(width, this.props.image.width),
    }
    return (
      <View style={{flex:1, backgroundColor: '#262626'}}>
        <ToolbarAndroid
          style={[styles.components.toolBar, {height:this.state.toolBarHeight}]}
          title="Strapi"
          onIconClicked={()=>{}}
          actions={[{title: 'Drawer!', show: 'always'}]}>
        </ToolbarAndroid>
        <ScrollView scrollEnabled={this.state.scroll}>
          <View style={{backgroundColor:'#101010', }}>
            <ImageZoom
              onTap={this.tap.bind(this)}
              source={{uri: this.props.image.jpeg_url}}
              scale={this.state.scale}
              style={[style, Styles.container, this.state.image]}/>
          </View>
          <ListView
            dataSource={this.state.tags}
            renderRow={this.renderTag}
            style={{flex:1, }}
            />
        </ScrollView>
      </View>
    );
  }
}
var Styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1
  },
  button: {
    elevation: 2,
    borderRadius: 2,
    margin: 5,
    paddingTop: 10,
    backgroundColor: '#282D31',
  
    paddingBottom: 10
  },
  container:{
  },
  btnModal: {
    position: "absolute",
    top: 0,
    right: 0,
    width: 50,
    height: 50,
    backgroundColor: "transparent"
  },

  text: {
    color: "#f3f3f3",
    textAlign: 'center',
  }

})
