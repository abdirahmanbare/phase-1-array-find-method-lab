// // code your solution here
// function superbowlWin(record) {
//     for (let game of record) {
//         if (game.team === "Denver Broncos" && game.result === "W") {
//             return game.year;
//         }
//     }
//     return undefined;
// }

// // // Example usage:
// // const record = [
// //     { year: "1998", team: "Denver Broncos", result: "W" },
// //     { year: "1997", team: "Denver Broncos", result: "W" },
// //     { year: "2015", team: "Denver Broncos", result: "W" },
// //     { year: "2020", team: "Denver Broncos", result: "L" }
// // ];

// // console.log(superbowlWin(record)); // Output: "1998"
// const assert = require('assert');

// // The superbowlWin function
// function superbowlWin(record) {
//     for (let game of record) {
//         if (game.team === "Denver Broncos" && game.result === "W") {
//             return game.year;
//         }
//     }
//     return undefined;
// }

// // Mocha test suite
// describe('superbowlWin', function() {
//     // Sample record for testing
//     let record;

//     // "before all" hook to initialize the record array
//     before(function() {
//         record = [
//             { year: "1998", team: "Denver Broncos", result: "W" },
//             { year: "1997", team: "Denver Broncos", result: "W" },
//             { year: "2015", team: "Denver Broncos", result: "W" },
//             { year: "2020", team: "Denver Broncos", result: "L" }
//         ];
//     });

//     // Test case
//     it('should return the year the Denver Broncos won the superbowl', function() {
//         const year = superbowlWin(record);
//         assert.strictEqual(year, "1998");
//     });

//     it('should return undefined if there are no win objects', function() {
//         const emptyRecord = [
//             { year: "2020", team: "Denver Broncos", result: "L" },
//             { year: "2019", team: "Denver Broncos", result: "L" }
//         ];
//         const year = superbowlWin(emptyRecord);
//         assert.strictEqual(year, undefined);
//     });
// });
// index.js

function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
}
function module(){

module.exports = superbowlWin;
// test.js
const assert = require('assert');
                const superbowlWin = require('./index')}

describe('superbowlWin', function() {
    it('should return the year when the Denver Broncos won the Superbowl', function() {
        const record = [
            { year: "2015", result: "W"},
            { year: "2014", result: "N/A"},
            { year: "2013", result: "L"},
        ];
        assert.strictEqual(superbowlWin(record), "2015");
    });

    it('should return undefined if no win is found', function() {
        const record = [
            { year: "2014", result: "N/A"},
            { year: "2013", result: "L"},
            { year: "2012", result: "N/A"},
        ];
        assert.strictEqual(superbowlWin(record), undefined);
    });
});
