// object
//key-value poros


const person = {
    name: 'Petras',
    age: 99,
    isMarred: true,
    'cildren-count': 5,
};
// standartinis budas is objekto
const name = person['name'];
const age = person['age'];
const isMarred = person['isMarred'];
const kids = person['cildren-count'];

console.log(name, age, isMarred, kids);

//supaptasrintas budas

const maryte = {
    name: 'Maryte',
    age: 60,
    isMarred: true,
};
const marytesName1 = maryte['name'];
const marytesName2 = maryte.name;
const marytesAge = maryte.age;
const marytesIsMarred = maryte.isMarred;

console.log(marytesName1);
console.log(marytesName2);
console.log(marytesAge);
console.log(marytesIsMarred);


const mokykla = {
    1: [
        {
            name: 'Petras',
            tevai: {
                tete: [112],
                mama: [111]
            }
        },
        {
            name: 'Maryte',
            tevai: {
                tete: [112112],
                mama: [111911]
            }
        },
    ],
    2: [
        {
            name: 'Jonas',
            tevai: {
                tete: [211],
                mama: [219]
            }
        },
        {
            name: 'Ona',
            tevai: {
                tete: [211211],
                mama: [219119, 299]
            }
        },
    ],
    3: [
        {
            name: 'Deivis',
            tevai: {
                tete: [311],
                mama: [344]
            }
        },
        {
            name: 'Birute',
            tevai: {
                tete: [311311],
                mama: [344344, 312]
            }
        },
    ],

}

//const klase = 2;
//const mokinioIndexas = 0;
//const kurisTevu = 'tete';
//const klasesInfo = mokykla[klase];
//console.log(klase);

//const kazkas1= mokykla[klase][mokinioIndexas].tevai[kurisTevu][0];
//const kazkas2 = mokykla[1][1].tevai.mama[0];
//const kazkas3 = mokykla.klase;
//const test1 = mokykla[3][1].tevai.mama[0];
const test2 = mokykla[3][0].tevai.mama[0];
//console.log(kazkas1);
//console.log(kazkas2);
//console.log(kazkas3);
//console.log(test1);
console.log(test2);


// sugalvoti klase ir objekta objekte

const cars = {
    light: [
        {
            model: 'van',
            kebulas: [2650, 3150, 4150, 5000]
        },
        {
            model: 'truck',
            kebulas: [2650, 3150, 4150, 5000, 5200]
        },
    ],
    medium: [
        {
            model: 'van',
            kebulas: [2600, 3100, 3750, 4100]
        },
        {
            model: 'truck',
            kebulas: [2650, 3150, 4150, 5000, 5300]
        },
    ],
    havy: [
        {
            model: 'van',
            kebulas: [3600, 3300, 3550, 4500]
        },
        {
            model: 'truck',
            kebulas: [3600, 3300, 3550, 4500, 5000],
        },
    ],
    havy_off: [
        {
            model: 'van',
            kebulas: [3600, 3300, 3550, 4500]
        },
        {
            model: 'truck',
            kebulas: [3600, 3300, 3550, 4500, 5000],
            anstatas: [3660, 3350, 3555, 4550, 5500],
        },
    ],
};
const light = 'light';
const medium = 'medium';
const havy = 'havy';
const havy_off = 'havy_off';
const van = 0;
const truck = 1;
const bazes = 0;
const bazel = 1;
const bazexl = 2;
const bazexxl = 3;
const baze3xl = 4;



const confyg = cars[havy_off][truck].anstatas[baze3xl]; //ber deklaruotas kintamasias
const confyg1 = cars[medium][1].kebulas[3]; // per masyvo vietas

console.log(confyg);
console.log(confyg1);