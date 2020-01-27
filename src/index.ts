import fs from 'fs';

const matches = fs
  .readFileSync('football.csv', {
    encoding: 'utf-8' //utf8 is a string of data
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

let manunitedWins = 0;

//collection of closely related values = enum
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manunitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manunitedWins++;
  }
}

console.log(`Man United won ${manunitedWins} games`);
