/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var async = require('async');
var _ = require('lodash');
var styles = require('./styles');

var {
  AppRegistry,
  Image,
  ListView,
  Text,
  View,
} = React;

var thing = React.createClass({
  getInitialState: function() {
    return {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
  },

  componentDidMount: function() {
    this.fetchData();
  },

  fetchData: function() {
    async.parallel(
      _.map(require('./strategies'), (strat, idx) => {
        return strat.run.bind(strat)
      })
    , (err, result) => {
      if(err){
        console.error(err.stack);
      }
      console.log(result)
      result = _.compact(result)
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(result),
        loaded: true,
      });
    })
  },

  render: function() {
    if (!this.state.loaded) {
      return this.renderLoadingView();
    }

    return (
      <ListView
        dataSource={this.state.dataSource}
        renderRow={this.renderMovie}
        style={styles.components.listView}
      />
    );
  },

  renderLoadingView: function() {
    return (
      <View style={styles.components.container}>
        <Text>
          Loading pr0n...
        </Text>
      </View>
    );
  },

  renderMovie: function(movie) {
    return (
      <View style={styles.components.container}>
        {movie.map((movie) => {
          return <Image
            key={movie.id}
            source={{uri: movie.preview_url}}
            style={styles.components.thumbnail}
          />;
        })}
      </View>
    );
  },
});

AppRegistry.registerComponent('thing', () => thing);
