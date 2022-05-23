"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const matchResult_1 = require("./matchResult");
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
const data = new MatchReader_1.MatchReader(new CSVFileReader_1.CSVFileReader('./football.csv')).load();
let manuWins = 0;
// const data = new MatchReader('./football.csv').getData()
for (let match of data) {
    if (match[1] === 'Man United' && match[5] === matchResult_1.MatchResult.HomeWin) {
        manuWins++;
    }
    else if (match[2] === 'Man United' && match[5] === matchResult_1.MatchResult.AwayWin) {
        manuWins++;
    }
}
console.log(`Man United won ${manuWins} games`);
