console.clear();

/*
FOR ciklas

*/
const users = ['Ona', 'Maryte', 'Petras']
let userIndex = 0;

console.log(`labas rytas ${users[userIndex]}!`);
userIndex++;
console.log(`labas rytas ${users[userIndex]}!`);
userIndex++;
console.log(`labas rytas ${users[userIndex]}!`);
userIndex++;


const marks = [10, 5, 2, 3, 7, 9, 7, 8];
let total = 0;
const count = marks.length; //masyvo ilgis

for (let i = 0; i < marks.length; i++) {
    console.log('indexas: ', i, '->', 'reiksme: ', marks[[i]]);
    total = total + marks[i];
}

const avarage = total / count;

console.log('Avarage:', avarage);
