import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import {HtmlReport} from './reportTargets/htmlReport'


const matchReader = MatchReader.fromCsv('football.csv')
matchReader.load()

const htmlSummary = Summary.winsAnalysisWithHtmlReport('Man United')
htmlSummary.buildAndPrintReport(matchReader.matches)



const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)
summary.buildAndPrintReport(matchReader.matches)