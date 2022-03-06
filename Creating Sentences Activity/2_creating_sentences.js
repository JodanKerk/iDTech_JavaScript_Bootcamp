// TODO: Create an array variable called "words" with the following elements: 'This', 'is', 'JavaScript', 'Bootcamp!'
// YOUR CODE GOES HERE
let words = ['This', 'is', 'JavaScript', 'Bootcamp!'];

// TODO: Create an empty string variable called "sentence".
// YOUR CODE GOES HERE
let sentence = "";

// TODO: 
// 1. Create a function called "createSentence" that takes an array as an argument.
// 2. In the function use a for loop to iterate through each word element of the array.
// 3. Add each word to the "sentence" variable.
// 4. Return the "sentence".
// YOUR CODE GOES HERE
function createSentence (userinput) {
    for (let w=1; w<=userinput.length; w++) {
        sentence += userinput[w-1];
        sentence += " ";
    }
    return sentence;
}

// TODO: Call the function "createSentence" using the console.log method.
// YOUR CODE GOES HERE
console.log (createSentence (words));