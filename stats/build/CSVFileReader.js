"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSVFileReader = void 0;
const fs = __importStar(require("fs"));
class CSVFileReader {
    constructor(filePath) {
        this.filePath = filePath;
        this.data = [];
        // this.data = [[new Date(), 'dave', 'dave', 1, 1, MatchResult.HomeWin, 'sgae']]
    }
    read() {
        this.data = fs.readFileSync(this.filePath, {
            encoding: 'utf-8'
        }).split('\n').map((el) => {
            return el.split(',');
        });
    }
}
exports.CSVFileReader = CSVFileReader;
// const dave = ['da', 'a', 'v', 'e']
// const letters = dave.map(el => el.split(''))
// console.log(letters)
// new CSVFileReader('./.').getData()
