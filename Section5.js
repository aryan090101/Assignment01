//1. Check whether an input is an array or not
function is_array(input) {
  return Array.isArray(input);
}
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));

//2. Clone an array
function array_Clone(arr) {
  return arr.slice(0);
}
console.log(array_Clone([1, 2, 4, 0]));  
console.log(array_Clone([1, 2, [4, 0]]));

//3. First element of an array
function first(arr, n) {
  if (arr == null) return null;
  if (n == null) return arr[0];
  if (n < 0) return [];
  return arr.slice(0, n);
}

//4. Last element of array
function last(arr, n) {
  if (arr == null) return void 0;
  if (n == null) return arr[arr.length - 1];
  return arr.slice(Math.max(arr.length - n, 0));
}

//5. Join all elements of an array into a string
let myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.join(' '));

//6. Insert Dashes Between Two Even Numbers
function insertDash() {
  var num=prompt('Enter a number');
  num=parseInt(num);  
  let str = num.toString();
  let result = [str[0]];

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] % 2 === 0 && str[i] % 2 === 0) {
      result.push('-', str[i]);
    } else {
      result.push(str[i]);
    }
  }

  return result.join('');
}

//7. Sort items of an array
function sortarray(res)
{
    var l=res.length;
  for(var i=0;i<l-1;i++)
  {
    for(var j=0;j<l-i-1;j++)
      if (res[j]>res[j+1])
      {
        var t=res[j];
        res[j]=res[j+1];
        res[j+1]=t;
      }
  }
 return res;

}

//8. Most frequent item in an array
function mostFrequent(arr) {
  let freq = {};
  let maxFreq = 0;
  let mostItem;

  for (let item of arr) {
    freq[item] = (freq[item] || 0) + 1;
    if (freq[item] > maxFreq) {
      maxFreq = freq[item];
      mostItem = item;
    }
  }

  return `${mostItem} ( ${maxFreq} times )`;
}

//9. Remove duplicate values from an array
function swapCase(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    let ch = str[i];

    if (ch===ch.toUpperCase()) {
      result += ch.toLowerCase();
    } else {
      result += ch.toUpperCase();
    }
  }

  return result;
}

//10. Print elements
function nested(arr)
{
    for(var i=0;i<arr.length;i++)
    {
        console.log('row'+i+'\n');
        for(var j=0;j<arr[i].length;j++)
            console.log('"'+arr[i][j]+'"\n');
    }
}

//11. Sum of squares of a numerical vector
function sumOfSquares(arr) {
  return arr.reduce((sum, val) => sum + val * val, 0);
}

//12. Sum and producct of an array of integers
function sumAndProduct(arr) {
  let sum = arr.reduce((a, b) => a + b, 0);
  let product = arr.reduce((a, b) => a * b, 1);
  return { sum, product };
}

//14. Remove duplicates
    function remove(arr)
    {
        return new Set(arr);
    }

//15. Display colors
let color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
let o = ["th", "st", "nd", "rd"];

for (let i = 0; i < color.length; i++) {
  let suffix = (i + 1) === 1 ? "st" :
               (i + 1) === 2 ? "nd" :
               (i + 1) === 3 ? "rd" : "th";
  console.log(`${i + 1}${suffix} choice is ${color[i]}`);
}

//16. Leap years in a given range
function findLeapYears(start, end) {
  let leapYears = [];
  for (let year = start; year <= end; year++) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      leapYears.push(year);
    }
  }
  return leapYears;
}

//17. Shuffle an array
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

//18. Binary Search
function binary_Search(arr, target) {
  let left = 0, right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) return mid;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // not found
}

// 19. Sum of arrays
function sumOfIndexValues(arr1, arr2) {
  let maxLength = Math.max(arr1.length, arr2.length);
  let result = [];

  for (let i = 0; i < maxLength; i++) {
    let val1 = arr1[i] || 0;
    let val2 = arr2[i] || 0;
    result.push(val1 + val2);
  }

  return result;
}

//20. Find duplicates in an array
function findDuplicates(arr) {
  let seen = {};
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    if (seen[arr[i]]) {
      if (!duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    } else {
      seen[arr[i]] = true;
    }
  }

  return duplicates;
}

//21. Flatten nested array
function flatten(arr, shallow) {
  if (shallow) {
    return arr.flat(1);
  } else {
    return arr.flat(Infinity);
  }
}

//22. Union of 2 arrays
function union(arr1,arr2)
{
    return new Set(arr1,arr2);
}

//23. Difference of 2 arrays
function difference(arr1, arr2) {
  const flatArr2 = arr2.flat(Infinity).map(String);
  return arr1.map(String).filter(x => !flatArr2.includes(x));
}

//24. Remove falsy values
function cleanArray(arr) {
  return arr.filter(Boolean);
}

//25. Sort an array of objects
let library = [  
  { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254 },
  { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264 },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245 }
];

library.sort((a, b) => a.title.localeCompare(b.title));
console.log(library);

//26. Find indices of pair whose sum equals a target
function findPairSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}

//27. Retrieve value of a given property from all objects in an array
function pluck(arr, prop) {
  return arr.map(obj => obj[prop]);
}

//28. Find longest common starting substring
function longest_common_starting_substring(arr) {
  if (arr.length === 0) return "";
  
  let prefix = arr[0];
  
  for (let i = 1; i < arr.length; i++) {
    while (arr[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  
  return prefix;
}

//29. Fill an array with values (numeric, string with one character) on supplied bounds
function num_string_range(start, end, step) {
  let result = [];
  if (typeof start === 'number' && typeof end === 'number') {
    for (let i = start; i <= end; i += step) {
      result.push(i);
    }
  } else if (typeof start === 'string' && typeof end === 'string') {
    let s = start.charCodeAt(0);
    let e = end.charCodeAt(0);
    for (let i = s; i <= e; i += step) {
      result.push(String.fromCharCode(i));
    }
  }
  return result;
}

//30. Merge 2 arrays and remove duplicates
function Mergeremove(arr1,arr2)
{
    return new Set(arr1,arr2);
}

//31. Remove specific element from an array
function remove_array_element(arr, elem) {
  return arr.filter(item => item !== elem);
}

//32. Empty an array
let arr = [1, 2, 3, 4];
let res=arr;
res.length = 0;
console.log(res); 

//33. Check if an array contains a specific element
function array_contains(arr, elem) {
  return arr.includes(elem);
}

//34. Find nth largest element
function nthlargest(arr, n) {
  let sorted = arr.sort((a, b) => b - a);
  return sorted[n - 1];
}

//35. Get random element from an array
function random_item(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

//36. Create a specified number of elements with pre-filled numeric value array
function prefill(n,val)
{
    val=parseInt(val);
    var arr=[];
    for(var i=0;i<n;i++)
        arr.push(val);
    return arr;
}
 
//37. Create a specified number of elements with pre-filled String value array
function prefill(n,val)
{
    val=val.toString();
    var arr=[];
    for(var i=0;i<n;i++)
        arr.push(val);
    return arr;
}

//38. Move array element from one position to another
function move(arr, from, to) {
  const newArr = [...arr];
  const len = newArr.length;

  
  from = from < 0 ? len + from : from;
  to = to < 0 ? len + to : to;

  
  if (from >= len || to >= len || from < 0 || to < 0) return newArr;

  const val = newArr.splice(from, 1)[0];  
  newArr.splice(to, 0, val);              

  return newArr;
}

//39. Remove falsy values
function filter_array_values(arr) {
  return arr.filter(Boolean);
}

//40. Generate array with incremented values from a start
function prefill(val,n)
{
   var num=parseInt(val);
    var arr=[];
    for(var i=0;i<n;i++)
        arr.push(num++);
    return arr;
}

//41. Generate array between two integers of step 1
function generate(from,to)
{
    var arr=[];
    for(var i=from;i<=to;i++)
        arr.push(i);
    return arr;
}

//42. Unique elements
function difference(a, b) {
  function flatten(arr) {
    return arr.reduce((flat, toFlatten) =>
      flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten), []);
  }

  const set = new Set(flatten(a).map(String).concat(flatten(b).map(String)));
  return Array.from(set);
}

