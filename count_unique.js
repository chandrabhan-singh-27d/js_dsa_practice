//Problem Statement - Given a list of numbers from which find the count of unique numbers.
// Explanation: https://www.youtube.com/watch?v=rs75oZD8lW4&list=PL_HlKez9XCSOi5thYDzipbJ2pEdzop7vx&index=4&ab_channel=TechnicalSuneja

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