"use strict";
exports.__esModule = true;
var fs = require("fs");
var CSVFileReader = /** @class */ (function () {
    function CSVFileReader(filePath) {
        this.filePath = filePath;
        this.data = [];
    }
    CSVFileReader.prototype.getData = function () {
        this.data = fs.readFileSync(this.filePath, {
            encoding: 'utf-8'
        }).split('\n').map(function (el) {
            return el.split(',');
        });
        console.log(this.data);
        // return ''
    };
    return CSVFileReader;
}());
new CSVFileReader('./football.csv').getData();
