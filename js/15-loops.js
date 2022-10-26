console.clear();

const marks = [10, 2, 5, 6, 8]



// FOR
// [10, 2, 8, 4, 6]
let sumFor = 0;
for (let i = 0; i < marks.length; ++i) {
    sumFor += marks[i];
}
const aveFor = sumFor / marks.length;
console.log('For:', aveFor);

// WHILE
// [10, 2, 8, 4, 6]
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
const aveWhile = sumWhile / marks.length;
console.log('While:', aveWhile);

// DO-WHILE
// [10, 2, 8, 4, 6]
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length)
const aveDoWhile = sumDoWhile / marks.length;
console.log('Do-while:', aveDoWhile);

// FOR-OF
// [10, 2, 8, 4, 6]
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
const aveForOf = sumForOf / marks.length;
console.log('For-of:', aveForOf);

// FOREACH
// [10, 2, 8, 4, 6]
let sumForeach = 0;
marks.forEach(function (mark, index, list) {
    // console.log('--', mark, index, list);
    sumForeach += mark;
});
const aveForeach = sumForeach / marks.length;
console.log('Foreach:', aveForeach);