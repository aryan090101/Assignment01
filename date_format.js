const today = new Date();
const dd = String(today.getDate()).padStart(2, '0');
const mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
const yyyy = today.getFullYear();

console.log(${mm}-${dd}-${yyyy});
console.log(${mm}/${dd}/${yyyy});
console.log(${dd}-${mm}-${yyyy});
console.log(${dd}/${mm}/${yyyy});
