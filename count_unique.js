//Problem Statement - Given a list of numbers from which find the count of unique numbers.
// Explanation: https://www.youtube.com/watch?v=rs75oZD8lW4&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=4&ab_channel=TechnicalSuneja

/* 
Logic: 
1. Firstly, sort the array as it will work on the sorted array only.
2. We have two variables i and j with values 0 and 1. We will iterate over the sorted array and compare these two variable on the array indices. 
3. If the values at the ith and the jth indices are same then the loop will continue, meaning we have the unique numbers till now but if they differ then we will do following two things:
    [A] increment the value of i as we have the next unique value inside our sorted array.
    [B] place the value at the current jth index to the new ith index so as to create an array with unique value only.

     i  j
    [1, 2, 2, 4, 5, 6, 6, 6, 7] -> since both are unique we will increment j and i as well as well as assign the value at j to the value at new i.
        i  j
    [1, 2, 2, 4, 5, 6, 6, 6, 7] -> increase j and keep i at same place as both array[i] = array[j]
        i     j
    [1, 2, 2, 4, 5, 6, 6, 6, 7] -> increase i and assign it a new value that is the value at j
           i  j
    [1, 2, 4, 4, 5, 6, 6, 6, 7] -> increase j and compare values at i and j
           i     j                            i  j                              i  j
    [1, 2, 4, 4, 5, 6, 6, 6, 7] ->  [1, 2, 4, 5, 5, 6, 6, 6, 7] -> [1, 2, 4, 5, 6, 6, 6, 6, 7] -> 
                 i     j                        i        j                         i        j
    [1, 2, 4, 5, 6, 6, 6, 6, 7] -> [1, 2, 4, 5, 6, 6, 6, 6, 7] ->  [1, 2, 4, 5, 6, 7, 6, 6, 7]

    At this point the value of i will be 5 as it started from 0 so in return we need actual count so we will add 1 to i and will return the same.

 */
let arr = [1, 2, 2, 3, 4, 4, 4, 4, 5, 5, 8, 9, 9];

function countUnique(array) {
    if (array.length > 0) {
        let i = 0;
        for (let j = 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                i++;
                array[i] = array[j];
            }
        }
        return i+1;
    } else {
        throw new Error("Empty Array")
    }
}

const result = countUnique(arr);
console.log(result);