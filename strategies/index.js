'use strict';

export default [
  new (require('./danbooru.js'))(),
  new (require('./konachan.js'))(),
  // new (require('./sankakucomplex.js'))(),
  new (require('./yandre.js'))(),
]
