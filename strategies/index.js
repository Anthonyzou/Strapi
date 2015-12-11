'use strict';
module.exports = [
  new (require('./danbooru.js'))(),
  new (require('./konachan.js'))(),
  // new (require('./sankakucomplex.js'))(),
  new (require('./yandre.js'))(),
]
