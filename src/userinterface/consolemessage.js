var readline = require('readline');

var ConsoleInteraction = (function () {
    "use strict";

    function ConsoleInteraction() {
        this.inputMessage = function (msg, callback) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.question(msg, function (ret) {
                rl.close();
                callback(ret);
            });
        };

        this.messageLine = function (msg) {
            this.message(msg + "\n");
        };

        this.message = function (msg) {
            var rl = readline.createInterface({
                input: process.stdin,
                output: process.stdout
            });

            rl.write(msg);
            rl.close();
        };
    }

    return ConsoleInteraction;
})();

module.exports = ConsoleInteraction;