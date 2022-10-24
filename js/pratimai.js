// Kintamųjų inicijavimas
/* 1.	Sukurti 3 kintamuosius su skaičiaus tipo reikšmėmis
a.	Po kiekvieno jų inicijavimo, išvesti į console
*/

const firsNumb = 1;
const secondNumb = 2;
const lastNumb = 3;

console.log(firsNumb);
console.log(secondNumb);
console.log(lastNumb);

console.log(firsNumb, secondNumb, lastNumb)

/* 2.	Sukurti 3 kintamuosius su teksto tipo reikšmėmis
a.	Po kiekvieno jų inicijavimo, išvesti į console
*/

const firstString = "a";
const secondString = "b";
const lastString = "c";

console.log(firstString);
console.log(secondString);
console.log(lastString);

console.log(firstString, secondString, lastString);

/*3.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis skaičių tipo reikšmėmis
a.	Po kiekvieno jų inicijavimo, išvesti į console
*/

/*4.	Sukurti 3 sąrašo tipo kintamuosius su penkiomis teksto tipo reikšmėmis
a.	Po kiekvieno jų inicijavimo, išvesti į console
*/





//Veiksmai su kintamaisiais

/* 1.	Susumuoti visus skaičiaus tipo kintamuosius
a.	Rezultatą išvesti į console
*/

const sumNumb = firsNumb + secondNumb + lastNumb;
console.log(sumNumb);

const sumNumb1 = `${firsNumb} + ${secondNumb} * ${lastNumb} = ${firsNumb + secondNumb * lastNumb}`;

console.log(sumNumb1);

/*2.	Sujungti visus teksto tipo kintamuosius taip, jog tarp jų būtų sudarytas tarpas
a.	Rezultatą išvesti į console
*/

const sumString = firstString + ' ' + secondString + ' ' + lastString;
console.log(sumString);
console.log(lastString + ' ' + secondString + ' ' + firstString);

/*3.	Apskaičiuoti vertę iš sąrašų kurių verčių tipas yra skaičiai, pagal pateiktą logiką
a.	1-2+3-4+5
b.	Rezultatą išvesti į console
*/

const p1 = 1;
const p2 = 2;
const p3 = 3;
const p4 = 4;
const p5 = 5;
mathP = p1 - p2 + p3 - p4 + p5;

console.log(mathP);
console.log(p1 - p2 + p3 - p4 + p5);

/*4.	Sujungti sąrašų vertes, kurių tipas yra tekstai, nuo sąrašo galo iki pradžios taip, jog tarp jų būtų kablelis ir tarpas
*/



/*
Kintamųjų palyginimas


Lyginant, jei rezultatas tenkina palyginimo sąlygą, tai į console išvesti žodį “Pomidoras”, o jei sąlyga nėra tenkinama, išvesti sakinį “Bandykite kitą kartą.”.
*/

/* 1.	Tarpusavyje palyginti skaičiaus tipo kintamuosius:
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/


var firsNumb1 = 15;
var secondNumb1 = 15;

const rez = "Pomidoras";
const rez1 = "Bandykite kitą kartą.";

if (firsNumb1 > secondNumb1) {
    console.log(rez, ":" + firsNumb1 + " > " + secondNumb1 + "\n" + firsNumb1 + " yra" + " didesnis uz " + secondNumb1 + "!");
}
else if (firsNumb1 < secondNumb1) {
    console.log(rez1, `: \n ${firsNumb1} yra mazeznis uz ${secondNumb1}`);
};

if (firsNumb1 === secondNumb1) {
    console.log(rez, `:\n ${firsNumb1} yra lygus ${secondNumb1}`);
};
if (firsNumb1 != secondNumb1) {
    console.log(`Skaiciai nelygus tarp saves!\n`)
};

/* 2.	Išvesti teksto tipo kintamųjų ilgius */

let firstText = '[nodemon] clean exit - waiting for changes before resta)'
let secondText = 'at Module._compile (node:internal/modules/cjs/loader:1090:27)'
//let firstText = '[nodemon] clean exit - waiting for changes before resta)'
//let firstText = 'at Module._compile (node:internal/modules/cjs/loader:1090:27)'

let length1 = firstText.length;
let length2 = secondText.length;

let skirtumas;

console.log(length1);
console.log(length2);

console.log(length1, length2);


console.log('--------------------------------------------');
/* 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/

if (length1 > length2) {
    console.log("Pirmas tekstas turi " + length1 + " simboli " + "antras tekstas turi " + length2 + " simbolius\n" + length1 + " simbolis yra daugiau uz " + length2 + " simbolius!");
    skirtumas = length1 - length2;
    console.log(`Pirmas tekstas turi ${skirtumas} simboliu daugiau`);
}
else if (length1 < length2) {
    console.log(`Pirmas tekstas turi  ${length1} simboliu jis yra trumpesnia uz antro teksto ilgi, antro teksto ilgis yra ${length2} simbolis.`);
    skirtumas = length2 - length1;
    console.log(`Antras tekstas turi ${skirtumas} simboliu daugiau.`);
};

if (length1 === length2) {
    console.log(`Pirmo ir antro teksto ilgiai yra po ${length1} simboli, teksto ilgiai vienodi`);
};
if (length1 != length2) {
    console.log(`Teksto ilgai nelygus tarpusavyje!\n`);
};

console.log('--------------------------------------------');



console.clear();

/* Funkcijos

Parašyti funkcijas, kurios atitinka pateiktus reikalavimus, jei įvykdo reikiamus testus

1.	Funkcija pavadinimu “tusciaFunkcija”:
a.	nepriima jokių kintamųjų
b.	neatlieka jokios vidinės logikos
c.	gražina boolean tipo reikšmę “false”
d.	TESTAS:
i.	console.log( tusciaFunkcija() );
ii.	rezultatas: false
*/


function tusciaFunkcija(tuscia) {
    return false;
}
tuscia = true;
console.log(tusciaFunkcija(tuscia));



console.log('--------------------------------------------');


/*
1.	Funkcija pavadinimu “daugyba”:
a.	priima du skaičiaus tipo kintamuosius
b.	atskirame kintamajame įsimena sandaugos reikšmę
c.	gražina saudaugos rezultatą
d.	TESTAI:
i.	console.log( daugyba( skaicius1, skaicius2 ) );
ii.	console.log( daugyba( skaicius3, skaicius2 ) );
iii.	console.log( daugyba( skaicius1, skaicius3 ) );
iv.	rezultatas: teisingos reikšmės;
*/

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'ERROR: pirmas parametras turi buti normalus skaicius.';
    }
    if (typeof b !== 'number') {
        return 'ERROR: antras parametras turi buti normalus skaicius.';
    }
    const c = a * b;
    return c;
}

console.log(multiply(2, 2), '->', 4);
console.log(multiply(6, 8), '->', 48);
console.log(multiply(-2, -5), '->', 10);
console.log(multiply(-2, 5), '->', -10);
console.log(multiply(2, -5), '->', -10);
console.log(multiply(2, 0), '->', 0);
console.log(multiply(0, 2), '->', 0);
console.log(multiply(0, 0), '->', 0);
console.log(multiply(3.14, 2), '->', 6.28);
console.log(multiply(2, 3.14), '->', 6.28);
console.log(multiply(3.5, 2.5), '->', 8.75);
console.log(multiply(Infinity, 2.5), '->', Infinity);
console.log(multiply(NaN, 2.5), '->', NaN);
console.log(multiply(5, '7'), '->', 'ERROR');
console.log(multiply(5, 'labas'), '->', 'ERROR');
console.log(multiply('7', 5), '->', 'ERROR');
console.log(multiply('labas', 5), '->', 'ERROR');

console.log('--------------------------------------------');



//Ciklo for panaudojimas
/*
1.	Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
a.	0 … 0
b.	0 … 4
c.	0 … 100
d.	574 … 815
e.	-50 … 50
f.	-70 … 30
*/


function sumaIntervale(start, end) {


    let suma = 0;
    for (let i = start; i <= end; i++) {
        suma = suma + i;
    }

    console.log(`${start} ... ${end} = ${suma}`);
    return suma;
}



const pradzios = [0, 0, 0, 574, -50, -70];
const pabaigos = [0, 4, 100, 815, 50, 30];

for (let i = 0; i < pabaigos.length; i++) {
    sumaIntervale(pradzios[i], pabaigos[i]);

}



console.log('----Per objekta sprendimas---------');




const list = [
    {},
    { end: 4 },
    { end: 100 },
    { start: 574, end: 815 },
    { start: -50, end: 50 },
    { start: -50 },
    { start: -70, end: 30 },
];

let obj = null;
for (let i = 0; i < list.length; i = i + 1) {
    obj = list[i];
    let pradzia = obj.start;
    let pabaiga = obj.end;
    if (!pradzia) {
        pradzia = 0;
    }
    if (!pabaiga) {
        pabaiga = 0;
    }
    sumaIntervale(pradzia, pabaiga);
}

console.log('--------------------------------------------');

/*
 
2.	panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
a.	pvz.: “abcdef” -> “fedcba”
*/

function invertString(zodis) {
    let stringConvert = "";
    for (let i = zodis.length - 1; i >= 0; i--) {
        const symbol = zodis[i];
        stringConvert += symbol;
    }
    return stringConvert;

}
let zodis = 'medus';
console.log(invertString(zodis));


console.log('--------------------------------------------');

/*
3.	Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
a.	0 - 11
b.	8 - 31
c.	-18 - 18
d.	rezultatą pateikti tokiu formatu:
i.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
ii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
iii.	Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

function beLiekanos(daliklis, start, ends) {
    atsakymas = 'nera dear';
    let count = 0;
    let sum = 0;
    let skaicius = start;
    for (i = start; i <= ends; i++) {

        //console.log(skaicius);
        if (skaicius % daliklis == 0) {
            count++;
            skaicius++;
        }
        else { skaicius++; }

    }
    atsakymas = `Skaičių intervale tarp ${start} ir ${ends}, besidalijančių be liekanos iš ${daliklis} yra ${count} vienetai.`
    return atsakymas;
}
const dalikliai = [3, 5, 7];
const Pradzia = [0, 8, -18];
const Pabaiga = [11, 31, 18];


for (y = 0; y < dalikliai.length; y++) {
    for (z = 0; z < Pradzia.length; z++)
        for (i = 0; i < dalikliai.length; i++) {
            console.log(beLiekanos(dalikliai[y], Pradzia[z], Pabaiga[z]));
        }
};

console.log('--------------------------------------------');
/*
3.	Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
a.	priima vieną kintamąjį
b.	jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
c.	priešingu atveju, funkcija tęsia darbą
d.	į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
e.	gražina skaitmenų kiekį
f.	TESTAI:
i.	console.log( skaitmenuKiekisSkaiciuje( 5 ) );
1.	rezultatas: 1
ii.	console.log( skaitmenuKiekisSkaiciuje( 781 ) );
1.	rezultatas: 3
iii.	console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
1.	rezultatas: 11
iv.	console.log( skaitmenuKiekisSkaiciuje( true ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
v.	console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
vi.	console.log( skaitmenuKiekisSkaiciuje( NaN ) );
1.	rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/


function skaitmenuKiekisSkaiciuje(number) {
    let count = 0;
    if (typeof number !== 'number'|| typeof number == NaN){
        return `Pateikta netinkamo tipo reikšmė.`;
    }else {
    number = Math.abs(number).toString();
    for (i = 0; i < number.length; i++) {
       console.log(number[i]);
        if (number[i] !== `.`) {
            count++;
        }
    }}

    return count;


};

let inputData = NaN;
console.log(skaitmenuKiekisSkaiciuje(inputData));