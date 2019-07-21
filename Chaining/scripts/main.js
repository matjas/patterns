import Chainable from './Chainable.js';

var chainable = new Chainable();

chainable.add(20).add(10).sub(5);

console.log(chainable.count);