'use strict';
import _  from 'lodash';
import Site from '~/components/Site';

export default class Danbooru extends Site{
  constructor(props, context){
    super(props,context)
    this.url = "https://danbooru.donmai.us";
    this.home = "https://danbooru.donmai.us/post/index.json";
    this.name = "Danbooru";
    this.favicon = "https://danbooru.donmai.us/favicon.ico";
    this.enabled = true;
  }
  run(cb){
    fetch(this.home)
      .then((response) => response.json())
      .then((responseData) => {
        this.responseData = _.map(responseData,(item) =>{
          item.preview_url = `${this.url}${item.preview_url}`
          item.jpeg_url = `${this.url}${item.file_url}`
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
