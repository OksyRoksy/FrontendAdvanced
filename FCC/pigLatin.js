function translatePigLatin(str) {
    if (isVowel(str.charAt(0))) return str + "way";
    var front = [];
    str = str.split('');
    while (str.length && !isVowel(str[0])) {
      front.push(str.shift());
    }
    return [].concat(str, front).join('') + 'ay';
  }
  
  function isVowel(c) {
    return ['a', 'e', 'i', 'o', 'u'].indexOf(c.toLowerCase()) !== -1;
  }
  translatePigLatin("consonant");

console.log(translatePigLatin("california"));
console.log(translatePigLatin("paragraphs"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("schwartz"));
console.log(translatePigLatin("rhythm"));