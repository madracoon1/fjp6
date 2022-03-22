// Q3
// function rainDance(data){
//     for(let i in data){
//         let arrRain = data[i].rainfall;
//         let sum = 0;
//         for(let val of arrRain){
//             sum+=val;
//         }
//         data[i].rainfall = sum/arrRain.length;
//     }
//     return data;
// }

// Q7
// function decToBin(num){
//     let arr = [];

//     while(num > 0) {
//         arr.push(Math.floor(num % 2));
//         num = Math.floor(num / 2);
//     }

//     for(let i = arr.length-1; i>=0; i--) {
//         console.log(arr[i]);
//     }
// }

// Q8
// function spoon(str){
//     let tmp = str[0];
//     let pos = str.indexOf(" ")+1;
//     let tmp2 = str[pos];
//     let newStr = tmp2 + str.slice(1,pos-1) + " " + tmp + str.slice(pos+1);
//     return newStr;
// }

// Q13

// let users = [ { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, orders: [{ id: 1, name: "GOT Book Series" }], }, { name: "Bhavesh", age: 37, address: { local: "48 DT Row", city: "Hyderabad", state: "AP", }, }, { name: "Jasbir", age: 38, address: { local: "196 Lama Bhavan", city: "Gangtok", state: "Sikkim", }, orders: [ { id: 1, name: "Chair" }, { id: 2, name: "PS5" }, ], }, ];

// function updateUsers(users, userObject, item) { 
//     //write your code here 
//     const check = users.find((user) => {
//         return user.name == userObject.name;
//       });
    
//       if (!check) {
//         users.push(userObject);
//         return users;
//       } else {
//         users.map((itm) => {
//           if( itm.name == userObject.name){
//               if(itm.order){
//                    const item_Check=!!itm.orders.find((i)=>{
//                   return i.name==item
//               })
//               if(item_Check){
//                   console.log("Already ordered!")
//               }else{
//                   itm.orders.push({name:item})
//               }
//               }else{
//                   itm.orders=[{id:1,name:item}]
//               }
             
//           }
//           });
        
//       }
//         console.log(users)
// }

// console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "GOT Book Series" ) ) );

// console.log( JSON.stringify( updateUsers(users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }) ) );

// console.log( JSON.stringify( updateUsers( users, { name: "Ravi", age: 24, address: { local: "25 Iroda", city: "Dehradun", state: "UK", }, }, "Chair" ) ) );

// console.log( JSON.stringify( updateUsers( users, { name: "Rajneesh", age: 34, address: { local: "22 Alaknanda", city: "Dehradun", state: "UK", }, }, "Fan" ) ) );