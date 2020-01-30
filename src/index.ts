import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import {HtmlReport} from './reportTargets/htmlReport'

//matchreader
const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

//html report using a static method
const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United')
htmlSummary.buildAndPrintReport(matchReader.matches)

//console report
const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)
summary.buildAndPrintReport(matchReader.matches)