const log = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");

// line 1 is a module wrapper function which is an IIFE with params 'exports','__dirname','__filename','require','module'
log("my name is Pranav");

//path module
const pathObj = path.parse(__filename);
console.log(pathObj); //root,dir,base,ext,name

//os module
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`);

//fs module
const syncfiles = fs.readdirSync("./");
console.log("Sync way - Current folder contains ", syncfiles); //[ '.git', 'app.js', 'logger.js' ]

const files2 = fs.readdir("./", (err, files) => {
  if (err) console.log(err);
  else console.log(files); //[ '.git', 'app.js', 'logger.js' ]
});

console.log("async operation returns ", files2); // undefined - readdir doesn't return anything
