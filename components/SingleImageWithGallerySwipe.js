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
    this.state = {
      tags : new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
      .cloneWithRows(this.props.image.tags.split(' ')),
      modalVisible: true,
    };
  }

  renderTag(tag){
    return (<TouchableOpacity><Text>{tag}</Text></TouchableOpacity>)
  }

  componentDidMount(){
  }

  render() {
    const style = {
      flex: 1,
      width: Math.min(width, this.props.image.width),
      height: 300,
    }
    return (
      <View style={{flex:1}}>

        <ToolbarAndroid
          style={styles.components.toolBar}
          title="Strapi"
          onIconClicked={()=>{}}
          actions={[{title: 'Drawer!', show: 'always'}]}>
        </ToolbarAndroid>
        <TouchableOpacity style={{flex:1, alignItems:'center'}}  onPress={()=>Actions.Image({url: this.props.image.jpeg_url})}>
          <ImageCache src={(this.props.image.jpeg_url)} style={style}></ImageCache>
        </TouchableOpacity>
        <ListView
          dataSource={this.state.tags}
          renderRow={this.renderTag}
          style={{flex:1}}
        />
      </View>
    );
  }
}
var Styles = StyleSheet.create({
  wrapper: {
    paddingTop: 50,
    flex: 1
  },

  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
  },

  modal2: {
    height: 230,
    backgroundColor: "#3B5998"
  },

  modal3: {
    height: 300,
    width: 300
  },

  modal4: {
  },

  btn: {
    margin: 10,
    backgroundColor: "#3B5998",
    color: "white",
    padding: 10
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
    color: "black",
    fontSize: 22
  }

})
