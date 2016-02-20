'use strict';
import _  from 'lodash';
import Site from '../Site';
/*
cookie: login=TentacleGrape; pass_hash=4f3a9eb6c3f629174010854b6d0f13b9b9b16afb;
*/

export default class Sankaku extends Site{
  constructor(props, context){
    super(props,context)
    this.url = "https://chan.sankakucomplex.com/" ;
    this.home = "https://chan.sankakucomplex.com/post/index.json";
    this.name = "SankakuComplex";
    this.favicon = "https://chan.sankakucomplex.com/favicon.ico";
    this.enabled = true;
  }
  run(cb){

    fetch(this.home)
    .then((response) => {
      response.json()
    })
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
