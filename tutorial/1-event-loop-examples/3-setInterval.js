//setInterval is asynchronous

setInterval(() => {
  console.log("hello world");
}, 2000);
console.log("I will run first");

//process stays alive unless
//Kill process ctrl + c
//Stop node process
