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
    height: 40,
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
    elevation: 4,
  },
  horizontalScrollContainer :{
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  thumbnail: {
    height: 100,
    margin: 1,
    width: 100,
  },
});
