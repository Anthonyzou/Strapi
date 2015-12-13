/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React from 'react-native';
import _  from 'lodash';
import async  from 'async';
import styles  from './styles';
import $  from 'jquery';

let {
  AppRegistry,
  Button,
  Image,
  ListView,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  View,
} = React;

import strats from './strategies';

let thing = React.createClass({
  getInitialState: function() {
    return {
      input: "42",
      data: [],
    };
  },
  render: function() {
    return (
      <ScrollView style={styles.components.body}>
        <View>
          <TextInput value={this.state.input}></TextInput>
        </View>
        {
          strats.map((i, idx)=>{
            return (
              <Sites key={idx} site={idx}></Sites>
            )
          })
        }
      </ScrollView>
    );
  },

});

let Sites = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      site: strats[this.props.site]
    };
  },
  componentDidMount: function(){
    console.log(strats[this.props.site].run)
    strats[this.props.site].run( (err, images) => {

      this.setState({
        data : images,

      })
    })
  },
  render : function(){
    return (
      <View key={this.props.site} >
        <View style={styles.components.siteContainer}>
          <Image source={{uri: "http://placehold.it/16x16"}} style={styles.components.favicon}/>
          <Text style={styles.components.title}>{this.state.site.name}</Text>
        </View>
        <ScrollView horizontal={true} contentContainerStyle={styles.components.horizontalScrollContainer}>
          {
            this.state.data.map(this.renderSite)
          }
        </ScrollView>
      </View>
    )
  },
  renderSite : function(image){
    return (
      <Image
        key={image.id}
        source={{uri: image.preview_url}}
        style={styles.components.thumbnail}
      />
    )
  }
})
AppRegistry.registerComponent('thing', () => thing);
