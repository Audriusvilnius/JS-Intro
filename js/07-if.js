// If , else if

console.clear();

/* IF - salygos sakinys / palyginimas
Operatoriai: <, >, ==, !=, >=, <=, ===, !==
Naudotini: <, >, >=, <=, ===, !==
Nenaudotini: ==, !=

Loginiai && (and) , || (or), ! (negate neiginys)

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} else if () {} ... else if () {}
if () {} else if () {} ... else if () {} else {}
*/




const a = 7;
const b = 4;

if (a > b) {
    console.log('A daugiau uz b');
}
else {
    console.log('B daugiau uz A');
};

const day = 9;
let dayName = '';

if (day === 1) {
    dayName = 'pirmadienis';

} else if (day === 2) {
    dayName = 'antradienis';

} else if (day === 3) {
    dayName = 'treciadienis';

} else if (day === 4) {
    dayName = 'Ketrirtadienis';

} else if (day === 5) {
    dayName = 'Penktadienis';

}
else {
    console.log('Dnera');
}
console.log('Diena yra:', dayName)

// Nestinimas - code nesting

const temp = 33;
const siltaNuoTemp = 22;
const arLyja = true;
let ats = '';

if (temp >= siltaNuoTemp){
    if(arLyja === true){
        ats = 'Paimk sketi';
    }
    else{
        ats = 'Galima eiti su maike';
    }
}
else {
    ats = 'Paimk striuke';
}

console.log(ats);
