// const useremail ="sanya@gmail.com"
// // empty array ,"0","false",'false'," ",{},function(){} is truthy
// // false,0,-0,bigint 0n,empty string,Nan, undefined, null are falsy
// if(useremail){
//     console.log("got user email");
// }
// else{
//     console.log("no user email");
// }


// const useremail=[];
// if(useremail.length===0){
//     console.log("array is empty")
// }


const emptyobj={}

if(Object.keys(emptyobj).length===0){
    console.log("object is empty");
}


// false==0 is true
// false=='' is true
// 0=='' is also true

// NULLISH COALECING OPERATOR (??)

let val1;
// val1= 5 ?? 10
val1=null??10
console.log(val1);

let var1;
var1= undefined?? 15
console.log(var1);

let val2;
val2=null??5??10;
console.log(val2);



// ternary 
// condition? true:false 

const price=100
price>=80? console.log("good"):console.log("bad");