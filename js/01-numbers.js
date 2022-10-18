/*
KINTAMIEJI
iniciavimo budai:
- const (default) - reiksme nekinta
- let - kai reiksme turi kisti
- var - nenaudoti!!!

SKAICIAI:
- sveikieji
- desimtainiai
- teigiamu
- neigiami
- begalybe (Infinity)
- NaN (not-a-number)

OPERATORIAI: +, -, *, /, ** (kelimas laipsniu)

MATEMATINES FUNKCIJOS:
- sqrt (saknis)
- sin/cos
- abs (absoliutine reiksme)
- round/ceil/floor (skirtingi apvalinimai)
*/

console.log('Numbers...');


const a = 0;
let b = 1;
let c = 2;

console.log(a);
console.log(b);
console.log(c);

b = 5;
c = 22;
console.log(b);
console.log(c);

const sveikasis = 777;
const desimtainis = 3.141592654;
const neigiamas = -1;
const neigiamasDesimtainis = -3.141592654;
const begalybe = Infinity;
const neigiamaBegalybe = -Infinity;
const neSkaicius = NaN;

console.log(begalybe);
console.log(neigiamaBegalybe);
console.log(neSkaicius);

const dalybaIsNulio = 7 / 0;
console.log(dalybaIsNulio);

const dalybaIsNulio2 = -7 / 0;
console.log(dalybaIsNulio2);

const nesamone = 'labas rytas' / 2;
console.log(nesamone);

const nesamone2 = 'penki' * 1.2;
console.log(nesamone2);

const day1 = 5;
const day2 = 15;
const day3 = nesamone2;

const totalSum = day1 + day2 + day3;
console.log(totalSum);

console.log('#### laipsnis');

const laipsnis2 = 2 ** 2;
console.log(laipsnis2);

const laipsnis3 = 2 ** 3;
console.log(laipsnis3);

const laipsnis4 = 2 ** 4;
console.log(laipsnis4);

console.log('#### Math.sqrt()');

const saknis9 = Math.sqrt(9);
console.log(saknis9);

const saknis81 = Math.sqrt(81);
console.log(saknis81);

console.log('#### Math.abs()');

const absoliutas7 = Math.abs(7);
console.log(absoliutas7);

const absoliutasMinus7 = Math.abs(-7);
console.log(absoliutasMinus7);

console.log('#### Math.round()');

const nr1 = 0.1;
const round1 = Math.round(nr1);
console.log(nr1, '->', round1);

const nr2 = 0.499999;
const round2 = Math.round(nr2);
console.log(nr2, '->', round2);

const nr3 = 0.5;
const round3 = Math.round(nr3);
console.log(nr3, '->', round3);

const nr4 = 0.999999;
const round4 = Math.round(nr4);
console.log(nr4, '->', round4);

console.log('#### Math.ceil()');

const nc1 = 0.000001;
const ceil1 = Math.ceil(nc1);
console.log(nc1, '->', ceil1);

const nc2 = 0.5;
const ceil2 = Math.ceil(nc2);
console.log(nc2, '->', ceil2);

const nc3 = 0.999999;
const ceil3 = Math.ceil(nc3);
console.log(nc3, '->', ceil3);

const nc4 = 0;
const ceil4 = Math.ceil(nc4);
console.log(nc4, '->', ceil4);

const nc5 = 1;
const ceil5 = Math.ceil(nc5);
console.log(nc5, '->', ceil5);

const nc6 = -7.13;
const ceil6 = Math.ceil(nc6);
console.log(nc6, '->', ceil6);

console.log('#### Math.floor()');

const nf1 = 0.000001;
const floor1 = Math.floor(nf1);
console.log(nf1, '->', floor1);

const nf2 = 0.5;
const floor2 = Math.floor(nf2);
console.log(nf2, '->', floor2);

const nf3 = 0.999999;
const floor3 = Math.floor(nf3);
console.log(nf3, '->', floor3);

const nf4 = 0;
const floor4 = Math.floor(nf4);
console.log(nf4, '->', floor4);

const nf5 = 1;
const floor5 = Math.floor(nf5);
console.log(nf5, '->', floor5);

const nf6 = -7.13;
const floor6 = Math.floor(nf6);
console.log(nf6, '->', floor6);



