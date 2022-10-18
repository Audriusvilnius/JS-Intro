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
console.log(sumString)
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

if (firsNumb1 > secondNumb1) { console.log(rez, ":" + firsNumb1 + " > " + secondNumb1 + "\n" + firsNumb1 + " yra" + " didesnis uz " + secondNumb1 + "!"); }
else if (firsNumb1 < secondNumb1) { console.log(rez1, `: \n ${firsNumb1} yra mazeznis uz ${secondNumb1}`) };

if (firsNumb1 === secondNumb1) { console.log(rez, `:\n ${firsNumb1} yra lygus ${secondNumb1}`) };
if (firsNumb1 != secondNumb1) { console.log(`Skaiciai nelygus tarp saves!\n`) };

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

console.log(length1,length2);

/* 3.	Tarpusavyje palyginti teksto tipo kintamųjų ilgius:
a.	kuris didesnis
b.	kuris mažesnis
c.	ar jie lygūs
d.	ar jie nelygūs
e.	kuris didesnis arba lygus
f.	kuris mažesnis arba lygus
*/

if (length1 > length2) { console.log("Pirmas tekstas turi " + length1 + " simboli " + "antras tekstas turi "+length2 + " simbolius\n" + length1 + " simbolis yra daugiau uz " + length2 + " simbolius!"); skirtumas = length1-length2;  console.log(`Pirmas tekstas turi daugiau ant ${skirtumas} simboliu`) }
else if (length1 < length2) { console.log(`Pirmas tekstas turi  ${length1} simboliu jis yra trumpesnia uz antro teksto ilgi, antro teksto ilgis yra ${length2} simbolis.`);  skirtumas = length2-length1;  console.log(`Antras tekstas turi daugiau ant ${skirtumas} simboliu.`) };

if (length1 === length2) { console.log(`Pirmo ir antro teksto ilgiai yra po ${length1} simboli, teksto ilgiai vienodi`) };
if (length1 != length2) { console.log(`Teksto ilgai nelygus tarpusavyje!\n`) };
