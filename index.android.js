/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import _  from 'lodash';
import async  from 'async';
import styles  from './styles';
import $  from 'jquery';

import React, {
  AppRegistry,
  Button,
  Image,
  Component,
  ListView,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  View,
  TouchableOpacity,
  TouchableHighlight,
  PullToRefreshViewAndroid,
  Navigator
} from 'react-native';

import strats from './strategies';
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



AppRegistry.registerComponent('strapi', () => Strapi);
