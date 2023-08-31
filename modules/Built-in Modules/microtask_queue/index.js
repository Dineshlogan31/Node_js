//Experiment 1
//first all sync method will execute and then async nextTick will execute
console.log("first 1");
process.nextTick(() => {
  console.log("This is first next 1");
});
console.log("Second 2");

//Experiment 2
//nextTick queue is first priority in the event loop
process.nextTick(() => {
  console.log("This is first next 1");
});

//after the nextTick promise will get executed in event loop
Promise.resolve().then(() => console.log("This is first promise 1"));

//Experiment 3
//first all nextTick will execute
//and then inner nextTick will execute
//then all promise will execute
//then inner promise nextTick will execute
/*
In the context of JavaScript, the process.nextTick method is a part of the Node.js
runtime environment, not a standard feature of the language itself. It's used to
schedule a callback function to be executed in the next iteration of the event loop,
immediately after the current operation completes.
*/
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
