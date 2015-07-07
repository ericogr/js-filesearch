var File = (function() {
	"use strict";
	function File(filename) {
		var _name = filename;

		this.getName = function() {
			return _name;
		}
	}

	return File;
})();

module.exports = File;