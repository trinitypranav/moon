const log = require("./logger");
const path = require("path");
const os = require("os");

// line 1 is a module wrapper function which is an IIFE with params 'exports','__dirname','__filename','require','module'
log("my name is Pranav");

//path module
const pathObj = path.parse(__filename);
console.log(pathObj); //root,dir,base,ext,name

//os module
const totalMemory = os.totalmem();
const freeMemory = os.freemem();
console.log(`Total Memory: ${totalMemory}, Free Memory: ${freeMemory}`);
