let a=10
const b=20
var c=30

// var gives a problem with scope

console.log(a);
console.log(b);
console.log(c);
// we have block scope and global scope

// global scope is declared normally
// block scope is inside a block {}

// nested scope
function one(){
    const username="sanya"
    function two(){
        const website="youtube"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
// child function can access parents function variables but not visa versa
// same with any nested case example ifs

function addone(num){
    return num+1
}

const addtwo=function(num){
    return num+2
}
// this is also called expression

// both are ways to declare functions
