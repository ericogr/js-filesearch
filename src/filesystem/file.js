var File = (function() {
	"use strict";

	function File(filename) {
		Object.defineProperty(this, "_name", {
		    value: filename,
		    writable: false
		});
	}

	File.prototype.getName = function() {
		return this._name;
	};

	return File;
})();

module.exports = File;