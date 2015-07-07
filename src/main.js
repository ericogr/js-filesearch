var File = require('./filesystem/file');

var file = new File('/tmp');


console.info('hello node: ' + file.getName());
console.info(file);