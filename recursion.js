/** product: calculate the product of an array of numbers. */

function product([front, ...end]) {
  if (front === undefined) return 1;
  return front * product(end);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words) {
  if (words.length === 1) return words[0].length;
  return Math.max(words[0].length, longest(words.slice(1)));
}

/** everyOther: return a string with every other letter. */

function everyOther(str) {
  if (str.length < 2) return str;
  return str.substring(0, 1) + everyOther(str.substring(2));
}

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) return isPalindrome(str.slice(1, -1));
  return false;
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  if (!arr.length) return -1;
  if (arr[0] === val) return 0;
  return findIndex(arr.slice(1), val) + 1 || -1;
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  if (str.length <= 1) return str;
  return str.charAt(str.length - 1) + revString(str.substring(0, str.length -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let arr = '';
  for (let str in obj) {
    if (typeof obj[str] === "string") arr += `${obj[str]} `;
    else arr+= gatherStrings(obj[str]);
  }
  return arr.split(" ");
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val) {

}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
