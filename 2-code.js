//modules-encapsulated Code (only shear mininimum)
//CommonJs, every  file is module (by  default)
const names=require('./4-name')
const sayHi=require('./5-utils')
const data=require('./6-alternative-flavor')
require('./7-mind-granade')

sayHi('amil')
sayHi(names.jhon)
sayHi(names.peter)