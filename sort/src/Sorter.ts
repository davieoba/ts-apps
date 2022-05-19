import { NumbersCollection } from "./NumbersCollection";

interface Sortable {
  length: number;
  compare: (leftIndex: number, rigthIndex: number) => boolean;
  swap: (leftIndex: number, rigthIndex: number) => void
}

export class Sorter {
  collection: Sortable;

  constructor(userCollection: Sortable) {
    this.collection = userCollection
  }

  sort(): void {
    const length = this.collection.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.collection.compare(j, j + 1)) {
          this.collection.swap(j, j + 1)
        }
      }
    }

    console.log(this.collection)

  }
}

// const data = new Sorter(new NumbersCollection([10, 2, -5, 0])).sort()

// const data = new NumbersCollection(this.collection)
