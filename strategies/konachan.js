'use strict';
var _ = require('lodash');
module.exports = class konachan{
  constructor(){
    this.url = "https://konachan.com/" ;
    this.home = "https://konachan.com/post/index.json";
  }
  run(cb){
    fetch(this.home)
      .then((response) => response.json())
      .then((responseData) => {
        cb(null, responseData);
      })
      .catch((err) => {
        cb(err, [])
      })
      .done();
  }
}
