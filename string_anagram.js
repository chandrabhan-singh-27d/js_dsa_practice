//An anagram of a string is another string that contains the same characters, only the order of characters can be different. 

/* We take 2 different strings do following operations: 
1. Compare the length of the strings, if the length of the strings differs then they are not anagram of each other.
2. Then we map the letters and check whether the same number of each letter is present in both the strings, if so they are anagram otherwise not.
    e.g. "hello" and "lleoh" are anagram.
    e.g. mapping - {h: 1, e: 1, l: 2, o: 1}
 */

// 1st Method
let firstString = "race", secondString = "care";

let charArray = {};
for (let chars of firstString){
    charArray[chars] = "value"
    console.log(charArray[chars])
}

// function checkAnagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false;
//     }
//     for (let chars of string1) {
//         if (!charArray[chars]) {
//             charArray[chars] = 1;
//         } else {
//             charArray[chars]++
//         }
//     }
//     for (let items of string2) {
//         if(!charArray[items]){
//             return false;
//         } 
//         charArray[items]--
//     }
//     return true;
// }

// console.log(checkAnagram(firstString, secondString)); 

// //Refactor

// function checkAnagram(string1, string2) {
//     if (string1.length !== string2.length) {
//         return false;
//     }
//     for (let chars of string1) {
//         // charArray[chars] = charArray[charArray] + 1 || 1;
//         charArray[chars] = (charArray[chars] || 0) + 1;
//     }
//     for (let items of string2) {
//         if(!charArray[items]){
//             return false;
//         } 
//         charArray[items]--
//     }
//     return true;
// }

// console.log(checkAnagram(firstString, secondString)); 

// //2nd Method

// function isAnagram(str1, str2) {
//     if(string1.length !== string2.length){
//         return false
//     } 
//     let newString1 = str1.split('').sort().join();
//     let newString2 = str2.split('').sort().join();
//     if (newString1 === newString2) {
//         return true
//     }
// }

// console.log(isAnagram(string1, string2));