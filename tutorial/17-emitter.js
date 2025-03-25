const EventEmitter = require("events");

const customEmitter = new EventEmitter();

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id:${id}`);
});

//We can have as many methods as we want
customEmitter.on("response", () => {
  console.log(`some other logic here`);
});

customEmitter.emit("response", "John", 34);

//The order matters, so the first
//one will be executed first
//The emit needs to be put after the on
