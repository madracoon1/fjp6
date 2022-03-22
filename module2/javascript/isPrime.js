let n = 12;
let sum = 0;

for(let i = 2; i*i<=n; i++){
    if(n%i===0){
        console.log("prime");
        sum++;
        break;
    }    
}

if(sum!=0){
    console.log("not prime");
}
else{
    console.log("prime");
}

