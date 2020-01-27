"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var utils_1 = require("./utils");
var CsvFileReader = /** @class */ (function () {
    function CsvFileReader(filename) {
        this.filename = filename;
        this.data = [];
    }
    CsvFileReader.prototype.read = function () {
        this.data = fs_1.default
            .readFileSync(this.filename, {
            encoding: 'utf-8' //utf8 is a string of data
        })
            .split('\n')
            .map(function (row) {
            return row.split(',');
        }).map(function (row) {
            //after row is split we map again to parse out values of the row
            return [
                //data within the row is in a standard format so we can run some processing on the original values and return a new array
                utils_1.dateStringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                //type assertion. TS does not know what is in this array but we do so we tell ts what type is expected
                row[5],
                row[6]
            ];
        });
    };
    return CsvFileReader;
}());
exports.CsvFileReader = CsvFileReader;
