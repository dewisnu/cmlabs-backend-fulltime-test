function isPalindrome(word) {

    let cleanedWord = word.toLowerCase().replace(/\s/g, '');


    let reversedWord = cleanedWord.split('').reverse().join('');
    return cleanedWord === reversedWord;
}

//Singe Word
console.log(isPalindrome("SAIPPUAKIVIKAUPPIAS"));
console.log(isPalindrome("Aibohphobia"));
console.log(isPalindrome("Anna"));
console.log(isPalindrome("Civic"));

//Multiple Words
console.log(isPalindrome("My gym"));
console.log(isPalindrome("No lemon, no melon"));



//Not Palindrome
console.log(isPalindrome("makanan"));
console.log(isPalindrome("yuhuu , yahaaa"));
