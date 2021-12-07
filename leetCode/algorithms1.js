// Read on Binary Search
// https://www.topcoder.com/thrive/articles/Binary%20Search

// 1. Binary Search
// Given an array of integers nums which is sorted in ascending order, and an integer target,
// write a function to search target in nums. If target exists, then return its index.
// Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Discussions
// https://leetcode.com/problems/binary-search/discuss/?currentPage=1&orderBy=hot&query=

// Solution -- brutt Force Solution
var search = function (nums, target) {
  const findIndex = nums.indexOf(target);
  if (!findIndex) return -1;
  return findIndex;
};

// submission
// Runtime: 84 ms, faster than 47.36% of JavaScript online submissions for Binary Search.
// Memory Usage: 42.4 MB, less than 49.73% of JavaScript online submissions for Binary Search.

// second solutions optimize 1
var search = function (nums, target) {
  var low = 0;
  var high = nums.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] == target) return mid;
    else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
};

// sumbission result
// Runtime: 80 ms, faster than 65.68% of JavaScript online submissions for Binary Search.
// Memory Usage: 42.6 MB, less than 9.48% of JavaScript online submissions for Binary Search.

// Third Solution optimize 2
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;

  while (left <= right) {
    mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }

  return -1;
};
// type code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0;
  var right = nums.length - 1;
  var mid;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else if (nums[mid] > target) right = mid - 1;
  }
  return -1;
};

// submission results
// Runtime: 72 ms, faster than 92.31% of JavaScript online submissions for Binary Search.
// Memory Usage: 42.5 MB, less than 19.34% of JavaScript online submissions for Binary Search.

// You are a product manager and currently leading a team to develop a new product.
// Unfortunately, the latest version of your product fails the quality check.
// Since each version is developed based on the previous version, all the versions
//  after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
// which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which returns whether version is bad.
// Implement a function to find the first bad version. You should minimize the number
// of calls to the API.

// https://dev.to/cod3pineapple/leetcode-278-first-bad-version-javascript-solution-4em2
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    var left = 1;
    var right = n;
    while (left < right) {
      const mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

// https://medium.com/algoposts/leetcode-278-first-bad-version-explanation-68e410da81ed

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let lo = 0;
    let hi = n - 1;
    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) hi = mid - 1;
      else lo = mid + 1;
    }
    return lo;
  };
};

//Given a sorted array of distinct integers and a target value,
// return the index if the target is found. If not, return the index where it
// would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (right > left) {
    let mid = Math.floor((right - left) / 2) + left;
    if (nums[mid] == target) {
      return mid;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  if (nums[left] < target) return left + 1;
  else return left;
};

// Runtime: 76 ms, faster than 58.57% of JavaScript online submissions for Search Insert Position.
// Memory Usage: 40.1 MB, less than 16.94% of JavaScript online submissions for Search Insert Position.
