import * as fs from 'fs'

export abstract class CSVFileReader<T> {
  // data: MatchData[];
  data: T[]
  filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.data = []
    // this.data = [[new Date(), 'dave', 'dave', 1, 1, MatchResult.HomeWin, 'sgae']]
  }

  abstract mapRow(el: string[]): T

  public getData(): T[] {
    this.data = fs.readFileSync(this.filePath, {
      encoding: 'utf-8'
    }).split('\n').map((el) => {
      return el.split(',')
    }).map(this.mapRow)

    return this.data
  }

}

// const dave = ['da', 'a', 'v', 'e']
// const letters = dave.map(el => el.split(''))

// console.log(letters)

// new CSVFileReader('./.').getData()