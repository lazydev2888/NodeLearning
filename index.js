// To create server in Node js
const fs = require("fs");
const http = require("http");
const PORT = 4000;
const hostname = "localhost";

const home = fs.readFileSync('./index.html','utf-8');


// To check File And Directory Name
// console.log(__dirname);
// console.log(__filename);

const server =  http.createServer((req,res,next)=>{
    if(req.url === "/"){
      return  res.end(home);
    }
    if(req.url === "/about"){
     return   res.end("<h1>About Page </h1>");
    }
    if(req.url === "/service"){
       return res.end("<h1>Service Page Page </h1>");
    }
    if(req.url === "/contact"){
      return  res.end("<h1>contact Page </h1>");
    }
   else{
    return res.end("<h1>404 Page Not Found </h1>");
   }
    
    
    
    
    
    
    
    
    // res.end("working");
    

});
server.listen(PORT, hostname,()=>{
console.log(`server is working on http://${hostname}:${PORT})`);
})


                                                                    // Third Praty Module

// Pokemon is Third party module first install pokemon and then use

// const pokemon = require("pokemon");

// console.log(pokemon.random());
// console.log(pokemon.all());



// Os module 

// const os = require("os");
// console.log(os.freemem());
// console.log(os.hostname());
// console.log(os.userInfo());
// console.log(os.networkInterfaces());


// Create Another file and add messages using fs 
// const fs = require("fs");

// const a = "This file is created by Lazydev";

// fs.writeFile('message.txt', a, (err) => {
//     if (err) throw err;
//     console.log('The file has been saved!');
//   });



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