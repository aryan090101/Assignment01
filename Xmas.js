const today = new Date();
let cmas = new Date(today.getFullYear(), 11, 25); 
if (today.getMonth() === 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}

const oneDay = 1000 * 60 * 60 * 24;
const diffDays = Math.ceil((cmas.getTime() - today.getTime()) / oneDay);

console.log(`${diffDays} day(s) left until next Christmas!`);
