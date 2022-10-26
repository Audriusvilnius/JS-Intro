console.clear();

const str = 'Labas rytas Lietuva';

const rytasPosition = str.indexOf('rytas');
console.log(rytasPosition);

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