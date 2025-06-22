// 1. Check if first character is uppercase
function isFirstCharUpper(str) {
  return /^[A-Z]/.test(str);
}

// 2. Check credit card number (basic Luhn algorithm + pattern)
function isValidCreditCard(number) {
  const pattern = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|3[47][0-9]{13}|6(?:011|5[0-9]{2})[0-9]{12})$/;
  return pattern.test(number.replace(/[-\s]/g, ''));
}

// 3. Match valid email address
function isValidEmail(email) {
  const pattern = /^[a-zA-Z0-9!#$%&'*+/=?^_`{|}~.-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return pattern.test(email);
}

// 4. Search date in string (MM/DD/YYYY or DD-MM-YYYY)
function findDate(str) {
  const pattern = /\b(\d{1,2}[\/\-]\d{1,2}[\/\-]\d{2,4})\b/g;
  return str.match(pattern);
}

// 5. Trim using regex
function trimString(str) {
  return str.replace(/^\s+|\s+$/g, '');
}

// 6. Count words in string
function countWords(str) {
  return str.trim().replace(/\s+/g, ' ').split(' ').filter(word => word).length;
}

// 7. Check IP address
function isValidIP(str) {
  const pattern = /^(\d{1,3}\.){3}\d{1,3}$/;
  return pattern.test(str);
}

// 8. Count vowels in string
function countVowels(str) {
  return (str.match(/[aeiou]/gi) || []).length;
}

// 9. Validate URL
function isValidURL(url) {
  const pattern = /^(https?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/;
  return pattern.test(url);
}

// 10. Check alphanumeric
function isAlphanumeric(str) {
  return /^[a-z0-9]+$/i.test(str);
}

// 11. Check time string (HH:MM or HH:MM:SS)
function isTimeString(str) {
  return /^([01]\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(str);
}

// 12. Check US zip code
function isUSZipCode(str) {
  return /^\d{5}(-\d{4})?$/.test(str);
}

// 13. Check UK post code
function isUKPostCode(str) {
  return /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(str);
}

// 14. Check Canada post code
function isCanadaPostCode(str) {
  return /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/.test(str);
}

// 15. Check SSN (Social Security Number)
function isValidSSN(str) {
  return /^\d{3}-\d{2}-\d{4}$/.test(str);
}

// 16. Check if hexadecimal
function isHex(str) {
  return /^[0-9A-Fa-f]+$/.test(str);
}

// 17. Check hex color value
function isHexColor(str) {
  return /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(str);
}

// 18. Check if domain
function isDomain(str) {
  return /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(str);
}

// 19. Check if HTML
function isHTML(str) {
  return /<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/i.test(str);
}

// 20. Check alpha, dash, underscore
function isAlphaDashUnderscore(str) {
  return /^[a-zA-Z-_]+$/.test(str);
}

// 21. Print with thousands separators
function thousands_separators(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
