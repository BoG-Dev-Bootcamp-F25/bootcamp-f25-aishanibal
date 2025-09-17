/**
 * Let's do some coding warm up to get you started with JS!
 *
 */

/**
 * Task 1: Create a function that takes an integer as input and returns the
 * letter grade (as a string) corresponding to it. Return "INVALID" if the
 * integer is outside the range [0, 100].
 *
 * Letter grade:
 * A = 90 -> 100
 * B = 80 -> 89
 * C = 70 -> 79
 * D = 60 -> 69
 * F = anything < 60
 */
function toLetterGrade(numGrade) {
  // TODO
  if (numGrade >= 90 && numGrade <= 100) {
    return "A";
  } else if (numGrade >= 80 && numGrade <= 89) {
    return "B";
  } else if (numGrade >= 70 && numGrade <= 79) {
    return "C";
  } else if (numGrade >= 60 && numGrade <= 69) {
    return "D";
  } else if (numGrade < 60 && numGrade >= 0) {
    return "F";
  } else {
    return "INVALID";
  }
}

/**
 * Task 2: Create a function that takes in an array of integers and returns a
 * new array containing only even elements from the original array. The
 * ordering of the remaining elements should be the same as the original array.
 *
 * Example: [9, 3, 4, 1, 2, 0] --> [4, 2, 0]
 */
function getEvenElements(array) {
  // TODO
  let evenElements = []
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenElements.push(array[i]);
    }
  }
  return evenElements;
}

/**
 * Task 3: Create a function that takes in a sentence and returns the LENGTH
 * of the longest word in that sentence. No punctuation will appear in the
 * sentence.
 *
 * Hint: The .split() method might be useful here
 *
 * Example: "I love Bits of Good" --> 4
 */
function findLongestWord(string) {
  // TODO
  let max = 0;
  let words = string.split(" ");
  for (let word of words) {
    if (word.length > max) {
      max = word.length;
    }
  }
  return max;
}

/**
 * Task 4: Create a function that takes in 2 objects and return an object that 
 * is the combination of the 2
 *
 * Example:
    {
        name: "Casey",
        age: 10
    }
    {
        breed: "Pomeranian",
        friendly: false
    }
    -->
    {
        name: "Casey",
        age: 10,
        breed: "Pomeranian",
        friendly: false
    } 
 */
function combineObjects(object1, object2) {
  // TODO
  let object = {}
  
  // Copy all properties from object1
  for (let key in object1) {
    object[key] = object1[key];
  }
  
  // Copy all properties from object2
  for (let key in object2) {
    object[key] = object2[key];
  }
  
  return object;
}

/**
 *  Task 5: Create a function that takes an array as an argument and returns
 *  the reverse array.
 *
 *  DO NOT USE THE .reverse() METHOD!!
 *
 *  Example: [1, 2, 3] -> [3, 2, 1]
 */
function reverseArr(array) {
  // TODO
  let reverse = []
  for (let i = array.length - 1; i >= 0; i--) {
    reverse.push(array[i])
  }
  return reverse
}

// DO NOT EDIT BELOW THIS LINE -- the code is for testing purposes only!
// To test your code, run `node warmUp.js` in your terminal

import {
  testToLetterGrade,
  testGetEvenElements,
  testFindLongestWord,
  testCombineObjects,
  testReverseArr,
} from "./warmUpTests.js";

console.log("TEST RESULTS:");
testToLetterGrade(toLetterGrade);
testGetEvenElements(getEvenElements);
testFindLongestWord(findLongestWord);
testCombineObjects(combineObjects);
testReverseArr(reverseArr);
