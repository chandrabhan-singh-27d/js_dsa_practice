//check sum zero for array [-5, -4, -2, 0, 1, 3, 4, 6]

let arr = [-5, -4, -2, 0, 1, 3, 4, 6];
let result;

//good-old combo of function and for loop

function getSumZeroPair(array) {
    for(let number of array){
        // console.log("outer loop");
        for (let j = 1; j < array.length; j++) {
            // console.log("inner loop");
            if (number + array[j] === 0) {
                return [number, array[j]]
            }
        }
    }
}
const getResult = getSumZeroPair(arr);
console.log(getResult); 

// ES6 syntax

arr.forEach(number => {
    let self = this;
    // console.log("outer loop");
    for (let i = 1; i < arr.length; i++){
        // console.log("inner loop");
        if (number + arr[i] === 0) {
            return self.result = [number, arr[i]];
        }
    }
});
console.log(this.result);


// But there is a problem with the above solution and that is the time complexity being quadratic O(n^2), meaning the for loop is running 2 times. The first loop is traversing through the array and looping for each element of the array and comparing the element with each other element. We can optimize this code as follows.

//Optimized code - in this case one element from the left and one from the right is taken and compared, and as per the conditions, increment and the decrement is done. The complexity will be linear in this case and hence the solution would be less expensive.

function getSumZeroPair(array) {
    let left = 0, right = array.length-1;
    while (left < right) {
        sum = array[left] + array[right];
        if (sum === 0) {
            return [array[left], array[right]]
        }else if(sum > 0){
            right--;
        } else{
            left++;
        }
    }
}
let SumPair = getSumZeroPair(arr);
console.log(SumPair);