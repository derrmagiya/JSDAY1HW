// Question 1

let dog_string = "Hello Max, my name is Dog, and I have purple eyes!";
let dog_names = ["Max","HAS","PuRple","dog"];

function findWords(string, names) {
  for (let i = 0; i < names.length; i++) {
    if (string.toLowerCase().includes(names[i].toLowerCase())) {
      console.log("Matched " + names[i]);
    }
  }
  if (!string.toLowerCase().includes(names.join(",").toLowerCase())) {
    console.log("No Matches");
  }
}

findWords(dog_string, dog_names);

// Question 2

let arr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"];

function replaceEvens(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    arr.splice(i, 1, "even index");
  }
  return arr;
}

console.log(replaceEvens(arr));

// Question 3 (codewars)

// Create a function that accepts a string and a single character, and returns an integer of the count of 
// occurrences the 2nd argument is found in the first one.If no occurrences can be found, 
// a count of 0 should be returned.

// ("Hello", "o")  ==>  1
// ("Hello", "l")  ==>  2
// ("", "z")       ==>  0
// str_count("Hello", 'o'); // returns 1
// str_count("Hello", 'l'); // returns 2
// str_count("", 'z'); // returns 0
// Notes
// The first argument can be an empty string
// In languages with no distinct character data type, the second argument will be a string of length 1

function str_count(str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === char) {
        count++;
      }
    }
    return count;
  }
  
  console.log(str_count("Hello", 'o'));
  console.log(str_count("Hello", 'l')); 
  console.log(str_count("", 'z'));

  // Question 4

  // Write a function that takes an array of numbers and returns the sum of the numbers. 
  // The numbers can be negative or non-integer. If the array does not contain any numbers then you should 
  // return 0.

// Examples
// Input: [1, 5.2, 4, 0, -1]
// Output: 9.2

// Input: []
// Output: 0

// Input: [-2.398]
// Output: -2.398

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.
// What We're Testing
// We're testing basic loops and math operations. This is for beginners who are just learning loops and math operations.
// Advanced users may find this extremely easy and can easily write this in one line.

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        sum += arr[i];
      }
    }
    return sum;
  }
  
  console.log(sumArray([1, 5.2, 4, 0, -1]));   
  console.log(sumArray([]));                   
  console.log(sumArray([-2.398]));             