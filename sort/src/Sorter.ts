interface Sortable {
  length: number;
  compare: (leftIndex: number, rigthIndex: number) => boolean;
  swap: (leftIndex: number, rigthIndex: number) => void
}

export abstract class Sorter {
  // we promise with this code below that when we extend this class the child class would have this methods/properties
  abstract compare(leftIndex: number, rigthIndex: number): boolean;
  abstract swap(leftIndex: number, rigthIndex: number): void
  abstract length: number

  sort(): this {
    const length = this.length
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i - 1; j++) {
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
    return this
  }
}

// so I want to make the sort method available on the other classes : numbercollection class and the string collectiom class, so they would extend from this sorter class instead of each of them having a sorter method on their respective classes.
/*
but, what happens is that I dont need the this.collection again since each of those classes have the data on it, and the method call would not be this.collection.compare or this.collection.swap just this.compare and this.swap but once I do this, ts would flag this an error because there is no swap or compare method on sorter class, the solution to this is by creating what is called an abstract class. it is also called a base class, and other classes can inherit from it, so it would not flag errors and it would assume that the developer knows what he is doing and it is not a mistake.


note that in the other parent class: sorter or base/abstract class there is no constructor this is because we are no longer passing into the constructor and instance of the other classes, so they would just extend this class and get the sort method from it. 
*/


/*
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
*/