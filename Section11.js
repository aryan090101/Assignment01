//1. List properties
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(Object.keys(student).join(","));

//2. Delete property
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log("Before deleting:", student);
delete student.rollno;
console.log("After deleting:", student);

//3. Length of object
var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};
console.log(Object.keys(student).length);

//4. Reading status
var library = [
  { author: 'Bill Gates', title: 'The Road Ahead', readingStatus: true },
  { author: 'Steve Jobs', title: 'Walter Isaacson', readingStatus: true },
  { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', readingStatus: false }
];
library.forEach(function(book) {
  console.log(book.title + " by " + book.author + ", Reading Status: " + book.readingStatus);
});

//5. Volume of a cylinder
class Cylinder {
  constructor(radius, height) {
    this.radius = radius;
    this.height = height;
  }

  getVolume() {
    return (Math.PI * Math.pow(this.radius, 2) * this.height).toFixed(4);
  }
}
let c = new Cylinder(3, 5);
console.log("Volume =", c.getVolume());

//6. Bubble sort
let arr = [6, 4, 0, 3, -2, 1];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - i - 1; j++) {
    if (arr[j] > arr[j + 1]) {
      [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
    }
  }
}
console.log(arr);

//7. Subset of a string
function getSubsets(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j <= str.length; j++) {
      result.push(str.substring(i, j));
    }
  }
  return result;
}
console.log(getSubsets("dog"));

//8. Clock
setInterval(function() {
  let now = new Date();
  console.log(now.toTimeString().split(" ")[0]);
}, 1000);

//9. Area perimeter
class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
  getPerimeter() {
    return 2 * Math.PI * this.radius;
  }
}
let x = new Circle(5);
console.log("Area:", x.getArea());
console.log("Perimeter:", x.getPerimeter());

//10. Sort array of objects
var library = [
  { title: 'The Road Ahead', author: 'Bill Gates', libraryID: 1254 },
  { title: 'Walter Isaacson', author: 'Steve Jobs', libraryID: 4264 },
  { title: 'Mockingjay: The Final Book of The Hunger Games', author: 'Suzanne Collins', libraryID: 3245 }
];
library.sort((a, b) => b.libraryID - a.libraryID);
console.log(library);

//11. List methods
function all_properties(obj) {
  return Object.getOwnPropertyNames(obj).concat(Object.getOwnPropertyNames(obj.__proto__));
}
console.log(all_properties(Array));

//12. Parse URL
function parse_URL(url) {
  var parser = document.createElement('a');
  parser.href = url;
  var params = {};
  var queries = parser.search.replace(/^\?/, '').split('&');
  queries.forEach(function(query) {
    var [key, value] = query.split('=');
    params[key] = value;
  });
  return {
    source: url,
    protocol: parser.protocol.replace(':',''),
    host: parser.hostname,
    port: parser.port,
    query: parser.search,
    params: params,
    file: (parser.pathname.match(/\/([^/?#]+)$/i) || [,''])[1],
    hash: parser.hash.replace('#',''),
    path: parser.pathname.replace(/^([^\/])/,'/$1'),
    relative: (parser.href.match(/tps?:\/\/[^\/]+(.+)/) || [,''])[1],
    segments: parser.pathname.replace(/^\/+/,'').split('/')
  };
}
console.log(parse_URL('https://github.com/pubnub/python/search?utf8=%E2%9C%93&q=python'));