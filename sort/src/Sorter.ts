export class Sorter {
  collection: number[];

  constructor(userCollection: number[]) {
    this.collection = userCollection
  }

  sort(): void {
    const length = this.collection.length

    if (Array.isArray(this.collection)) {
      for (let i = 0; i < length; i++) {
        for (let j = 0; j < length - i - 1; j++) {
          if (this.collection[j] > this.collection[j + 1]) {
            const leftHand = this.collection[j]
            this.collection[j] = this.collection[j + 1]
            this.collection[j + 1] = leftHand
          }
        }
      }
    }
  }
}

