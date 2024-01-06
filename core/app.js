const Logger = require("./logger");
const path = require("path");
const os = require("os");
const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello, you are connected to my server on port 8080");
    res.end();
  }

  if (req.url === "/courses") {
    res.write(JSON.stringify(["java", "javascript", "node"]));
    res.end();
  }
});
server.listen(8080);
console.log("Listening on port 8080");

// line 1 is a module wrapper function which is an IIFE with params 'exports','__dirname','__filename','require','module'
const logger = new Logger();
logger.on("messageLogged", (e) => {
  console.log("Catching an event messageLogged");
  console.log("Caught message event ", e);
});
logger.log("my name is Pranav");

//path module
const pathObj = path.parse(__filename);
console.log("path is ", pathObj); //root,dir,base,ext,name

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
