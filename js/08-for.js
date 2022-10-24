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

const a = 30;
const b = 40;

for (let i = a; i <= b; i++) {
    console.log(i);
};


//________________________________________________

function sumaIntervale(start, end) {


    let suma = 0;
    for (let i = start; i <= end; i++) {
        suma = suma + i;}
    
    console.log(`${start} ... ${end} = ${suma}`);
    return suma;
}



const pradzios = [0, 0, 0, 574, -50, -70];
const pabaigos = [0, 4, 100, 815, 50, 30];

for (let i = 0; i < pabaigos.length; i++) {
    sumaIntervale(pradzios[i], pabaigos[i]);

}
//_________________________________________________

console.log('--------------');

const abc = ['a', 'b', 'c', 'd', 'e'];
console.log(abc);


