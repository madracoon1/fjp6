let arr = [1, 2, 3, 4];

let nArr = arr.reduce(function(total, curr){
    return total + curr;
})

console.log(nArr);