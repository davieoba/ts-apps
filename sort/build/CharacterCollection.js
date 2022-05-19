"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
class CharactersCollection {
    constructor(userData) {
        this.data = userData;
        this.length = this.data.length;
    }
    compare(leftIndex, rigthIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rigthIndex].toLowerCase();
    }
    swap(leftIndex, rigthIndex) {
        let userData = this.data.split('');
        let leftHand = userData[leftIndex];
        // move the right hand to the left
        userData[leftIndex] = userData[rigthIndex];
        userData[rigthIndex] = leftHand;
        this.data = userData.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
