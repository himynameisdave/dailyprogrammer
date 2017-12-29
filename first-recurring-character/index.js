

const INPUT = process.argv[2];
const output = {
    char: '',
    index: 0,
};
const chars = {};

INPUT.split('').reduce((acc, char, index) => {
    if (acc[char] === undefined) {
        acc[char] = index
        return acc;
    }
    if (output.char === '') {
        output.char = char;
        output.index = acc[char];
    }
    return acc;
}, chars);


console.log(`
================================
The recurring character is ${output.char}.
It was first found at position ${output.index} in the original string.
================================
`);
