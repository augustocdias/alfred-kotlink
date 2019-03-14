import alfy = require('alfy');

const ipt = alfy.input.split(' ');

const key = ipt[0];
const value = ipt[1];

alfy.cache.set(key, value);
