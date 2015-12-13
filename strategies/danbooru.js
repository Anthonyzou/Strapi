'use strict';
import _  from 'lodash';

module.exports = class danbooru{
  constructor(){
    this.url = "https://danbooru.donmai.us";
    this.home = "https://danbooru.donmai.us/post/index.json";
    this.name = "Danbooru";
    this.favicon = "https://danbooru.donmai.us/favicon.ico"

  }
  run(cb){
    fetch(this.home)
      .then((response) => response.json())
      .then((responseData) => {
        this.responseData = _.map(responseData,(item) =>{
          item.preview_url = this.url+item.preview_url
          return item;
        })
        cb(null, this.responseData);
      })
      .catch((err) => {
        cb(err, [])
      })
      .done();
  }
}
