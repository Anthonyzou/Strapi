'use strict';
var _ = require('lodash');
module.exports = class yandre{
  constructor(){
    this.url = "https://yande.re" ;
    this.home = "https://yande.re/post/index.json";
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
