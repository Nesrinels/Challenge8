function removeVowels(str) {
    return str.replace(/[aeiouAEIOU]/, '');
}

// Example usage:
const inputString = "Hello, World!";
console.log(removeVowels(inputString));
