npconsole.clear();

function sumSize(n) {
    // atejusiu duomenu validacija
    if (typeof n !== 'number'
        || !isFinite(n)) {
        return 'ERROR';
    }

    // uzdavinio logika
    const str = ('' + n).toLowerCase();
    let count = str.length;
    const ePosition = str.indexOf('e');

    // 1e+129 -> 130
    // ePos = 1 + 1(+)
    // nStr.length = 6
    // 129.length = 6 - epos(1) - 1(+-) - 1

    // 1e+40 -> 41

    if (ePosition >= 0) {
        const laisnioIlgis = count - 2 - ePosition;
        const laipsnis = str.slice(-laisnioIlgis);
        count = +laipsnis + 1;
    } else {
        if (n < 0) {
            count--;
        }
        if (n % 1 !== 0) {
            count--;
        }
    }


    // gautos rezultato validavimas
    // rezultato grazinimas
    return count;
}

console.log(sumSize(true), '->', 'ERROR');
console.log(sumSize('asd'), '->', 'ERROR');
console.log(sumSize(NaN), '->', 'ERROR');
console.log(sumSize(Infinity), '->', 'ERROR');
console.log(sumSize(-Infinity), '->', 'ERROR');
console.log(sumSize(), '->', 'ERROR');
console.log(sumSize([]), '->', 'ERROR');
console.log(sumSize({}), '->', 'ERROR');
console.log(sumSize(null), '->', 'ERROR');
console.log(sumSize(sumSize), '->', 'ERROR');

console.log(sumSize(0), '->', 1);
console.log(sumSize(5), '->', 1);
console.log(sumSize(781), '->', 3);
console.log(sumSize(37060123456), '->', 11);
console.log(sumSize(-0), '->', 1);
console.log(sumSize(-5), '->', 1);
console.log(sumSize(-781), '->', 3);
console.log(sumSize(-37060123456), '->', 11);
console.log(sumSize(-3.14), '->', 3);
console.log(sumSize(3.14), '->', 3);

console.log(sumSize(10000000000000000000000000000000000000000000), '->', 44);
console.log(sumSize(1000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000), '->', 130);
