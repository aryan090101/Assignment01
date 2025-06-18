function cToF(celsius) {
  return (celsius * 9/5) + 32;
}
function fToC(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
console.log("60°C is " + cToF(60) + "°F");
console.log("45°F is " + fToC(45) + "°C");
