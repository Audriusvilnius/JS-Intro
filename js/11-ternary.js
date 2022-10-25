/*

TERNARYsupaprastintas if
Sablonas :klausimas ? teigiama neigiama

If(klausimas){
    teigima
}else{
    neigioma
}


*/

const amzius = 16;
const amziausCenzas = 21;
let ats = '';

if(amzius>=amziausCenzas){
    ats = `kanori daryk`;
}else{
    ats = `rukyk`;
}

console.log(ats);

const ats2 = amzius >= amziausCenzas? `darau ka noriu ` : `laukiam`;

const age = 20;
const zinute = `${age >= 21 ? '' : 'ne'}pilnametis`;

console.log(zinute);

console.log(`-------------------------`);


const a = 1>3 ? 3:4;
console.log(a);



console.log(`-------------------------`);


const b = 1 < 2 
            ? 3 > 4 
            ? 5
            :6
        :7;
console.log(b);