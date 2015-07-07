"use strict"

var File = require('./filesystem/file');

var file1 = new File('/tmp1');
var file2 = new File('/tmp2');


console.info('hello node: ' + file1.getName());
console.info('hello node: ' + file2.getName());

file1._name = "/shit";

console.info(file1._name);
console.info(file2._name);