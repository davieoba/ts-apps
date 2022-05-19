import { Sorter } from "./Sorter";

export class NumbersCollection extends Sorter {
  data: number[];
  length: number

  constructor(collection: number[]) {
    super()
    this.data = collection
    this.length = this.data.length
  }

  compare(leftIndex: number, rigthIndex: number): boolean {
    return this.data[leftIndex] > this.data[rigthIndex]
  }

  swap(leftIndex: number, rigthIndex: number): void {
    const leftHand = this.data[leftIndex]
    this.data[leftIndex] = this.data[rigthIndex]
    this.data[rigthIndex] = leftHand
  }
}

