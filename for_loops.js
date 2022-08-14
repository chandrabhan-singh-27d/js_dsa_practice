let string = "hello world!";


//The for...of loop gives the value of the elements of an array
for (let chars of string){
    console.log(chars);
}


//The for...in loop gives the index of the elements of the array
for (let chars in string){
    console.log(chars);
}

//while mapping a string to an object if we need the chars as the keys we should use the for...of loop and assign the numbers to them, that's what we are doing while deciding if two strings are anagram or not.