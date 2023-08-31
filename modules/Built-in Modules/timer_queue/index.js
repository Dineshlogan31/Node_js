//first nextTick queue
//second priority promise callback
// third priority is timer queue like setTimeout

//important
/*
callbacks in microtask queue are executed in between the execution of callbacks in the timer queue.
if interval is given they are executed in interval order.
Timer queue callbacks are executed in FirstInFirstOut(FIFO) order
*/
setTimeout(() => console.log("this is setTimeout 1"), 0);
setTimeout(() => {
  console.log("this is setTimeout 2");
  process.nextTick(() => {
    console.log("This is inner nextTick 1");
  });
}, 0);
setTimeout(() => console.log("this is setTimeout 3"), 0);
process.nextTick(() => {
  console.log("This is first next 1");
});
process.nextTick(() => {
  console.log("This is first next 2");
  process.nextTick(() => {
    console.log("This is inner nextTick 1");
  });
});
process.nextTick(() => {
  console.log("This is first next 3");
});

Promise.resolve().then(() => console.log("This is first promise 1"));
Promise.resolve().then(() => {
  console.log("This is first promise 2");
  Promise.resolve().then(() => console.log("This is inner Promise nextTick 1"));
});
Promise.resolve().then(() => console.log("This is first promise 3"));
