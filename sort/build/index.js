"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharacterCollection_1 = require("./CharacterCollection");
const numberCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]).sort();
const characterCollection = new CharacterCollection_1.CharactersCollection('James');
// const sorter = new Sorter(numberCollection)
// const characterSorter = new Sorter(characterCollection)
// sorter.sort()
// characterSorter.sort()
// console.log(characterCollection.data)
console.log(numberCollection.data);
