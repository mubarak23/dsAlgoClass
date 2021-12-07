function charCount(str) {
  let objStr = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      objStr[char] = ++objStr[char] || 1;
      //   if (objStr[char] > 0) {
      //     objStr[char]++;
      //   } else {
      //     objStr[char] = 1;
      //   }
    }
  }
  return objStr;
}

// console.log(charCount("hello world"));

// write a function called sumZero twhich accept a sorted array of integers,
// the function should find the first pair whose sum is zero
// return the array which includes both value that sum up to zero
//  or undefined if a pair does not exist
function zeroSum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// console.log(zeroSum([-5, -4, -3, -2, -1, 0, 1, 2, 4]));

// 3
// write a function called countUniqueValues which accept a sorted array and
// count all unique values in the array
// there can be negative numbers in the array,
// but it will alway be sorted out.
// solution
// create a counter = 0
// loop over and pick the first element
// loop over again
// compare the value in loop 1 and loop 2
// if the are equal, increase the counter by one
function uniqueCount(arr) {
  let d = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[d] !== arr[i]) {
      d++;
      arr[d] = arr[i];
    }
    console.log(d, i);
    // for (let j; j < arr.length; j++) {
    //   if (arr[i] !== arr[j]) {
    //     d = d + 1;
    //   }
    // }
  }
  return d;
}

// console.log(uniqueCount([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));

function countUniqueValues(orderedArr) {
  let i = 0;
  let j = 1;
  if (orderedArr.length == 0) {
    return 0;
  } else {
    while (j < orderedArr.length) {
      if (orderedArr[i] == orderedArr[j]) {
        j++;
      } else {
        ++i;
        orderedArr[i] = orderedArr[j];
        j++;
      }
    }
  }

  return i + 1;
}
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 13]));

function anotherUniqueCount(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
    console.log(i, j);
  }
  return i + 1;
}

// console.log(anotherUniqueCount([1, 1, 1, 2, 2, 3, 4, 5, 5, 5, 6, 7]));

// slding window person
// using when we have a set of array or string
// and we are looking for a subset of that number that is continous
//  4
// write a function that find the longest sequence of unique character in a string
// 5
// write a function called maxSubArraySum which accept an array of ineger and a number
// called n
// the function should calculate the maximum sum of n, consecutive element in an array

// divide and concur
// given a sorted array of ineger
// write a function called search, accept a value and return the index where
// the value pass to the function is located,
// if the value is not found return -1
function search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;
}

// console.log(search([1, 2, 3, 4, 5, 14, 15, 16], 4));

// Given an array of integers and a target number,
// return the two integers that add up to the target number
function TwoSum(array, sum) {
  let nums = [];
  for (let x in array) {
    for (let y in array) {
      if (array[x] + array[y] === sum) {
        nums.push([array[x], array[y]]);
      }
    }
  }
  return nums;
}

// console.log(TwoSum([2, 3, 4, 5, 6, 7], 6));

// let bruteForceTwoSum = (array, sum) => {
//   let nums = [];

//   for (let x in array) {
//     for (let y in array) {
//       if (array[x] + array[y] === sum) {
//         nums.push([array[x], array[y]]);
//       }
//     }
//   }
//   return nums;
// };

// let array = [2, 3, 4, 3, 6, 7];
// let sum = 6;

// console.log(bruteForceTwoSum(array, sum));

// "orgId": "1bc6db53-e215-4e48-ac9e-5c35ddc1366b",
// "orgId": "2bc5db53-e215-5e48-ac9e-5c35ddc1366b",

// recursion use case
// 1. JSON.perse / JSON.stringify
// 2. Document.getElementById and DOM traversal algorithms
// 3. Object Traversal
// as function are invoke, they are added to the top of the call stack
//  they are pop out one at a time at the top of the call stack

// Recursion
// Any function that uses
// Recursion you must remember that there needs to be a base condition to stop the recursion
// If the base case is not reached or defined then
// there will be stack overflow due to memory limitations.

// #Algorithms: #Recursion

// Recursion is a function that called itself,

// Two Essential Parts of the #Recursion function are

// 1. Base Case

// 2. Different Input

// When #Recursion is used, we basically Invoke the same function with different input until the base case is reached.

// The base case is the point where recursion stops.

// The base case must of the time involve a condition

// For any function that uses Recursion, you must remember that there needs to be a base condition to stop the recursion If the base case is not reached or defined then there will be stack overflow due to memory limitations.

// #Recursion #algorithm #datastructures #basecase #different #Input

function countDown(num) {
  if (num <= 0) {
    console.log("All Done");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

// countDown(5);

function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// console.log(sumRange(4));

// a classical example of recursion is factorial
function factorial(num) {
  let total = 1;
  for (let i = num; i > 0; i--) {
    total *= i;
  }
  return total;
}

function factorialRecur(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorialRecur(num - 1);
}

// console.log(factorial(6));
// console.log(factorialRecur(6));

// design pattern for recursion
// Helper method Recursion

// https://www.tutorialspoint.com/tribonacci-series-in-javascript

// Climbing Stairs
// https://stackoverflow.com/questions/61605286/leetcode-70-climbing-stairs-how-to-speed-up-my-solution

// https://javascript.plainenglish.io/javascript-algorithm-and-data-structure-challenge-implementing-selection-sort-c4e1f21be9d2

// https://dev.to/rembrandtreyes/let-s-solve-leetcode-fibonacci-number-4cpj

// repeat the question
// ask question to clerify what you don't understand
// think about input and output
// brainstorm the solution i.e think in term of time and space complexity
// pick a solution and implement it.
// verify your work, ensure the plan you put is what is working.
// Anthonydmays

// Search Algorithms
// Linear search
// Linear search is a very simple search algorithm. In this type of search,
// a sequential search is made over all items one by one.
// Every item is checked and if a match is found then that particular item is returned,
// otherwise the search continues till the end of the data collection.
// visit one item at a time starting from the beginning, or start at the
// end and move backward
// we are moving through the array at at a interval of time, one item at a time,
// checking every single thing.
// check every element in an array, one at a time,
// Given an array, the simplest way to search for an value is to look at every element
// in the array and check if it's the value we want.
// use case of linear seach in javaScript include indexOf, includes, find, findIndex
//  Time complexity of linear seach is 0^N
// https://dev.to/mdqayyumshareef/linear-search-algorithm-javascript-mb4
// https://www.tutorialspoint.com/data_structures_algorithms/linear_search_algorithm.htm

function linearSearch(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      return arr[i];
    }
  }
  return -1;
}

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 8));
// Binary Search
// eliminate have of the remaining element at a time
// Binary search only works on sorted array.
// There has to be an order to the array we searching through
// Binary Search follow the problem solving pattern of divide and conquer
// we can implent binary search recursively or iteratively

// Binary Search Pseudocode
// function accept sorted array and a value
// create a left pointer at the start of the array and
// right pointer at the end of the array(arr.length - 1)
// loop where the left pointer come before the right pointer
// A. create a pointer in the middle
// 1. if you find the value you want, return the index
// 2. if the value is too small, move to the left pointer up.
// 3. ifthe value is too big move to the right pointer down
// 4. if you never find the value, return -1
function binarySearch(sortArr, elem) {
  let start = 0;
  let end = sortArr.length - 1;
  let middle = Math.floor((start + end) / 2);
  while (sortArr[middle] !== elem && start <= end) {
    console.log(start, end, middle);
    if (elem < sortArr[middle]) {
      end = middle - 1;
    } else {
      start = middle + 1;
    }
    middle = Math.floor((start + end) / 2);
  }
  console.log(start, end, middle);
  if (sortArr[middle] === elem) {
    return middle;
  }
  return -1;
}

// console.log(binarySearch([2, 4, 5, 6, 7, 12, 13, 14, 15, 18, 19, 20], 19));

// Naive String Search
// search a number of time a small string appear in a long string.
// A Straight forward involves checking pairs of characters individuals.
// Pseudocode
// Loop over the longest string
// Loop over the shortest string
// if the character does not match, break out of the inner loop
// if the character do match, keep going[
// if you complete the inner loop and find the match, increment the counter of the match
// return the counts.

function naiveSeach(long, short) {
  let count = 0;
  for (let i = 0; i < long.length; i++) {
    //  console.log(i);
    for (let j = 0; j < short.length; j++) {
      // console.log(long[i], short[j]);
      if (short[j] !== long[i + j]) {
        //console.log("BREAK");
        break;
      }
      if (j === short.length - 1) {
        //console.log("FOUND ONE");
        count++;
      }
    }
  }
  return count;
}

// console.log(naiveSeach("lord lugardlo", "lo"));

// sorting
// process of rearranging the item in a collection (i.e array or object),
// so that the item are in some kind of order
// sorting number from smallest to largest
// sorting names alphabetically
// sorting books or movies base on their release date.

// Bubble Sort
// a Sorting algorithm where the largest number bubble up to the top.
// we pick the first element in the item we want to sort and compare them
// with next item, if 1 > next, Next move up,
// first is compared with next item in the list,
// a check is done if 1>Next, if Yes, Next swap position with first item,
// the first item goes through to the end of the list until the end.
// send item goes through this flow until all the
// element are sorted according the smallest to largest.
// each element in the collection go through an iteration,
// the more iteration we do the number of element we need to iterate over drop
// as we through the amount of item we need to sort decreases.
// Many sorting algorithms involve some type of
// swapping functionality (e.g swapping numbers to put them in order )
// Bubble Sort Pseudocode
//1. Start looping from the end of the array toward the beginning with a variable called i ,
// at the end of the array toward the beginning
//2. start an inner loop with a variable called j, from the beginning until i-1
//3. if arr[j] is greater than arr[i+1], swap those two values
//4. return the sorted array

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[i], arr[j + i]);
      if (arr[j] > arr[j + 1]) {
        // swapp
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
    console.log("One Pass Completed");
  }
  return arr;
}

// bubbleSort([37, 45, 29, 8]);

// sorted optimize
function optimizeBubble(arr) {
  const swap = (arr, idx1, idx2) => {
    [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
  };
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[i], arr[j + i]);
      if (arr[j] > arr[j + 1]) {
        // swapp
        swap(arr, j, j + 1);
      }
    }
  }
  console.log("One Pass Completed");
  return arr;
}

// console.log(optimizeBubble([37, 45, 29, 8]));

// Selection sort
// place small value into sorted position  one at a time
// we move from begining to the end
// the actual sorted data is accumulating at the beginning
// we are going through the item(array) and selecting the minimum and putting them at the
// begining of the list(array)

// selection sort Pseudocode
// 1. store the first element as the smallest value you have seen so far
// 2. compare this item with the next item in the array, until you find the smallest number
// if that next value is small, we update the minimum value to be the next value
// we have save the index where that value is found
// 3. if a small number is found, designate the smaller number to the new minimun,
// and continue until the end of the array.
// 4. if minimum is not the value(index), you initially begin with, swap the two value
// 5. Repeat this with next element unitl the array are sorted out.
// loop and loop, a condition and finally a swap

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(i, j);
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
      if (i !== lowest) {
        // console.log("**********");
        // console.log(arr);
        // console.log("SWAPPING TO");
        console.log(i, lowest);
        let temp = arr[i];
        arr[i] = arr[lowest];
        arr[lowest] = temp;
        // console.log(arr);
        // console.log("**********");
      }
    }
  }
  return arr;
}
// console.log(selectionSort([0, 2, 34, 22, 10, 19, 17]));

// Insertion sort
// Build up the sort by gradually creating a larger left half,
// which is always sorted.
// we gradually build up the sorted portion of the array by inserting
// one item at a time, in the correct place.
// INSERTION SORT Pseudocode
// 1. start by picking the second element in the array.(first element is consider the sorted
// portion of the array at the beginning)
// 2. Now we compare the second element with one before it and swap if necessary.
// 3. continue to the next element(left portion of the array) and if it is incorrect order
// iterate through the sorted portion,(i.e left) to place the element in the correct place.
// 4 .Repeat until the array is sorted.
// implementation example

function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    var currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + i] = arr[j];
    }
    arr[j + 1] = currentVal;
    console.log(i, j);
    console.log(arr);
  }
  return arr;
}
//console.log(insertionSort([4, 5, 1, 7, 2, 3]));

insertionSort([4, 2, 3]);
