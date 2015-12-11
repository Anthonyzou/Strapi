'use strict';
var _ = require('lodash');

module.exports = class danbooru{
  constructor(){
    this.url = "https://danbooru.donmai.us"
    this.home = "https://danbooru.donmai.us/post/index.json"
  }
  run(cb){
    fetch(this.home)
      .then((response) => response.json())
      .then((responseData) => {
        responseData = _.map(responseData,(item) =>{
          item.preview_url = this.url+item.preview_url
          return item;
        })
        cb(null, responseData);
      })
      .catch((err) => {
        cb(err, [])
      })
      .done();
  }
}
