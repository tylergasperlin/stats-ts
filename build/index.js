"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var ConsoleReport_1 = require("./reportTargets/ConsoleReport");
var WinsAnalysis_1 = require("./analyzers/WinsAnalysis");
var Summary_1 = require("./Summary");
//matchreader
var matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
//html report using a static method
var htmlSummary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
htmlSummary.buildAndPrintReport(matchReader.matches);
//console report
var summary = new Summary_1.Summary(new WinsAnalysis_1.WinsAnalysis('Man United'), new ConsoleReport_1.ConsoleReport());
summary.buildAndPrintReport(matchReader.matches);
