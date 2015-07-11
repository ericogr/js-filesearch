var File = (function() {
	"use strict";

	function File(filename) {
		var _filename = filename;

		this.getName = function() {
			return _filename;
		}
	}

	return File;
})();

module.exports = File;