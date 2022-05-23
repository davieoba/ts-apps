class ArrayOfNumbers {
  collection: number[]

  constructor(collection: number[]) {
    this.collection = collection
  }

  get(index: number): number {
    return this.collection[index]
  }
}

class ArrayOfAnything<T> {
  collection: T[]

  constructor(collection: T[]) {
    this.collection = collection
  }

  get(index: number): T {
    return this.collection[index]
  }
}

// example of generics with functions

function printStrings() {

}

function printNumber() {

}

interface Printable {
  print(): void;
}

class House {

  print(): void {
    console.log('this is a house')
  }
}

function printAnything<T extends Printable>(arr: T[]): void {
  for (let x of arr) {
    x.print()
  }
}

printAnything<House>([new House()])