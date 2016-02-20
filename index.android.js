/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator,
  BackAndroid
} from 'react-native';

import {Actions, Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import Index from './components/main'
import SingleImage from './components/SingleImageWithGallerySwipe'

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
        <Route name="Index" component={Index}/>
        <Route name="SingleImage" component={SingleImage}/>
      </Router>
    )
  }
}

BackAndroid.addEventListener('hardwareBackPress', () => {
  Actions.pop();
  return true;
});

AppRegistry.registerComponent('Strapi', () => Strapi);
