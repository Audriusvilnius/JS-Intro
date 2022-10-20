// proceduru rinkinys FUNCTION
/* 

*/

console.clear();

function sum(a, b){
    console.log('Pirmas kintamasis', a);
    console.log('Antras kintamasis', b);
    return a + b;
}

const n1 = 7;
const n2 = 5;
const n3 = 6;
const n4 = 1;

const s12 = sum(n1, n2);
const s34= sum(n3, n4);
const s31= sum(n3, n1);

console.log(s12);
console.log(s34);
console.log(s31);


function pvm(kaina){
    const pvm = 21;
    const gslutuneKaina = kaina * (pvm/100 +1);
    return (gslutuneKaina);
}
const kainaBePvm1 = 5;
const kainaBePvm2 = 70;
const kainaBePvm3 = 5.56;

const kainaSuPvm1 = pvm(kainaBePvm1);
const kainaSuPvm2 = pvm(kainaBePvm2);
const kainaSuPvm3 = pvm(kainaBePvm3);

console.log(kainaSuPvm1);
console.log(kainaSuPvm2);
console.log(kainaSuPvm3);
console.log(pvm(10)); // tiesiai i funkcija paduot reiksme galima


// 

function prisistatymas(name, age){
    return `Sveiki, as esu ${name}, ir man ${age}`;
}
const asmuo1 = prisistatymas("Petras", 33);
const asmuo2 = prisistatymas("Maryte", 23);

console.log(asmuo1);
console.log(asmuo2);
console.log(prisistatymas("Zita", 18));


