function uniqueChars(str) {
  return [...new Set(str)].join('');
}
console.log(uniqueChars("thequickbrownfoxjumpsoverthelazydog"));