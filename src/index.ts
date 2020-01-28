import {MatchResult} from './Enums'
import {MatchReader} from './MatchReader'

const reader = new MatchReader('football.csv')
reader.read();

let manunitedWins = 0;

for (let match of reader.data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manunitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manunitedWins++;
  }
}

console.log(`Man United won ${manunitedWins} games`);
