console.clear();


/*
Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

Write a function that given a floor in the american system returns the floor in the european system.

With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

Basements (negatives) stay the same as the universal level.*/
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/solutions/javascript       

/*function getRealFloor(n) {
    return n > 13 ? n - 2 : n > 0 ? n - 1 : n;
  }
*/

function getRealFloor(n) {
    if (n <= 0) { n = n; }
    else if (n < 13) { n = n - 1; }
    else { n = n - 2 };

    return n;
}


console.log(getRealFloor(1), 0);
console.log(getRealFloor(5), 4);
console.log(getRealFloor(15), 13);
console.log(getRealFloor(-2), -2);


/*Count the number of Duplicates

Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example

"abcde" -> 0  # no characters repeats more than once
"aabbcde" -> 2  # 'a' and 'b'
"aabBcde" -> 2  # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1  # 'i' occurs six times
"Indivisibilities" -> 2  # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2  # 'a' and '1'
"ABBA" -> 2  # 'A' and 'B' each occur twice




*/
/*
function duplicateCount(text) {
    let lengthtext = text.length;
    let count = 0;
    const usingArrayFrom = Array.from(text);
    //ch=1;
    //console.log(usingArrayFrom);
    if (lengthtext===0){return 0;};
    if (lengthtext>0){
    for (i = 0; i < text.length; i++) {
        for (y = i + 1; y < text.length-2; y++) {
            if (usingArrayFrom[i] == usingArrayFrom[y]) { count++; }  
        }
        return count;

    }
}
}


console.log(duplicateCount(""), 0);
console.log(duplicateCount("acbde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1)
console.log(duplicateCount("Indivisibilities"), 2, "characters may not be adjacent")
*/

/* Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

Note: a and b are not ordered!

Examples (a, b) --> output (explanation)

(1, 0) --> 1 (1 + 0 = 1)
(1, 2) --> 3 (1 + 2 = 3)
(0, 1) --> 1 (0 + 1 = 1)
(1, 1) --> 1 (1 since both are same)
(-1, 0) --> -1 (-1 + 0 = -1)
(-1, 2) --> 2 (-1 + 0 + 1 + 2 = 2)*/

// function getSum( a,b )
// {   var sum =0;
//     if(a === b) sum = a;


//    return a + b;
// }


// console.log(getSum(0,-1),-1);
// console.log(getSum(0,1),1);
// console.log(getSum(340,117),51067);


// function solution(str){
//    let newarr=[];

//     var arr = [...str];
//     let z = arr.length;


//     if (str.length%2 != 0){z = Math.ceil((str.length)/2);};
//     for(let i=0; i<z; i++){
//         newarr[i]=arr[i]+arr[i+1];
//         for(let y=1; i<z; y++){

//         }



//         //console.log(z);
//     //    console.log(newarr[i]);

//     }



//     console.log(newarr);
//    //return str
// }

// console.log(solution("abcdef"), ["ab", "cd", "ef"]);
// console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
// console.log(solution(""), []);



console.log('-----------------------------------------------');
// str = str.replaceAll('a', '');
// str = str.replaceAll('A', '');
// str = str.replaceAll('e', '');
// str = str.replaceAll('E', '');
// str = str.replaceAll('i', '');
// str = str.replaceAll('I', '');
// str = str.replaceAll('u', '');
// str = str.replaceAll('U', '');
// str = str.replaceAll('o', '');
// str = str.replaceAll('O', '');

function disemvowel(str) {
    let text;
    str = str.replace('a', '');
    str = str.replace('A', '');
    str = str.replace('e', '');
    str = str.replace('E', '');
    str = str.replace('i', '');
    str = str.replace('I', '');
    str = str.replace('u', '');
    str = str.replace('U', '');
    str = str.replace('o', '');
    str = str.replace('O', '');

    return str;
}



console.log(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd");
console.log(disemvowel("What are you, a communist?"), "Wht r y,  cmmnst?");


/*
function descendingOrder(n){
  return parseInt(String(n).split('').sort().reverse().join(''))
}
*/

console.log('-----------------------------------------------');

function descendingOrder(n) {
    n = n.toString();
    n = n.split('');
    let temp;
    let revN = '';
    g = 0;
    for (let i = 0; i < n.length; i++) {
        for (let y = g++; y < n.length; y++) {
            if (n[y] > n[i]) {
                temp = n[i];
                n[i] = n[y];
                n[y] = temp;
            };
        };
    } for (let i = 0; i < n.length; i++) 
        revN += n[i].toString();
        revN = parseInt(revN);
    return revN;
}

console.log(descendingOrder(0), 0);
console.log(descendingOrder(1), 1);
console.log(descendingOrder(111), 111);
console.log(descendingOrder(15), 51);
console.log(descendingOrder(1021), 2110);
console.log(descendingOrder(123456789), 987654321);