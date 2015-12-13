'use strict';
import _  from 'lodash';
module.exports = class yandre{
  constructor(){
    this.url = "https://yande.re" ;
    this.home = "https://yande.re/post/index.json";
    this.name = "Yandre"
    this.favicon = "https://yande.re/favicon.ico"
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
