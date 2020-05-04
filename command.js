// returns an array that holds file location
console.log(process.argv);

// store the array in a constant removing the first two directories
const arguments = process.argv.slice(2);

// reduces the array to a single number
const sum = arguments.reduce((acc, val) => acc + parseInt(val), 0);

console.log(sum);