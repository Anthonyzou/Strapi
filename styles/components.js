import React from 'react-native';
var {
  StyleSheet
} = React;


module.exports = StyleSheet.create({
  body : {
    flex: 1,
    overflow: 'visible',
  },
  toolBar:{
    backgroundColor: "#000",
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
  horizontalScrollContainer :{
    height: 100,
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    overflow: "visible",
    padding: 2,
  },
  thumbnail: {
    height: 100,
    marginRight: 2,
    width: 100,
  },
});
