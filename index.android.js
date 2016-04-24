/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator,
  BackAndroid,
  Dimensions,
  PanResponder,
  TouchableWithoutFeedback,
  Text,
  View,
} from 'react-native';

import {Actions, Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import Index from './components/main'
import SingleImage from './components/SingleImageWithGallerySwipe'
import ImageZoom from 'react-native-image-zoom'

const {height, width} = Dimensions.get('window');
class Image extends Component{
  render(){
    return (
      <ImageZoom  onTap={Actions.pop} style={{flex:1, width:width, height: height}} src={this.props.url}></ImageZoom>
    )
  }
}
class Strapi extends Component{
  constructor (props, context) {
    super(props, context);
    this.state = {
    };
  }
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={Navigator.SceneConfigs.FloatFromRight}/>
        <Schema name="modal" sceneConfig={Navigator.SceneConfigs.FadeAndroid}/>
        <Route name="Index" component={Index}/>
        <Route name="SingleImage" component={SingleImage}/>
        <Route name="Image" schema="modal" component={Image}></Route>
      </Router>
    )
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
  return Actions.pop();
});

AppRegistry.registerComponent('strapi', () => Strapi);
