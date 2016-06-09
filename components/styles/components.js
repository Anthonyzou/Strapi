import React from 'react';
import {StyleSheet} from 'react-native';

module.exports = StyleSheet.create({
  body : {
    flex: 1,
  },
  toolBar:{
    backgroundColor: "red",
    height: 56,
    elevation: 1,
    flexDirection : 'row'
  },
  listView : {
    height: 100,
  },
  input: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: "visible",
    padding: 2,
  },
  title: {
    fontSize: 20,
    margin: 4,
  },
  siteContainer : {
    alignItems: "center",
    flexDirection: "row",
    overflow: 'visible',
  },
  favicon: {
    height: 16,
    width: 16,
  },
  layout:{
    flex:1,
  },
  thumbnail: {
    padding: 5,
    height: 100,
    flex:1,
    width: 100,
  },
  button: {
    elevation: 2,
    borderRadius: 2,
    backgroundColor: '#282D31',
    margin: 5,
    paddingTop: 10,
    paddingBottom: 10
  },
});
