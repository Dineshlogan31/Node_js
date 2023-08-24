//event module given eventemitter class for encapsulated purpose if we want to emit an event we have to create object for eventemitter
const EventEmitter = require("node:events");

//this is object or instance for EventEmitter
const emitter = new EventEmitter();

//once the event is emitted the registered on method respond for that emitter
//first one is event name and second it will accept callback for respond that event once it is emittted
emitter.on("order-pizza", (size, toping) => {
  console.log(`order received! baking a${size} pizza with ${toping}`);
});

//we can register multiple respond for that one emitter based on the condition
emitter.on("order-pizza", (size) => {
  if (size) {
    console.log("ordered large size pizza");
  }
});

//this will execute first because this is synchronous function
console.log("Do work before emittter");

//first we will emit the event && first one is event name followed values are arguments for callback
emitter.emit("order-pizza", "large", "mushroom");

//callbacks are executed delayed or particular time or require events are occured
