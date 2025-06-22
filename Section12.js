// 1. Check if value is boolean
function isBoolean(value) {
  return typeof value === 'boolean';
}

// 2. Check if value is an Error
function isError(value) {
  return value instanceof Error;
}

// 3. Check if value is NaN
function isNaNValue(value) {
  return typeof value === 'number' && isNaN(value);
}

// 4. Check if value is null
function isNull(value) {
  return value === null;
}

// 5. Check if value is number
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}

// 6. Check if value is object (and not null or array)
function isObject(value) {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// 7. Check if value is a pure JSON object
function isPureJsonObject(value) {
  return Object.prototype.toString.call(value) === '[object Object]';
}

// 8. Check if value is RegExp
function isRegExp(value) {
  return value instanceof RegExp;
}

// 9. Check if value is a single character
function isChar(value) {
  return typeof value === 'string' && value.length === 1;
}

// 10. Check if two values are of the same type
function isSameType(val1, val2) {
  return typeof val1 === typeof val2;
}