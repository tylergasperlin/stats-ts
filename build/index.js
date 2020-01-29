"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
var htmlReport_1 = require("./reportTargets/htmlReport");
//create object that satisfies datareader interface
var csvFileReader = new CsvFileReader_1.CsvFileReader('football.csv');
//create instance of matchreader and pass in something satifying datareader internace
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
var htmlSummary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new htmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);
htmlSummary.buildAndPrintReport(matchReader.matches);
