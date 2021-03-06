import * as fs from 'fs'


export class CSVFileReader {
  data: string[][];
  filePath: string

  constructor(filePath: string) {
    this.filePath = filePath
    this.data = []
    // this.data = [[new Date(), 'dave', 'dave', 1, 1, MatchResult.HomeWin, 'sgae']]
  }

  read(): void {
    this.data = fs.readFileSync(this.filePath, {
      encoding: 'utf-8'
    }).split('\n').map((el) => {
      return el.split(',')
    })

  }
}

// const dave = ['da', 'a', 'v', 'e']
// const letters = dave.map(el => el.split(''))

// console.log(letters)

// new CSVFileReader('./.').getData()