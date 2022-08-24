"use strict";

// 1
const promise = new Promise(function (resolve, reject) {
  setTimeout(() => resolve("done"), 5000);
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch(() => {
    throw new Error("error");
  })
  .finally(() => {
    console.log("Promise was finished!");
  });

//   2
try {
  const promise = new Promise(function (resolve, reject) {
    setTimeout(() => resolve("done"), 5000);
  });
  console.log("done");
} catch {
  throw new Error("error");
} finally {
  console.log("Promise was finished!");
}
