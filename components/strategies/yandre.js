'use strict';
import _  from 'lodash';
import Site from '~/components/Site';

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
        this.responseData = _.map(responseData,(item) =>{
          item.jpeg_url = `http://files.yande.re/jpeg/${item.md5}/${item.id}.jpg`
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
