import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'
import {ConsoleReport} from './reportTargets/ConsoleReport'
import {WinsAnalysis} from './analyzers/WinsAnalysis'
import {Summary} from './Summary'
import {HtmlReport} from './reportTargets/htmlReport'
//create object that satisfies datareader interface
const csvFileReader = new CsvFileReader('football.csv')
//create instance of matchreader and pass in something satifying datareader internace
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

const summary = new Summary(
  new WinsAnalysis('Man United'),
  new ConsoleReport()
)

const htmlSummary = new Summary(
  new WinsAnalysis('Man United'),
  new HtmlReport()
)

summary.buildAndPrintReport(matchReader.matches)
htmlSummary.buildAndPrintReport(matchReader.matches)

