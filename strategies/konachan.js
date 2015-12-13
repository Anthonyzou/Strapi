'use strict';
import _  from 'lodash';
module.exports = class konachan{
  constructor(){
    this.url = "https://konachan.com/" ;
    this.home = "https://konachan.com/post/index.json";
    this.name = "Konachan";
    this.favicon = "https://konachan.com/favicon.ico";
  }
  run(cb){
    fetch(this.home)
      .then((response) => response.json())
      .then((responseData) => {
        this.responseData = responseData;
        cb(null, responseData);
      })
      .catch((err) => {
        cb(err, [])
      })
      .done();
  }
}
