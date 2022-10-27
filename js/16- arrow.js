console.clear();
const pirmas = 7;
const antras = 5;


// function declaration
function suma(a, b) {
    return a + b;
}
console.log(`${pirmas} + ${antras} = ${suma(pirmas, antras)}`);

// function expresion
const skirtumas = function (a, b) {
    return a - b;
}
console.log(`${pirmas} - ${antras} = ${skirtumas(pirmas, antras)}`);

// arrow function - rodykline funkcija
const sandauga = (a, b) => {
    return a * b;
}
console.log(`${pirmas} * ${antras} = ${sandauga(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jeigu logikos bloke yra tik 1 salyga,
// galima nerasyti return ir {}
const dalmuo = (a, b) => a / b;
console.log(`${pirmas} / ${antras} = ${dalmuo(pirmas, antras)}`);

// arrow function - rodykline funkcija
// jeigu parametru bloke yra tik 1 parametras,
// galima nerasyti ()
const kvadratu = a => a ** 2;
console.log(`${pirmas} ** 2 = ${kvadratu(pirmas, antras)}`);

const marks = [10, 2, 8, 4, 6, 1];

const double = marks.map(n => n * 2);
console.log(marks);
console.log(double);

const more5 = marks.filter(n => n > 5)
console.log(more5);

marks.sort((a, b) => b - a);
console.log(marks);

const bendraSuma = marks.reduce((t, n) => t + n, 0);
console.log(bendraSuma);