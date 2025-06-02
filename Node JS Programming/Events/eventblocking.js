console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 1000);

const start = Date.now();
while (Date.now() - start < 2000) {
}

console.log("End");
