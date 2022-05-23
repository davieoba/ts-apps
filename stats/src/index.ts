import { MatchResult } from "./matchResult"
import { MatchReader } from './MatchReader'
import { CSVFileReader } from "./CSVFileReader"

const data = new MatchReader(new CSVFileReader('./football.csv')).load()


let manuWins = 0

// const data = new MatchReader('./football.csv').getData()

for (let match of data) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manuWins++
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manuWins++
  }
}

console.log(`Man United won ${manuWins} games`)