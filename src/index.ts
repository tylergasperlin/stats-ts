import {MatchResult} from './Enums'
import {MatchReader} from './MatchReader'
import {CsvFileReader} from './CsvFileReader'

//create object that satisfies datareader interface
const csvFileReader = new CsvFileReader('football.csv')
//create instance of matchreader and pass in something satifying datareader internace
const matchReader = new MatchReader(csvFileReader);
matchReader.load()

let manunitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manunitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manunitedWins++;
  }
}

console.log(`Man United won ${manunitedWins} games`);
