onsole.clear();

// SPREAD OPERATOR - ...
// - kai nori nukopijuoti masyva / objekta
// - nukopijuoti ir papildyti
// - nukopijuoti ir perrasyti dali info

const marks = [10, 2, 8, 4, 6];
console.log(marks);

const copyMarks = marks;
console.log(copyMarks);

marks[0] = 20;
console.log(marks);
marks.push(77);
console.log(marks);

console.log(copyMarks);

let x = 5;
let y = x;

console.log(x, y);

x = 777;
console.log(x, y);

const newMarks = [];

for (const m of marks) {
    newMarks.push(m);
}

console.log(marks);
console.log(newMarks);

marks.push(100000)
newMarks.push(8)

console.log(marks);
console.log(newMarks);