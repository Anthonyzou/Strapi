import React from 'react-native';
var {
  StyleSheet
} = React;


module.exports = StyleSheet.create({
  body : {
    flex: 1,
    marginBottom: 20,
  },
  toolBar:{
    backgroundColor: "#353535",
    height: 56,
    elevation: 1,
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
    flex: 1,
    flexDirection: "row",
    padding: 4,
  },
  favicon: {
    height: 16,
    width: 16,
  },
  layout:{
    flex:1,
  },
  horizontalScrollContainer :{
    alignItems: 'center',
    flex: 1,
    minHeight: 110,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumbnail: {
    margin: 5,
    height: 100,
    width: 100,
  },
});
