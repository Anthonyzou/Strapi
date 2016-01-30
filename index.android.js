/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
  AppRegistry,
  Component,
  Navigator
} from 'react-native';

import {Actions, Router, Route, Schema, Animations, TabBar} from 'react-native-router-flux'
import Index from './components/main'

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
        <Route name="Login" type="reset" component={Index}/>
      </Router>
    )
  }
}

AppRegistry.registerComponent('Strapi', () => Strapi);
