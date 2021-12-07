// Merge sort is combination of two things
// merging and sorting
// actually merging included
// Exploit the fact that array of 0 or 1 are already sorted
// it follow the divide and conqure problem solving pattern
// works by decomposing array into smaller array of 1 orr 0 zero
// then build up the newly sorted array

// MERGING ARRAY
// in order to implment merge sort, it is useful to first implement a function
// responsible for merging two sorted array
// Given tow arrays, which are sorted, this helper function should creatre a new
// array which are sorted, and consist of all the element in the two inputed array

// Pseduocode
// 1. Create an empty array, take a look at the smallest values in each input array
//

function merge(arr1, arr2) {
  let results = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      i++;
    } else {
      results.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  return results;
}

//console.log(merge([1, 10, 50], [2, 14, 99, 100]));

// Sorting Part of Merge Sort
// to make an array into two array, we use array.slice

function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let midPoint = Math.floor(arr.length / 2);
  // recursion happening here
  let left = mergeSort(arr.slice(0, midPoint));
  let right = mergeSort(arr.slice(midPoint));
  return merge(left, right);
}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
console.log(mergeSort([101, 4, 76, 13, 109, 1000, 2]));
console.log(mergeSort([10, 24, 76, 73]));
