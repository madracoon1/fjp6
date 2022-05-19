// Q - Write a function f that returns product of x and y with both of the following function calls

console.log(f(5, 3))
console.log(f(5)(3))


function f(x, y){
  if(y == undefined){
    return function(y){
      return y * x;
    }
  }
  else{
    return y * x;
  }
}


// Solution:

// function f(y, x) {
//   if (arguments.length == 1) {
//     return function (x) {
//       return y * x;
//     };
//   } else {
//     return x * y;
//   }
// }

