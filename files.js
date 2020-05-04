//import or add the file system module
const fs = require('fs');

/* -----------------------------
   reading content of a file
-------------------------------*/

// note this method of reading a file is syncronous, there's also an asyncronous way of doing this
const data = fs.readFileSync('system.js');
// this doesnt actually return the content of the system.js file, rather it returns a buffer
console.log(data);
// the actual data cam be gotten by calling a toString function on the data variable
console.log(data.toString());

/* -----------------------------
   writing content into a file
-------------------------------*/
// this line of code creates a data.txt file and write Hello World in it
fs.writeFileSync('data.txt', 'Hello World');

/* -----------------------------
   append content into a file
-------------------------------*/
// this line of code appends a text to content of data.txt
fs.appendFileSync('data.txt', 'Another Message');

/* -----------------------------
   copy a file
-------------------------------*/
// this line of code copies content of data.txt file to data.copy.txt file
fs.copyFileSync('data.txt', 'data.copy.txt');

/* -----------------------------
   rename a file
-------------------------------*/
// this line of code renames the data.copy.txt file to data.new.txt
fs.renameSync('data.copy.txt', 'data.new.txt');

/* -----------------------------
   delete a file
-------------------------------*/
// this line of code deletes the data.new.txt file
fs.unlinkSync('data.new.txt');

/* -------------------------------
reading the content of a directory
---------------------------------*/
// stores and return all the files in our working directory
const dir = fs.readdirSync(__dirname);
console.log(dir);

/* -------------------------------
    making a directory
---------------------------------*/
// makes a new directory named file-system 
//fs.mkdirSync('file-system');

/* -------------------------------
moving a file to a new directory
---------------------------------*/
// This line of code can actually rename and move the file at the same time
fs.renameSync('data.txt', 'file-system/data.txt');

/* -------------------------------
 watching a file for changes
---------------------------------*/
// this line of code keep running in background and tells us if a file has changed
fs.watchFile('file-system/data.txt', () => {
    console.log('Data file was changed');
});