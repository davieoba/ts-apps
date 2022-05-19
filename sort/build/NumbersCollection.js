"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(collection) {
        super();
        this.data = collection;
        this.length = this.data.length;
    }
    compare(leftIndex, rigthIndex) {
        return this.data[leftIndex] > this.data[rigthIndex];
    }
    swap(leftIndex, rigthIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rigthIndex];
        this.data[rigthIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
