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

console.log('-----------------------------------------------');


/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

Examples

highAndLow("1 2 3 4 5");  // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
Notes

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, and highest number is first.



function highAndLow(numbers){
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(0, numbers) + ' ' + Math.min.apply(0, numbers);
}

*/

console.log('-----------------------------------------------');

function highAndLow(numbers) {
    //parseInt(String(n).split('').sort().reverse().join(''))
    //let max=[];
    //let min=[];
    let join = '';
    numbers = (numbers.split(' '));
    let max = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        numbers[i] = parseInt(numbers[i]);
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    console.log(max);
    let min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    console.log(min);
    join = max + ' ' + min;

    console.log(join);

}


console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
console.log(highAndLow("1 2 3"), "3 1");

console.log('-----------------------------------------------');

var number = function (busStops) {
    // Good Luck!


}




console.log(([[10, 0], [3, 5], [5, 8]]), 5);
console.log(([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
console.log(([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
console.log(number([[0, 0]]), 0);

console.log('-----------------------------------------------');

/*

ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.


//parseInt(String(n).split('').sort().reverse().join(''))
 123
12345
1234567
1234567890
1234x
123456x
12.0

*/


function validatePIN(pin) {
    //return true or false
    console.log(pin);
    let position = pin.search(".");
    console.log(position);
    if (position == -1) { return false; }
    if (pin == '0000' || pin == '000000') { return true; }
    if (pin.length == 4) {
        pin = parseInt(pin);
        if (pin % 1 == 0 && pin > 0) { return true; }
    };
    if (pin.length == 6) {
        pin = parseInt(pin);
        if (pin % 1 == 0 && pin > 0) { return true; }
    }


    return false
}
// conslole.log(validatePIN(0000000));
console.log(validatePIN("123456"), false, "Wrong output for '12'");
console.log(validatePIN("12.0"), false, "Wrong output for '123'");
console.log(validatePIN("12345"), false, "Wrong output for '12345'");
console.log(validatePIN("1234567"), false, "Wrong output for '1234567'");
console.log(validatePIN("-1234"), false, "Wrong output for '-1234'");
console.log(validatePIN("1.234"), false, "Wrong output for '1.234'");
console.log(validatePIN("-1.234"), false, "Wrong output for '-1.234'");
console.log(validatePIN("000000"), false, "Wrong output for '00000000'");
console.log(validatePIN("a234"), false, "Wrong output for 'a234'");
console.log(validatePIN(".234"), false, "Wrong output for '.234'");
console.log(validatePIN("1234"), true, "Wrong output for '1234'");
console.log(validatePIN("0000"), true, "Wrong output for '0000'");
console.log(validatePIN("1111"), true, "Wrong output for '1111'");
console.log(validatePIN("123456"), true, "Wrong output for '123456'");
console.log(validatePIN("098765"), true, "Wrong output for '098765'");
console.log(validatePIN("000000"), true, "Wrong output for '000000'");
console.log(validatePIN("123456"), true, "Wrong output for '123456'");


console.log('-----------------------------------------------');
/*

https://www.codewars.com/kata/578aa45ee9fd15ff4600090d/train/javascript

You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.


Examples

[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/


function sortArray(array) {
    console.log(array);

    g = 0;
    for (let i = 0; i < array.length; i++) {
        for (let y = g++; y < array.length; y++) {
            if (array[i] > array[y] && array[i]) {
                temp = array[y];
                array[y] = array[i];
                array[i] = temp;
            }
        };
    }

    return array;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);



console.log('-----------------------------------------------');
/*
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.


https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}
*/
function getCount(str) {
    let count = 0;
    for (i = 0; i < str.length; i++) {
        if (str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u') count++;
    }
    return count;
}



console.log(getCount("abracadabra"), 5);


console.log('-----------------------------------------------');
/*
https://www.codewars.com/kata/558fc85d8fd1938afb000014/train/javascript


Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.


function sumTwoSmallestNumbers(numbers){  
  numbers = numbers.sort(function(a, b){return a - b; });
  return numbers[0] + numbers[1];
};

*/

function sumTwoSmallestNumbers(numbers) {
    //Code here
    g = 0;
    for (let i = 0; i < numbers.length; i++) {
        for (let y = g++; y < numbers.length; y++) {
            if (numbers[i] > numbers[y]) {
                temp = numbers[y];
                numbers[y] = numbers[i];
                numbers[i] = temp;
            }
        };
    } return numbers[0] + numbers[1];

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, "Sum should be 16");


console.log('-----------------------------------------------');

/*

https://www.codewars.com/kata/5262119038c0985a5b00029f/train/javascript

Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

Requirements

You can assume you will be given an integer input.
You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

Example

// is_prime(1)  false 
// is_prime(2)  true  
// is_prime(-1) false 


function isPrime(num) {
  if (num < 2) return false;
  const limit = Math.sqrt(num);
  for (let i = 2; i <= limit; ++i) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

*/

function isPrime(num) {
    //TODO
    let s = 0;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) { s = 1; s += s; }
    }
    if (s !== 0 || num < 2) return false;
    else if (s == 0) return true;


}

console.log(isPrime(0), false, "0 is not prime");
console.log(isPrime(9), true, "9 is not prime");
console.log(isPrime(1), false, "1 is not prime");
console.log(isPrime(2), true, "2 is prime");
console.log(isPrime(73), true, "73 is prime");
console.log(isPrime(75), false, "75 is not prime");
console.log(isPrime(-1), false, "-1 is not prime");



console.log('-----------------------------------------------');

/*
https://www.codewars.com/kata/52efefcbcdf57161d4000091/train/javascript

The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.





  function count (string) {  
    // The function code should be here
    for ( i = 0 ; i<string.length;i++)
    console.log(string[i]);




    //return {};
  }

  console.log(count("aba"), { a: 2, b: 1 }); 
  console.log(count(""), {});
   */


/*
https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

Examples

  16  -->  1 + 6 = 7
 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

//parseInt(String(n).split('').sort().reverse().join(''))

*/

function digitalRoot(n) {
    // ...
    const strN = [];
    const strN1 = [];
    let str = String(n).split('');
    for (let i = 0; i < str.length; i++) {
        strN.push(parseFloat(str[i]));
        n = strN.reduce(function (str, n) {
            return str + n;
        });
    }
    if (n > 9) {
        str = String(n).split('');
        for (let i = 0; i < str.length; i++) {
            strN1.push(parseFloat(str[i]));
            n = strN1.reduce(function (str, n) {
                return str + n;
            });
        } return n

    } else return n;
}


console.log(digitalRoot(123), 6);
console.log(digitalRoot(10), 1);
console.log(digitalRoot(11), 2);
console.log(digitalRoot(456), 6);

console.log('-----------------------------------------------');


/*
https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39/train/javascript


his time we want to write calculations using functions and get the results. Let's have a look at some examples:

seven(times(five())); // must return 35
four(plus(nine())); // must return 13
eight(minus(three())); // must return 5
six(dividedBy(two())); // must return 3
Requirements:

There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:


*/


function zero() { }
function one() { }
function two() { }
function three() { }
function four() { }
function five() { }
function six() { }
function seven() { }
function eight() { }
function nine() { }

function plus() { }
function minus() { }
function times() { }
function dividedBy() { }



console.log(seven(times(five())), 35);
console.log(four(plus(nine())), 13);
console.log(eight(minus(three())), 5);
console.log(six(dividedBy(two())), 3);


console.log('-----------------------------------------------');


/*


https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.

If you liked this kata, check out part 2!!



*/


console.clear();

function expandedForm(num) {
    // Your code here
    let temp = 0;
    const strTemp = [];
    let count = 10;
    let str = String(num);
    if (str.length == 1) {
        num = '' + num;
        return num;
    }
    else {
        for (let i = 1; i <= str.length; i++) {
            if (num % 10 !== 0) {
                temp = num - Math.floor(num / count) * 10;
                num = num - temp;
                strTemp.push(temp);
            }
            else {
                count = count * 10;
                temp = num - Math.floor(num / count) * count;
                num = num - temp;
                if (temp !== 0) {
                    strTemp.push(temp);
                }

            }
        }
    }

    // const strNum = strTemp.sort(function(a,b){
    //             if(a<b){return 1}
    //             if(a===b){return 0}
    //             return -1;
    //     });



    for (i = 0; i < strTemp.length; i++) {
        if (str[i] === ',') {
            str[i] == "'+'";
            let strNew = '' + strTemp[i].toString();
        }
    };



    //const ats = strN.replaceAll(',',' + ');

    console.log(strTemp);
    //ats = strN.length;
    //console.log(ats);

    //return ats;

}
console.log(expandedForm(1010256), '101256');
console.log(expandedForm(11256), '101256');
console.log(expandedForm(12), '10 + 2');
console.log(expandedForm(121), '100 + 20 + 1');
console.log(expandedForm(1210), '1000 + 200 + 10');
console.log(expandedForm(42), '40 + 2');
console.log(expandedForm(70304), '70000 + 300 + 4');



/*

CDebug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.

Example


https://www.codewars.com/kata/563d59dd8e47a5ed220000ba/train/javascript

123  => 6
223  => 7
1337 => 14

function getSumOfDigits(integer) {
  
 return Array.from(String(integer), Number).reduce((a,b) => a + b)
}



function getSumOfDigits(integer) {
  return (integer+'').split('').reduce((sum, d) => sum + (+d || 0), 0);
}

*/

console.log('-----------------------------------------------');
function getSumOfDigits(integer) {
    let sum = 0;
    let digits =  integer.toString();
   
    for(let i = 0; i < digits.length; i++) 
    {
        sum += parseInt(digits[i]); 
    }
    return sum;
  }


console.log(getSumOfDigits(123), 6, 'Incorrect answer for integer=123');
console.log(getSumOfDigits(223), 7, 'Incorrect answer for integer=223');
console.log(getSumOfDigits(0), 0, 'Incorrect answer for integer=0');


console.log('-----------------------------------------------');


/*
In John's car the GPS records every s seconds the distance travelled from an origin (distances are measured in an arbitrary but consistent unit). For example, below is part of a record with s = 15:

x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]
The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:

with the above data your function gps(s, x)should return 74

Note

With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.

*/

console.log('-----------------------------------------------');




/*
https://www.codewars.com/kata/56484848ba95170a8000004d/train/javascript


The sections are:

0.0-0.19, 0.19-0.5, 0.5-0.75, 0.75-1.0, 1.0-1.25, 1.25-1.50, 1.5-1.75, 1.75-2.0, 2.0-2.25
We can calculate John's average hourly speed on every section and we get:

[45.6, 74.4, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0, 60.0]
Given s and x the task is to return as an integer the *floor* of the maximum average speed per hour obtained on the sections of x. If x length is less than or equal to 1 return 0 since the car didn't move.

Example:

with the above data your function gps(s, x)should return 74

Note

With floats it can happen that results depends on the operations order. To calculate hourly speed you can use:

 (3600 * delta_distance) / s.



 var x = [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61];
    var s = 20;
    var u = 41;
    testing(gps(s, x), u);
    x = [0.0, 0.11, 0.22, 0.33, 0.44, 0.65, 1.08, 1.26, 1.68, 1.89, 2.1, 2.31, 2.52, 3.25];
    s = 12;
    u = 219;
    testing(gps(s, x), u);
    x = [0.0, 0.18, 0.36, 0.54, 0.72, 1.05, 1.26, 1.47, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36, 3.6, 3.84];
    s = 20;
    u = 80;
    testing(gps(s, x), u)
    x = [0.0, 0.01, 0.36, 0.6, 0.84, 1.05, 1.26, 1.47, 1.68, 1.89, 2.1, 2.31, 2.52, 2.73, 2.94, 3.15];
    s = 14;
    u = 90;
    testing(gps(s, x), u);
    x = [0.0, 0.02, 0.36, 0.54, 0.72, 0.9, 1.08, 1.26, 1.44, 1.62, 1.8];
    s = 17;
    u = 72;
    testing(gps(s, x), u);
    x = [0.0, 0.24, 0.48, 0.72, 0.96, 1.2, 1.44, 1.68, 1.92, 2.16, 2.4];
    s = 12;
    u = 72;
    testing(gps(s, x), u);
    x = [0.0, 0.02, 0.44, 0.66, 0.88, 1.1, 1.32, 1.54, 1.76];
    s = 17;
    u = 88;
    testing(gps(s, x), u);
    x = [0.0, 0.2, 0.4, 0.6, 0.8, 1.0, 1.32, 1.54, 1.76, 1.98, 2.2, 2.42, 2.76, 2.99, 3.22, 3.45];
    s = 16;
    u = 76;
    testing(gps(s, x), u)
    x = [0.0, 0.01, 0.36, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25, 2.5, 2.75, 3.0, 3.25, 3.5, 3.75, 4.0, 4.25, 4.5, 4.75];
    s = 17;
    u = 82;
    testing(gps(s, x), u);
    x = [0.0, 0.2, 0.4, 0.69, 0.92, 1.15, 1.38, 1.61, 1.92, 2.16, 2.4, 2.64, 2.88, 3.12, 3.36];
    s = 19;
    u = 58;
    testing(gps(s, x), u);
    x = [];
    s = 19;
    u = 0;
    testing(gps(s, x), u);
    x = [0.0];
    s = 19;
    u = 0;
    testing(gps(s, x), u);


*/

function gps(s, x) {
    // your code
    let distTemp = [];
    let speedMax = 0;
    let count = 0; 
    distTemp[0]=speedMax;
    for (let i = 1 ; i < s.length ; i++){
       
            distTemp[i] = (s[i] - s[count])*3600/x;
            count++;
            if ( distTemp[i] > speedMax ){
                speedMax = Math.round(distTemp[i-1]);
            console.log(speedMax);
            };
            if ( distTemp[i] > speedMax ){
                speedMax = Math.round(distTemp[i-1]);
            console.log(speedMax);
            };
        }
      
   if (speedMax < 1) return 0;
 return (speedMax);

}
console.log('-----------------------------------------------');        
    

//u = 58;
let x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
let s = 15;

console.log(gps(x,s));
//console.log(s[i]);


console.log('-----------------------------------------------');        

/*

https://www.codewars.com/kata/585d7d5adb20cf33cb000235/train/javascript

DESCRIPTION:

There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

*/
function findUniq(arr) {
let numb;
let count = 0;
    for (let i = 1 ; i < arr.length ; i++){
        numb = arr[0];
            if ( numb != arr[i] ){
                numb = arr[i];
            } //else numb = arr[i]; 
        
    }return numb;
  }



console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 1, 0, 0 ]), 1);
console.log(findUniq([ 0, 1, 0 ]), 1);
console.log(findUniq([ 0, 0, 1 ]), 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]), 10);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]), 2);
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]), 0.55);



