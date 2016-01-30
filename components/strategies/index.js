'use strict';

import Danbooru from './danbooru.js'
import Konachan from './konachan.js'
import Sankakucomplex from './sankakucomplex.js'
import Yandre from './yandre.js'

export default [
  new Danbooru(),
  new Konachan(),
  // new Sankakucomplex(),
  new Yandre(),
]
