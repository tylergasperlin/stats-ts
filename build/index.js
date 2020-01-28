"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = require("./Enums");
var MatchReader_1 = require("./MatchReader");
var reader = new MatchReader_1.MatchReader('football.csv');
reader.read();
var manunitedWins = 0;
for (var _i = 0, _a = reader.data; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === Enums_1.MatchResult.HomeWin) {
        manunitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === Enums_1.MatchResult.AwayWin) {
        manunitedWins++;
    }
}
console.log("Man United won " + manunitedWins + " games");
