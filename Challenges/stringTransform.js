function transformString(string) {
    // Enforcing the constraints
    if (string.length < 1 || string.length > 1000) {
        throw new Error("The length of the string will be between 1 and 1000.");
    }

    const alphaRegex = /^[a-zA-Z0-9 ]*$/;
    if (!alphaRegex.test(string)) {
        throw new Error("The string will only contain alphanumeric characters and spaces.");
    }

    // If divisible by 15, perform both operations in order
    if (string.length % 15 === 0) {
        return string.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    }

    // If divisible by 3, reverse string

    /* Spaces are removed to achieve same output as example: Chocolate Chip Cookie => eikooCpihCetalocohC
    Instead of: Chocolate Chip Cookie => eikooC pihC etalocohC */
    
    if (string.length % 3 === 0) {
        return string.split('').reverse().join('').replaceAll(' ', '');
    }

    // If divisible by 5, replace every character with ASCII code
    if (string.length % 5 === 0) {
        return string.split('').map(char => char.charCodeAt(0)).join(' ');
    }
}

const string = "Hamburger"
const transformedString = transformString(string)
console.log(transformedString)
