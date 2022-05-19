import { Sorter } from "./Sorter";

export class CharactersCollection extends Sorter {
  data: string;
  length: number

  constructor(userData: string) {
    super()
    this.data = userData
    this.length = this.data.length
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase()
  }

  swap(leftIndex: number, rigthIndex: number): void {
    let userData = this.data.split('')
    let leftHand = userData[leftIndex]
    // move the right hand to the left
    userData[leftIndex] = userData[rigthIndex]
    userData[rigthIndex] = leftHand
    this.data = userData.join('')
  }
}