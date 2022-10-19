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
    1:[
        {
            name: 'Petras',
            tevai: {
                tete:[112],
                mama:[911],
            }
        },
        {
            name: 'Maryte',
            tevai: {
                tete:[112112],
                mama:[911911],
            }
        },
    ],
    2:[
        {
            name: 'Jonas',
            tevai: {
                tete:[1121],
                mama:[333444],
            }
        },
        {
            name: 'Ona',
            tevai: {
                tete:[333],
                mama:[911911,112],
            }
        },
    ],

}

const klase = 2;
const mokinioIndexas = 1;
const kurisTevu = 'tete';
const klasesInfo = mokykla[klase];
console.log(klase);
const kazkas = mokykla[klase][mokinioIndexas].tevai[kurisTevu][0];
//const kazkas = mokykla[1][1].tevai.mama[0];
console.log(kazkas);