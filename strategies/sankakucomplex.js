'use strict';
var _ = require('lodash');
/*
cookie: login=TentacleGrape; pass_hash=4f3a9eb6c3f629174010854b6d0f13b9b9b16afb;
*/

module.exports = class sankaku{
  constructor(){
    this.url = "https://chan.sankakucomplex.com/" ;
    this.home = "https://chan.sankakucomplex.com/post/index.json";
  }
  run(cb){

    fetch(this.home)
    .then((response) => {
      response.json()
    })
    .then((responseData) => {
      cb(null, responseData);
    })
    .catch((err) => {
      cb(err, [])
    })
    .done();
  }
}
