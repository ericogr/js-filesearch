var File = require('./file');
var fs = require('fs');

var FileFinder = (function () {
    function FileFinder() {
        this.find = function (folder, file, callbackFind, callbackTerminate) {
            fs.readdir(folder.getName(), function (err, files) {
                files.forEach(function (fileFound) {
                    if (fileFound.toLowerCase().indexOf(file.getName().toLowerCase()) != -1) {
                        callbackFind(new File(fileFound));
                    }
                });
                if (callbackTerminate) {
                    callbackTerminate();
                }
            });
        };
    }

    return FileFinder;
})();
module.exports = FileFinder;