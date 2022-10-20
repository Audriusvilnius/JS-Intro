//array

const paymys1 = 10;
const paymys2 = 2;
const paymys3 = 8;
const paymys4 = 6;
const paymys5 = 9;


const vid = (paymys1 + paymys2 + paymys3 + paymys4 + paymys5) / 5;
console.log(`vid: ${vid}`);

const mokiniai = ['Petras', 'Jonas', 'Maryte'];

const turiPapeikima = [true, false, false];

const pazymiai = [10, 10, 10, 4, 6];
console.log(pazymiai);

const ap1 = pazymiai[0];
const ap2 = pazymiai[1];
const ap3 = pazymiai[2];
const ap4 = pazymiai[3];
const ap5 = pazymiai[4];

const kiekis = pazymiai.length;
console.log("Masyvo i = ", kiekis);

console.log(ap1);
console.log(ap4);

console.log((ap1+ap2+ ap3+ ap4+ ap5)/kiekis);


const pirkiniai = [
    ['agurkas', 2],
    ['pomidoras', 4],
    ['pipirai', 6],
    ['cesnakas', 7],
    ['burokus', 5]
];

console.log(pirkiniai);

// Reik pirkt 3 burokus
//reik pirkt  7 cesnaka

const prekesIndex = 0;

const preke = pirkiniai[prekesIndex];
const prekesPavadinimas = preke[0];
const prekesKiekis = preke[1];

console.log(preke);
console.log(prekesKiekis);
console.log(prekesPavadinimas);

console.log(`Reik pirkti ${prekesPavadinimas} ${prekesKiekis}`);

// mokykla > klases > mokiniai > tevus > telefonai
const mokykla = [
    [1, [
        ['Petras', [
            ['Petro tete', [
                112,
            ]],
            ['Petro mama', [
                911,
            ]],
        ]],
        ['Maryte', [
            ['Marytes tete', [
                123456,
                123457,
                123458,
            ]],
            ['Marytes mama', [
                654321,
                654320,
            ]],
        ]],
    ]],
    [2, [
        ['Jonas', [
            ['Jono tete', []],
            ['Jono mama', []],
        ]],
        ['Ona', [
            ['Onos tete', [
                99999,
            ]],
            ['Onos mama', []],
        ]],
    ]],
];

// Jono mamos tel kiekis
const klase = 1;
const mokinioIndex = 1;
const tevuIndex = 0;

const telefonai = mokykla[klase - 1][1][mokinioIndex][1][tevuIndex][1].length;
console.log(telefonai);

const raide = ['a', 'a', 'c', 'd', 'f'];
console.log(raide);

console.log( raide[0]);
console.log( raide[1]);
console.log( raide[2]);
console.log( raide[3]);
console.log( raide[4]);
 if (raide[0] !== raide[1]){console.log("Klaida")}
    else if (raide[0] == raide[1]){console.log("Ta pati")};