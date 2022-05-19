// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.

let obj = {
  1: 0,
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  length: 5,
};

function f() {
  for (let i = 1; i < obj.length; i++) {
    obj[i] = obj[i] + 1;
  }
  delete obj["length"];
  for (let x in obj) {
    console.log(`at index ${x} we have value ${obj[x]}`);
  }
}

// f();

// Q - Convert the following function "f" to a pure function and create an impure function g which is a higher order function which take result of f and print it like f does it here.



function f(obj) {
  let nObj = {};
  for (let i = 1; i < obj.length; i++) {
    nObj[i] = obj[i] + 1;
  }
  nObj["5"] = 4;
  return nObj;
}

// f(obj);

// Solution:


function g(obj, cb) {
  let nObj = cb(obj);
  for (let x in nObj) {
    console.log(`at index ${x} we have value ${nObj[x]}`);
  }
}


g(obj, f);

// Solution:

// function f(obj) {
//   let nObj = JSON.parse(JSON.stringify(obj));
//   for (let i = 1; i < nObj.length; i++) {
//     nObj[i] = nObj[i] + 1;
//   }
//   delete nObj["length"];
//   return nObj;
// }

// function g(obj, callback) {
//   obj = callback(obj);
//   for (let x in obj) {
//     console.log(`at index ${x} we have value ${obj[x]}`);
//   }
// }

// g(obj, f);
