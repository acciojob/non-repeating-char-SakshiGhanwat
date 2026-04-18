function firstNonRepeatedChar(str) {
    if (!str) return null;

    let freq = {};

    // Step 1: count frequency
    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: find first non-repeating
    for (let char of str) {
        if (freq[char] === 1) {
            return char;
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));