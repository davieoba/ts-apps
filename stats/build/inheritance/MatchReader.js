"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MatchReader = void 0;
const CSVFileReader_1 = require("./CSVFileReader");
const utils_1 = require("./utils");
class MatchReader extends CSVFileReader_1.CSVFileReader {
    mapRow(el) {
        return [
            (0, utils_1.dateStringToDate)(el[0]),
            el[1],
            el[2],
            parseInt(el[3]),
            parseInt(el[4]),
            el[5],
            el[6]
        ];
    }
}
exports.MatchReader = MatchReader;
