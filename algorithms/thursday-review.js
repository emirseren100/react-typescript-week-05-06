function reverseString(word) {
    let reversed = "";

for (let i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
}

return reversed;
}

console.log(reverseString("Kedi"));
console.log(reverseString("React"));

function isPalindrome(word) {
  const normalizedWord = word.toLowerCase();
  const reversedWord = reverseString(normalizedWord);

  return normalizedWord === reversedWord;
}
console.log("Kedi ters:", reverseString("Kedi"));
console.log("React ters:", reverseString("React"));

console.log("level palindrome mu?", isPalindrome("level"));
console.log("radar palindrome mu?", isPalindrome("radar"));
console.log("react palindrome mu?", isPalindrome("react"));