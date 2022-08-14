//Problem Statement - find the largest sum of some consecutive numbers.
/* 
Logic
1. check if the number is not greater than the length of the array
2. decide how many times the loop should run and that can be decided by (array.length - number) + 1
3. decide how many times the inner loop is running and that should be equal to the number (i.e. consecutive numbers)

*/

let arr = [1, 2, 44, 33, 5, 6, 7, 9, 56];

function largestSum(array, terms) {
    if (terms > array.length) {
        throw new Error("Not possible to calculate as the number of terms is greater than the array length")
    }else {
        let max = 0;
        for (let i = 0; i < (array.length - terms) + 1; i++) {
            let temp = 0;
            for (let j = 0; j < terms; j++) {
                temp += array[i + j]
            }
            if (temp > max) {
                max = temp;
            }        
        }
        return max;
    }
}

const result = largestSum(arr, 3);
console.log(result);