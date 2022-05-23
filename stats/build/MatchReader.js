"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const utils_1 = require("./utils");
class MatchReader {
    constructor(reader) {
        this.reader = reader;
        this.matches = [];
    }
    load() {
        this.reader.read();
        this.matches = this.reader.data.map((el) => {
            return [
                (0, utils_1.dateStringToDate)(el[0]),
                el[1],
                el[2],
                parseInt(el[3]),
                parseInt(el[4]),
                el[5],
                el[6]
            ];
        });
        return this.matches;
    }
}
exports.MatchReader = MatchReader;
