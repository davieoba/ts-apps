import { CSVFileReader } from "./CSVFileReader";
import { dateStringToDate } from "../utils";
import { MatchResult } from "../matchResult";
type MatchData = [Date, string, string, number, number, MatchResult, string]


export class MatchReader extends CSVFileReader<MatchData> {

  mapRow(el: string[]): MatchData {
    return [
      dateStringToDate(el[0]),
      el[1],
      el[2],
      parseInt(el[3]),
      parseInt(el[4]),
      <MatchResult>el[5],
      // MatchResult.el[5] as MatchResult,
      el[6]
    ]
  }


}
