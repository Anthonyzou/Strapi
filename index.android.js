/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {Component} from 'react';
import {AppRegistry, Navigator, BackAndroid, Dimensions, PanResponder, TouchableWithoutFeedback, Text, View} from 'react-native';

import {Actions, Scene, Router} from 'react-native-router-flux';
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
      <Router >
        <Scene key="Index" component={Index}/>
        <Scene key="SingleImage" component={SingleImage}/>
        <Scene key="Image" schema="modal" component={Image}></Scene>
      </Router>
    )
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => Actions.pop());

AppRegistry.registerComponent('strapi', () => Strapi);
