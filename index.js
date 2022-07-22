const fs = require("fs");

const a = "This file is created by Lazydev";

fs.writeFile('message.txt', a, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });










// Bulit In Module
// const fs = require("fs");
//  This is synchrous first run task and complete then after run second task 
// const a = fs.readFileSync("./sample.txt","utf-8");
// console.log(a);
// console.log("Hey I am First");

// fs.readFile('./sample.txt', 'utf-8', (err, data, ) => {
//     if (err) throw err;
//     console.log(data);
//   });
// console.log("Hey I am First")
// Hey i am first printing first because javascript is asynchronous function

                                                              //  File Based  Module


// const a = {
//     average: (a,b) =>{
//       console.log((a+b)/2);
//     },
//     percentage:(a,b) =>{
//         console.log((a/b)*100);
//     },
// };
// module.exports = a;



// There are three types of module in NodeJs

// File Based, Build In, Third-Party