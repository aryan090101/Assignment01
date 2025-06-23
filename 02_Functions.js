// JavaScript Solutions for Functions

// 1. Reverse a number
function reverseNumber(num) {
  var r = 0;
  while (num > 0) {
    r = (r * 10) + (num % 10); 
    num = Math.floor(num / 10); 
  }
  return r;
}




// 2. Check palindrome
function isPalindrome(num) {
   var r = 0;
   var t=num;
  while (num > 0) {
    r = (r * 10) + (num % 10); 
    num = Math.floor(num / 10); 
  }
  return r==t;
}






// 3. All combinations of a string
function combinations(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.slice(i, j));
    }
  }
  return result;
}




// 4. Alphabetical order
function alphabeticalOrder(str) {
  return str.split('').sort().join('');
}

// 5. Capitalize first letter of each word
function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}




// 6. Find longest word
function findLongestWord(str) {
  let words = str.split(' ');
  return words.reduce((a, b) => a.length > b.length ? a : b);
}



// 7. Count vowels
function countVowels(str) {
  var c=0;
  for(var i of str)
  {
    if("AEIOUaeiou".includes(i))
      c++;
  }
  return c;
}



// 8. Check prime
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}



// 9. Return type of argument
function detectType(value) {
  return typeof value;
}




// 10. Identity matrix
function identityMatrix(n) {
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix[i] = [];
    for (let j = 0; j < n; j++) {
      matrix[i][j] = (i === j ? 1 : 0);
    }
  }
  return matrix;
}



// 11. Second lowest and second greatest
function secondLowHigh(arr) {
  let sorted = Array.from(new Set(arr)).sort((a, b) => a - b);
  return [sorted[1], sorted[sorted.length - 2]];
}



// 12. Perfect number
function isPerfect(num) {
  let sum = 0;
  for (let i = 1; i < num; i++) {
    if (num % i === 0) sum += i;
  }
  return sum === num;
}




// 13. Factors of a positive integer
function getFactors(num) {
  let factors = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) factors.push(i);
  }
  return factors;
}




// 14. Convert amount to coins
function amountToCoins(amount, coins) {
  let result = [];
  for (let i = 0; i < coins.length; i++) {
    while (amount >= coins[i]) {
      amount -= coins[i];
      result.push(coins[i]);
    }
  }
  return result;
}



// 15. Compute b^n
function power(b, n) {
  return Math.pow(b, n);
}




// 16. Extract unique characters
function uniqueChars(str) {
  return Array.from(new Set(str)).join('');
}




// 17. Count letter occurrences
function charCount(str) {
  let count = {};
  for (let char of str) {
    count[char] = (count[char] || 0) + 1;
  }
  return count;
}

// 18. Binary search
function binarySearch(arr, val) {
  let low = 0, high = arr.length - 1;
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (arr[mid] === val) return mid;
    else if (arr[mid] < val) low = mid + 1;
    else high = mid - 1;
  }
  return -1;
}




// 19. Array elements larger than a number
function largerThan(arr, val) {
  return arr.filter(x => x > val);
}




// 20. Generate random string id
function generateId(len) {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return result;
}




// 21. All subsets of length 2
function fixedSubsets(arr, len = 2) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      result.push([arr[i], arr[j]]);
    }
  }
  return result;
}




// 22. Count occurrences of letter in string
function countLetter(str, letter) {
  return str.split(letter).length - 1;
}

// 23. First non-repeated character
function firstNonRepeated(str) {
  for (let char of str) {
    if (str.indexOf(char) === str.lastIndexOf(char)) return char;
  }
  return null;
}



// 24. Bubble Sort
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}



// 25. Longest country name
function longestCountryName(countries) {
  return countries.reduce((a, b) => a.length > b.length ? a : b);
}




// 26. Longest substring without repeating characters
function longestUniqueSubstring(str) {
  let seen = {}, start = 0, maxLength = 0, maxStr = "";
  for (let end = 0; end < str.length; end++) {
    let ch = str[end];
    if (seen[ch] !== undefined && seen[ch] >= start) {
      start = seen[ch] + 1;
    }
    seen[ch] = end;
    if (end - start + 1 > maxLength) {
      maxLength = end - start + 1;
      maxStr = str.substring(start, end + 1);
    }
  }
  return maxStr;
}



// 27. Longest palindrome in a string
function longestPalindrome(s) {
  let max = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      let substr = s.substring(i, j + 1);
      if (substr === substr.split("").reverse().join("") && substr.length > max.length) {
        max = substr;
      }
    }
  }
  return max;
}



// 28. Pass function as parameter
function greetUser(callback) {
  console.log("Hi user!");
  callback();
}




// 29. Get function name
function getFunctionName(fn) {
  return fn.name;
}
