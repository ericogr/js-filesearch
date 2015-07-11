var File = require('./filesystem/file');
var ConsoleMessage = require('./userinterface/consolemessage');
var FileFinder = require('./filesystem/filefinder');

var cm = new ConsoleMessage();

cm.inputMessage("Filename to search: ", function (file) {
	"use strict";
	
    var fi = new File(file);

    cm.inputMessage("Local (folder): ", function (folder) {
        var fo = new File(folder);
        var ff = new FileFinder();

        ff.find(fo, fi, function (file) {
            cm.messageLine("found: " + file.getName());
        }, function () {
            process.exit(0);
        });
    });
});