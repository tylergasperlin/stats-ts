"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Enums_1 = require("./Enums");
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
//create object that satisfies datareader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create instance of matchreader and pass in something satifying datareader internace
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var manunitedWins = 0;
for (var _i = 0, _a = matchReader.matches; _i < _a.length; _i++) {
    var match = _a[_i];
    if (match[1] === 'Man United' && match[5] === Enums_1.MatchResult.HomeWin) {
        manunitedWins++;
    }
    else if (match[2] === 'Man United' && match[5] === Enums_1.MatchResult.AwayWin) {
        manunitedWins++;
    }
}
console.log("Man United won " + manunitedWins + " games");
