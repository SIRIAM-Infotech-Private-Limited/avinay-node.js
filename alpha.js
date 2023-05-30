const work = require('./work')
// print statement
console.log("hello word!!");

// external package
 const colors=require('colors');
 console.log("package.json".green);

const fs=require('fs');
console.warn("-->" , __dirname)
fs.writeFileSync("hello.txt", "hello world!")





// variable 
var x=10;
var t=60;
var u=90;
console.log(x+t+u);

// for loop
for(i=0;i<=10;i++){
    console.log(i);
}
//  array
const arr=[20,50,70];
console.log(work);
let result= arr.filter((item)=>{
    return item>50
})
console.warn(result)