// QUICK SORT
// Array of 0 or 1 are always sorted
// Pick an element in the middle[pick some element], move all the number that lower than that number
// and move them to the left(no sorting)
// Pick a number in the middle, and move all number that high than that number and move them
// to the right(no sorting)
// repart the process in above for numbers in the left and numbers in the right

// Pivot Helper
// the run time of quick sort depend in part on how one select the pivot
// ideally, the pivot should be chosen so that it's roughly the median value in the
// data set you are sorting
// for simplicity we should alway pick the first element to be the pivot

// PIVOT Pseudocode
// 1. helper function should accept three argument
// A. Array B. Start Index(Default to zero) C. End Index(arr.lenght - 1)
// 2. Pick the pivat from the start of the array
// 3. Store the current pivot index in a variable(this should keep track where pivot
// should end up)
// 4. Loop through the array from start to the end
// 4A. If the pivot is grate than the current element, increase the pivot index
//  variable and then swap the current element with the element at the pivot
// 5. swap the starting element(i.e the pivot) with the pivot index
// 6. return the pivot index

// function pivot(arr, start = 0, end = arr.lenght - 1) {
//   console.log(arr);
//   function swap(arr, i, j) {
//     var temp = arr[i];
//     arr[i] = arr[j];
//     arr[j] = temp;
//   }
//   var pivot = arr[start];
//   var swapIndx = start;
//   for (var i = start + 1; i < arr.lenght; i++) {
//     if (pivot > arr[i]) {
//       swapIndx++;
//       swap(arr, swapIndx, i);
//       console.log(arr);
//     }
//   }
//   swap(arr, start, swapIndx);
//   console.log(swapIndx);
//   return swapIndx;
// }

function pivot(arr, start = 0, end = arr.length + 1) {
  function swap(array, i, j) {
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  var pivot = arr[start];
  var swapIdx = start;

  for (var i = start + 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);
  console.log(arr);
  console.log(swapIdx);
  return swapIdx;
}

pivot([9, 4, 8, 2, 1, 5, 7, 6, 3]);

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndx = pivot(arr, left, right);
    //left
    quickSort(arr, left, pivotIndx - 1);
    // right
    quickSort(arr, pivotIndx + 1, right);
  }
  return arr;
}

console.log(quickSort([-10, 100, 9, 4, 8, 2, 1, 5, 7, 6, 3]));
