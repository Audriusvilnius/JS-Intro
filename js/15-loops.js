console.clear();

const marks = [10, 2, 5, 6, 8]



// FOR
// [10, 2, 8, 4, 6]
let sumFor = 0;
for (let i = 0; i < marks.length; ++i) {
    sumFor += marks[i];
}
const aveFor = sumFor / marks.length;
console.log('For:', aveFor);

// WHILE
// [10, 2, 8, 4, 6]
let sumWhile = 0;
let iWhile = 0;
while (iWhile < marks.length) {
    sumWhile += marks[iWhile++];
}
const aveWhile = sumWhile / marks.length;
console.log('While:', aveWhile);

// DO-WHILE
// [10, 2, 8, 4, 6]
let sumDoWhile = 0;
let iDoWhile = 0;
do {
    sumDoWhile += marks[iDoWhile++];
} while (iDoWhile < marks.length)
const aveDoWhile = sumDoWhile / marks.length;
console.log('Do-while:', aveDoWhile);

// FOR-OF
// [10, 2, 8, 4, 6]
let sumForOf = 0;
for (const mark of marks) {
    sumForOf += mark;
}
const aveForOf = sumForOf / marks.length;
console.log('For-of:', aveForOf);

// FOREACH
// [10, 2, 8, 4, 6]
let sumForeach = 0;
marks.forEach(function (mark, index, list) {
    // console.log('--', mark, index, list);
    sumForeach += mark;
});
const aveForeach = sumForeach / marks.length;
console.log('Foreach:', aveForeach);

//MAP modifikuoja is sukuria masyva

const priceBefore = [10,2,88,6,8];
const priceAfter = priceBefore.map(function(price){
    const precision = 3; // apvalinimas po kablelio
    const pvm = 1.1815;
    return +(price*pvm).toFixed(precision);
    //return Math.round(price*1.21*100)/100;
    // function galima aprasyt ir iskelti kaip funkcija
});
console.log("Map:", priceBefore, priceAfter);

//FILTER padaro masyvo kopija su atfiltruotomis reiksmemis modifikuoja

const locationBefore = ['Vilnius', 'kaunas', 'Klaipeda', 'Panevezys' ];
const locationAfter = locationBefore.map(function(location){
    return location[0].toUpperCase() +'.';

   
})
 console.log('Map:', locationBefore,locationAfter);

 // Filter - parodyt filtra su atfiltrotom reiksmemis
 const filterBefore = [ 1, false, {}, 'b', [], 'Z'];
 const filterNumber = filterBefore.filter(function(item){
    // if (typeof item === 'number'){
    //     return true; ;
    // }else return false;

    return typeof item === 'number';
 })

 console.log ('Number: ', filterBefore, filterNumber);
 // Filter - parodyt filtra su atfiltrotom reiksmemis
 const filterBefore1 = [ 1, false, {}, 'b', [], 'Z'];
 const filterItem1 = filterBefore1.filter(function(item){
    

    return typeof item !== 'number'
        && typeof item !== 'string'
        && typeof item !== 'boolean';
 })

 console.log ('Number: ', filterBefore1, filterItem1);

 console.clear();

 const luckyPeople = [
     { name: 'Petras', age: 99 },
     { name: 'Maryte', age: 87 },
     { name: 'Jonas', age: 66 },
     { name: 'Ona', age: 35 },
 ];
 const older70 = [];
 for (const person of luckyPeople) {
     if (person.age > 70) {
         older70.push({
             age: person.age,
         });
     }
 }
 console.log(luckyPeople);
 console.log('objektas :',older70);
 
 // FILTER - padaryti masyvo kopija su atfiltruotomis reiksmemis per objekta 
 const older70filter = luckyPeople
     .filter(function (person) {
         return person.age > 70;
     });
 console.log(older70filter);
 
 const older70filterAge = luckyPeople
     .filter(function (person) {
         return person.age > 70;
     })
     .map(function (person) {
         return {
             age: person.age
         }
     });
 console.log(older70filterAge);

 
 const filterOther = filterBefore.filter(function (item) {
    return typeof item !== 'number'
        && typeof item !== 'string'
        && typeof item !== 'boolean';
});
console.log('Others:', filterBefore, filterOther);



// SORT - modifikuoja masyva isrikiuojant jo duomenis

const keyboardNumber = [7, 8, 9, 4, 4, 10, 5, 11, 77, 114, 6, 1, 1, 2, 3, 0];
console.log(keyboardNumber);

keyboardNumber.sort(function (a, b) {
    if (a > b) {
        return 1;
    } else if (a === b) {
        return 0;
    } else {
        return -1;
    }
});
console.log('Sort number',keyboardNumber);


// Sort simboliam
keyboardNumber.sort();
console.log('Sort simboliam',keyboardNumber);

/// Reduc - supaprastinti, vaiksmai atliekiami nuo pirmo elemmento 

const marks3 = [5,7,8,9,0,0,10];

const sumReduces = marks3.reduce(function(total, n){
    return total+n
});
console.log('Reduce sum:', sumReduces);


const marks4 = [1,2,3,4,5];
const produReduce = marks4.reduce(function (total, n){
    return total*n;

});
console.log('Reduce *:', produReduce);


const marks2 = [5,7,8,9,0,0,10];

const minusReduces1 = marks2.reduce(function(total, n){
    return total-n
});
console.log('Reduce minus:', minusReduces1);


const marks5 = [5,7,8,9,0,0,10];

const minusReduces2 = marks5.reduce(function(total, n){
    return total-n
}, 50); // antras parametras nuo kurio atliekamos aoperacijos
console.log('Reduce minus nuo uzdoto parametro 50: ', minusReduces2);


//DEMO

const list =[0,3,2,1,6,5,4,9,8,7];

const ats = list
    .map(function(n){
        return n*2+1;
    })
    .filter(function(n){
        return n%5===0 || n%3 ===0;
    })
     .sort(function(a,b){
        if(a>b){return 1}
        if(a===b){return 0}
        return -1;
     })
    .reduce(function(total,n){
        return total + n;
    }, 0);

    console.log('Keliu funkciju panaudokjimas vienu metu',ats);