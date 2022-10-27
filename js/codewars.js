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

function highAndLow(numbers){
    //parseInt(String(n).split('').sort().reverse().join(''))
    //let max=[];
    //let min=[];
        let join='';
        numbers = (numbers.split(' '));
        let max=numbers[0];
        for (i = 0; i< numbers.length; i++){
            numbers[i] = parseInt(numbers[i]);
            if ( numbers[i] > max){
                max = numbers[i];
            }
        } 
        console.log(max);
        let min=numbers[0];
        for (i = 0; i< numbers.length; i++){
            if ( numbers[i] < min){
                min = numbers[i];
            }
        } 
        console.log(min);
        join =max+' '+min;

     console.log(join);

  }


  console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
  console.log(highAndLow("1 2 3"), "3 1");

  console.log('-----------------------------------------------');

  var number = function(busStops){
    // Good Luck!


  }




   console.log(([[10,0],[3,5],[5,8]]),5);
   console.log(([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]),17);
   console.log(([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]),21);
   console.log(number([[0,0]]),0);

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


   function validatePIN (pin) {
    //return true or false
       console.log(pin);
       let position = pin.search(".");
       console.log(position);
        if( position == -1) {return false;}
        if (pin == '0000' || pin == '000000') { return true; }
           if (pin.length == 4){
            pin = parseInt(pin);
                if ( pin % 1 == 0 && pin > 0) {return true;}};
            if (pin.length == 6){
            pin = parseInt(pin);
                if ( pin % 1 == 0 && pin > 0) {return true;}
            }
           
           
    return false
    }
    // conslole.log(validatePIN(0000000));
    console.log(validatePIN("123456"),false, "Wrong output for '12'");
    console.log(validatePIN("12.0"),false, "Wrong output for '123'");
    console.log(validatePIN("12345"),false, "Wrong output for '12345'");
    console.log(validatePIN("1234567"),false, "Wrong output for '1234567'");
    console.log(validatePIN("-1234"),false, "Wrong output for '-1234'");
    console.log(validatePIN("1.234"),false, "Wrong output for '1.234'");
    console.log(validatePIN("-1.234"),false, "Wrong output for '-1.234'");
    console.log(validatePIN("000000"),false, "Wrong output for '00000000'");    
    console.log(validatePIN("a234"),false, "Wrong output for 'a234'");
    console.log(validatePIN(".234"),false, "Wrong output for '.234'");
    console.log(validatePIN("1234"),true, "Wrong output for '1234'");
    console.log(validatePIN("0000"),true, "Wrong output for '0000'");
    console.log(validatePIN("1111"),true, "Wrong output for '1111'");
    console.log(validatePIN("123456"),true, "Wrong output for '123456'");
    console.log(validatePIN("098765"),true, "Wrong output for '098765'");
    console.log(validatePIN("000000"),true, "Wrong output for '000000'");
    console.log(validatePIN("123456"),true, "Wrong output for '123456'");
   
   
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
            if (array[i] > array[y] && array[i] ) {
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
  console.log(sortArray([]),[]);



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
    for (i = 0 ; i<str.length; i++){
        if(str[i] == 'a' ||str[i] == 'e' ||str[i] == 'i' ||str[i] == 'o' ||str[i] == 'u')count++;
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
    }return numbers[0]+numbers[1];

}

console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13 , "Sum should be 13");
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6 , "Sum should be 6");
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10 , "Sum should be 10");
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24 , "Sum should be 24");
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16 , "Sum should be 16");


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
    let s=0;
    for (let i=2;i<=Math.sqrt(num);i++){
        if (num%i==0){s=1;s+=s;}}
        if (s!==0||num<2)return false;
          else if (s==0)return true;
     

  }

  console.log(isPrime(0),  false, "0 is not prime");
  console.log(isPrime(9),  true, "9 is not prime");
  console.log(isPrime(1),  false, "1 is not prime");
  console.log(isPrime(2),  true, "2 is prime");
  console.log(isPrime(73), true, "73 is prime");
  console.log(isPrime(75), false, "75 is not prime");
  console.log(isPrime(-1), false, "-1 is not prime");



  console.log('-----------------------------------------------');
