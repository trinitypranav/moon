const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log("Received for logging: ", message);
    console.log("Raising an event messageLogged");
    this.emit("messageLogged", { id: 1234, status: message });
  }
}

module.exports = Logger;
