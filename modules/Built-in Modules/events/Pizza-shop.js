const EventEmitter = require("node:events");
//create class for pizzaorder and inherit the EventEmitter class through
//the EventEmitter class emit the event from the pizzaShop class and respond the
//event in Pizza-order.js
class pizzaShop extends EventEmitter {
  constructor() {
    //this super keyword invoke or call the super class constructor as of now super class is EventEmitter
    super();
    this.orderNumber = 0;
  }

  order(size, toping) {
    this.orderNumber++;
    this.emit("order", size, toping);
  }

  displayOrderNumber() {
    console.log(`Current order number is ${this.orderNumber}`);
  }
}

module.exports = pizzaShop;
