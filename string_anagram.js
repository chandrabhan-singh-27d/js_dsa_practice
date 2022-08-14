//An anagram of a string is another string that contains the same characters, only the order of characters can be different. 

/* We take 2 different strings do following operations: 
1. Compare the length of the strings, if the length of the strings differs then they are not anagram of each other.
2. Then we map the letters and check whether the same number of each letter is present in both the strings, if so they are anagram otherwise not.
    e.g. "hello" and "lleoh" are anagram.
    e.g. mapping - {h: 1, e: 1, l: 2, o: 1}
 */

/* 
Object logic - As we know that we don't have the push method to add the elements to an object, we apply a different method that is assigning key and value pair to the objects. 
 - When we are iterating over the string using the for...of loop it virtually creates an array and store the chars in an array. 
- The for...of loop gives the value of those elements while the for...in gives the index number of those stored chars.
- when we write charObj[chars] it means that the key being each chars of the string.
- If charObj[chars] is not present in the object assign it a value otherwise increment the value.


let string = "hello"
let charObj = {};
for (let chars of string){
    charObj[chars] = "value"
    console.log(charObj[chars])
} 
*/

/* 
Why decrement(--) for second string?
Beacuse, in the first place we checked for the length of both the strings. Then on, we assigned value to the letters of the first string and we mapped the string as an object with the number of instances of the letters. Now, we need to check if the exact same letters are present in the second string with the same number of repetitions or not. So, for that, we will first check if the charObj contains letters of the second string or not, if not then return false. If yes, then we need to check the number of times those letters are present in the second string and for that we will need to decrease the value of the letters from charObj, once it reaches zero and if there is still a letter present in the second string it means that the map object we created does not sync with the chars of string2 and hence will return false, else will return true. 
*/

// 1st Method - check Anagram of a string
let firstString = "race", secondString = "care";
let charObj = {};

function checkAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    for (let chars of string1) {
        if (!charObj[chars]) {
            charObj[chars] = 1;
        } else {
            charObj[chars]++
        }
    }
    for (let items of string2) {
        if(!charObj[items]){
            return false;
        } 
        charObj[items]--
    }
    return true;
}

console.log(checkAnagram(firstString, secondString)); 

//Refactor

function checkAnagram(string1, string2) {
    if (string1.length !== string2.length) {
        return false;
    }
    for (let chars of string1) {
        // charObj[chars] = charObj[charObj] + 1 || 1; //if key is present, increment the value otherwise assign 1 as value
        charObj[chars] = (charObj[chars] || 0) + 1; //if key is present, increment the value otherwise assign 0 as value and then increment.
    }
    for (let items of string2) {
        if(!charObj[items]){
            return false;
        } 
        charObj[items]--
    }
    return true;
}

console.log(checkAnagram(firstString, secondString)); 

//2nd Method

function isAnagram(str1, str2) {
    if(string1.length !== string2.length){
        return false
    } 
    let newString1 = str1.split('').sort().join();
    let newString2 = str2.split('').sort().join();
    if (newString1 === newString2) {
        return true
    }
}

console.log(isAnagram(string1, string2));