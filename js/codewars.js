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
function duplicateCount(text) {
    let lengthtext = text.length;
    let count = 0;
    const usingArrayFrom = Array.from(text);
    //ch=1;
    //console.log(usingArrayFrom);
    if (lengthtext===0){return 0;};
    if (lengthtext>0){
    for (i = 0; i < text.length; i++) {
        for (y = i + 1; y < text.length-1; y++) {
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