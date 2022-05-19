"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
class Sorter {
    constructor(userCollection) {
        this.collection = userCollection;
    }
    sort() {
        const length = this.collection.length;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1);
                }
            }
        }
        console.log(this.collection);
    }
}
exports.Sorter = Sorter;
// const data = new Sorter(new NumbersCollection([10, 2, -5, 0])).sort()
// const data = new NumbersCollection(this.collection)
