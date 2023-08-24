/*this Pizza-order and Pizza-Shop and Drink-machine files are understanding purpose of
how we have to create custom events*/

const pizzaShop = require("./Pizza-shop");
const DrinkMachine = require("./drink-machine");

//create instance for pizzaShop
const pizza = new pizzaShop();
const drink = new DrinkMachine();

//if call the order method in PizzaShop class the event will be emitted
//for that event we write respond in on method
pizza.on("order", (size, toping) => {
  console.log(`order received! baking a${size} pizza with ${toping}`);
  drink.serveDrink(size);
});

pizza.order("large", "panner");
pizza.displayOrderNumber();
