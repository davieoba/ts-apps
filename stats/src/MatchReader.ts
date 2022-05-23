import { dateStringToDate } from './utils';
import { MatchResult } from "./matchResult"

type MatchData = [Date, string, string, number, number, MatchResult, string]

interface Reader {
  read(): void;
  data: string[][]
}

export class MatchReader {

  // constructor(public reader: Reader) {
  // }

  // note: this 2 codes are the same thing
  matches: MatchData[];
  reader: Reader
  constructor(reader: Reader) {
    this.reader = reader
    this.matches = []
  }

  load(): MatchData[] {
    this.reader.read()
    this.matches = this.reader.data.map((el: string[]): MatchData => {
      return [
        dateStringToDate(el[0]),
        el[1],
        el[2],
        parseInt(el[3]),
        parseInt(el[4]),
        <MatchResult>el[5],
        el[6]
      ]
    })

    return this.matches
  }


}