// <,>,<=,>=,==,!=,===

if(2 =='2'){
    console.log("executed")
}
// it executes
if(2 ==='2'){
    console.log("executed")
}
// it doesnt
// === also checks datatypes

const score=200;
if(score>100){
    const power="fly"
    console.log(`user power ${power}`);
    // this will execute
}
// console.log(`user power ${power}`);
// this will give error as power does not have global scope
// if we would have used var instead of let const it would have run but would be wrong

// shorthand 

const balance=1000;
if(balance>500) console.log("test"); 
// this is implicit scope
