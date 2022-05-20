import { CSVFileReader } from "./CSVFileReader"

const data = new CSVFileReader('./football.csv').getData()

let manuWins = 0

// we use it to simply signal to other engineers that this are closely related values the type of this enum is MatchResult
enum MatchResult {
  HomeWin = 'H',
  AwayWin = 'A',
  Draw = 'D'
}

for (let match of data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manuWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manuWins++
  }
}

console.log(`Man United won ${manuWins} games`)