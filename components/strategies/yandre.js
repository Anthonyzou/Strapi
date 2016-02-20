'use strict';
import _  from 'lodash';
import Site from '../Site';

export default class Yandre extends Site{
  constructor(props, context){
    super(props,context)
    this.url = "https://yande.re";
    this.home = "https://yande.re/post/index.json";
    this.name = "Yandre";
    this.favicon = "https://yande.re/favicon.ico";
    this.enabled = true;
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
