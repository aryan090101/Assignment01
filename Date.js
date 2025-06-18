const today = new Date();

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const day = days[today.getDay()];

let hours = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const ampm = hours >= 12 ? 'PM' : 'AM';
hours = hours % 12;
hours = hours ? hours : 12; // 0 should be 12

console.log(Today is : ${day}.);
console.log(Current time is : ${hours} ${ampm} : ${minutes} : ${seconds});
