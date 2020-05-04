// the require keyword is used to import a module

// requires the os module
const os = require('os');

// get info of the user running the nodejs program
console.log(os.userInfo());

// gets the platform the user is on
console.log(os.platform());

// gets the version of window user is on
console.log(os.release());

// gets number of cpus running on user computer
console.log(os.cpus());

// gets the directory and filename of the current running file
console.log(__dirname);
console.log(__filename);

// get all the enviroment variables
console.log(process.env);

// you can store a value into the enviroment vvariable by using "export VALUE_NAME=value"
// so this variable is also available in the enviroment variables

// get the variable that I stored in my enviroment variable
console.log(process.env.DATABASE_PASSWORD);