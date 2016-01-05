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

const {
  AppRegistry,
  Button,
  Image,
  ListView,
  ScrollView,
  Text,
  TextInput,
  ToolbarAndroid,
  View,
  TouchableOpacity,
  TouchableHighlight,
  PullToRefreshViewAndroid,
} = React;

import strats from './strategies';

var strapi = React.createClass({
  getInitialState () {
    return {
      input: "42",
      colors: [16711680]
    };
  },
  handleChange (change) {
    // return console.log(change);
    this.setState({
      isRefreshing: false,
      input: change
    });
  },

  render() {
    return (
        <View style={styles.components.body}>
          <ToolbarAndroid
            style={styles.components.toolBar}
            title="Strapi"
            onActionSelected={this.onActionSelected} />
          <TextInput
            multiline={false}
            value={this.state.input}
            onChangeText={this.handleChange}></TextInput>
          <PullToRefreshViewAndroid
            style={styles.components.body}
            refreshing={this.state.isRefreshing}
            onRefresh={this._onRefresh}
            colors={['#ff0000', '#00ff00', '#0000ff']}
            progressBackgroundColor={'#ffff00'}
            >
            <ScrollView  style={styles.components.body}>
              {
                strats.map((i, idx)=>{
                  return (
                    <Sites key={idx} site={idx}></Sites>
                  )
                })
              }
            </ScrollView>
          </PullToRefreshViewAndroid>
        </View>
    );
  },
  _onRefresh(){
    this.setState({isRefreshing: true});
    setTimeout(() => {
      this.setState({
        isRefreshing: false,
      });
    }, 5000);
  }
});

const Sites = React.createClass({
  getInitialState () {
    return {
      images: [],
      site: strats[this.props.site]
    };
  },
  componentDidMount (){
    strats[this.props.site].run( (err, images) => {
      this.setState({
        images : images,
      })
    })
  },
  render(){
    return (
      <View key={this.props.site}>
        <View style={styles.components.siteContainer}>
          <Image source={{uri: "http://placehold.it/16x16"}} style={styles.components.favicon}/>
          <Text style={styles.components.title}>{this.state.site.name}</Text>
          <Text style={styles.components.title}>Favorites</Text>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.components.horizontalScrollContainer}>
          {
            this.state.images.map(this.renderImage)
          }
        </ScrollView>
      </View>
    )
  },
  renderImage (image){
    var handle = (e) => {
      console.log(e, image);
    }
    return (
      <TouchableHighlight key={image.id} onPress={handle}>
        <Image
          source={{uri: image.preview_url}}
          style={styles.components.thumbnail}
          />
      </TouchableHighlight>
    )
  }
})

const singleImage = React.createClass({
  render(){
    return (
      <TouchableHighlight key={image.id} onPress={handle}>
        <Image
          source={{uri: image.preview_url}}
          style={styles.components.thumbnail}
          />
      </TouchableHighlight>
    )
  }
});


AppRegistry.registerComponent('strapi', () => strapi);
