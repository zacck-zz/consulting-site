'use strict';

import  _  from 'lodash'; //ES6 check if its working
const array = [1];
const other = _.concat(array, 2,[3],[[4]]);

console.log(other);
