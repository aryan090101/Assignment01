//String Functions

// 1. Check whether an input is a string or not
function is_string(input) {
  return typeof input === 'string' || input instanceof String;
}

// 2. Check whether a string is blank or not
function is_Blank(str) {
  return (!str || str.length === 0);
}

// 3. Split a string and convert to array of words
function string_to_array(str) {
  return str.trim().split(" ");
}

// 4. Remove specified number of characters
function truncate_string(str, length) {
  return str.substring(0, length);
}

// 5. Abbreviate name
function abbrev_name(name) {
  const names = name.split(" ");
  return names[0] + " " + names[1].charAt(0) + ".";
}

// 6. Protect email
function protect_email(email) {
  const [user, domain] = email.split("@");
  return user.slice(0, user.indexOf('.') + 1) + "...@" + domain;
}

// 7. Parameterize string
function string_parameterize(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// 8. Capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// 9. Capitalize each word
function capitalize_Words(str) {
  return str.replace(/\b\w/g, ch => ch.toUpperCase());
}

// 10. Swap case
function swapcase(str) {
  return str.split('').map(char =>
    char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}

// 11. Camelize string
function camelize(str) {
  let words = str.split(' ');
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  }
  return words.join('');
}

// 12. Uncamelize string
function uncamelize(str, separator = ' ') {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    if (ch >= 'A' && ch <= 'Z') {
      result += separator + ch.toLowerCase();
    } else {
      result += ch;
    }
  }
  return result;
}

// 13. Repeat string
function repeat(str, n) {
  return str.repeat(n);
}

// 14. Insert string at position
function insert(mainStr, insStr, pos) {
  return mainStr.slice(0, pos) + insStr + mainStr.slice(pos);
}

// 15. Humanize number
function humanize_format(num) {
  if (typeof num !== 'number') return;
  const suffix = ['th','st','nd','rd'], v = num % 100;
  return num + (suffix[(v - 20) % 10] || suffix[v] || suffix[0]);
}

// 16. Truncate string with ellipsis
function text_truncate(str, length, ending) {
  return str.length > length ? str.slice(0, length - ending.length) + ending : str;
}

// 17. Chop string into chunks
function string_chop(str, size) {
  if (!size) return [str];
  const result = [];
  for (let i = 0; i < str.length; i += size) {
    result.push(str.slice(i, i + size));
  }
  return result;
}

// 18. Count substring
function count(str, subStr, caseSensitive = true) {
  const flags = caseSensitive ? 'g' : 'gi';
  return (str.match(new RegExp(subStr, flags)) || []).length;
}

// 19. Escape HTML
function escape_HTML(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// 20. Pad string
function formatted_string(pad, str, dir) {
  str = str.toString();
  if (dir === 'l') return (pad + str).slice(-pad.length);
  return (str + pad).substring(0, pad.length);
}

// 21. Repeat string specified times
function repeat_string(str, count) {
  if (typeof str !== "string" || typeof count !== "number") return "Error in string or count.";
  return str.repeat(count);
}

// 22. Get substring after character
function subStrAfterChars(str, char, pos) {
  if (pos === 'b') return str.substring(str.indexOf(char) + 1);
  return str.substring(0, str.indexOf(char));
}

// 23. Strip spaces
function strip(str) {
  return str.trim();
}

// 24. Truncate by words
function truncate(str, numWords) {
  return str.split(" ").slice(0, numWords).join(" ");
}

// 25. Alphabetize string
function alphabetize_string(str) {
  return str.replace(/\s/g, '').split('').sort().join('');
}

// 26. Remove first occurrence
function remove_first_occurrence(str, search) {
  return str.replace(search, '');
}

// 27. ASCII to hex
function ascii_to_hexa(str) {
  return str.split('').map(c => c.charCodeAt(0).toString(16)).join('');
}

// 28. Hex to ASCII
function hex_to_ascii(hex) {
  let str = '';
  for (let i = 0; i < hex.length; i += 2) {
    str += String.fromCharCode(parseInt(hex.substr(i, i+2), 16));
  }
  return str;
}

// 29. Find word count
function search_word(str, word) {
  const pattern = new RegExp('\\b' + word + '\\b', 'gi');
  const matches = str.match(pattern);
  return `'${word}' was found ${matches ? matches.length : 0} times.`;
}

// 30. Ends with
function string_endsWith(str, suffix) {
  if (!suffix) return false;
  return str.endsWith(suffix);
}

// 31. Escape HTML characters
function escape_html(str) {
  return str.replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
}

// 32. Remove non-ASCII
function remove_non_ascii(str) {
  return str.replace(/[^ -~]/g, '');
}

// 33. Remove non-word characters
function remove_non_word(str) {
  return str.replace(/[^\w\s-]/g, '');
}

// 34. Title case
function sentenceCase(str) {
  str = str.toLowerCase();
  let result = '';
  let capitalizeNext = true;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (capitalizeNext && char >= 'a' && char <= 'z') {
      result += char.toUpperCase();
      capitalizeNext = false;
    } else {
      result += char;
    }

    if (char === '.') {
      capitalizeNext = true;
    }
  }

  return result;
}

// 35. Strip HTML tags
function strip_html_tags(str) {
  return str.replace(/<[^>]*>/g, '');
}

// 36. Zerofill
function zeroFill(num, width, sign) {
  const n = Math.abs(num);
  const zeros = width - n.toString().length;
  const zeroStr = '0'.repeat(Math.max(0, zeros));
  return (num < 0 ? '-' : (sign || '')) + zeroStr + n;
}

// 37. Case-insensitive compare
function compare_strings(str1, str2) {
  return str1.toLowerCase() === str2.toLowerCase();
}

// 38. Case-insensitive search
function case_insensitive_search(str, search) {
  return str.toLowerCase().includes(search.toLowerCase()) ? "Matched" : "Not Matched";
}