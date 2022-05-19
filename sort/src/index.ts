import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharacterCollection";

const numberCollection = new NumbersCollection([10, 3, -5, 0]).sort()
const characterCollection = new CharactersCollection('James')

// const sorter = new Sorter(numberCollection)
// const characterSorter = new Sorter(characterCollection)



// sorter.sort()
// characterSorter.sort()
// console.log(characterCollection.data)
console.log(numberCollection.data)
