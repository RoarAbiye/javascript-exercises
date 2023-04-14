const palindromes = function (word) {
  let orgWord = word.replace(/[^a-zA-Z0-9]/gi, "").toLowerCase() ;

  let reverseWord = orgWord.split("").reverse().join("");

  console.log(orgWord, reverseWord);
  return orgWord === reverseWord;
};
console.log(palindromes("Racecar!"));
// Do not edit below this line
module.exports = palindromes;
