console.clear();

const str = 'Labas rytas Lietuva';

const rytasPosition = str.indexOf('rytas');
console.log(rytasPosition);

const labas = 'Labas labas labas labas rytas!';
const labasPos1 = labas.indexOf('labas');
console.log('labasPos', labasPos1);
const labasPos2 = labas.indexOf('labas', labasPos1 + 1);
console.log('labasPos', labasPos2);
const labasPos3 = labas.indexOf('labas', labasPos2 + 1);
console.log('labasPos', labasPos3);
const labasPos4 = labas.indexOf('labas', labasPos3 + 1);
console.log('labasPos', labasPos4);

let strCount = 0;
let strPos = 0;
const fullStr = 'Labas labas labas labas rytas!';
const searchTerm = 'labas';

while (fullStr.indexOf(searchTerm, strPos) >= 0) {
    strCount++;
    strPos = fullStr.indexOf(searchTerm, strPos) + 1;
}

console.log('labasCount', strCount);

const xPosition = str.indexOf('x');
console.log(xPosition);

const rytasIncludes = str.includes('rytas');
console.log(rytasIncludes);

const xIncludes = str.includes('x');
console.log(xIncludes);

const pirmi5 = str.slice(0, 5);
console.log(`"${pirmi5}"`);

const pirmi6 = str.slice(0, 6);
console.log(`"${pirmi6}"`);

const pirmi7 = str.slice(0, 7);
console.log(`"${pirmi7}"`);

const visiIkiPaskutinio = str.slice(0, str.length - 1);
console.log(visiIkiPaskutinio);

const visiIkiPaskutinio2 = str.slice(0, -1);
console.log(visiIkiPaskutinio2);

const paskutinis = str.slice(-1);
console.log(paskutinis);

let str1 = 'Labas rytas, Lietuva!';
str1 = str1.replace('rytas', 'vakaras');
console.log(str1);

let aaa = 'aaaaaaaa';
aaa = aaa.replace('a', 'B');
console.log(aaa);

let ccc = 'cccccccc';
ccc = ccc.replaceAll('c', 'D');
console.log(ccc);