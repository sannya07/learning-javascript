function saymyname(){
    console.log('s');
    console.log('a');
    console.log('n');
    console.log('y');
    console.log('a');
}
saymyname()
// parameters
function addtwonumbers(num1,num2){
    console.log(num1+num2);
}

// arguments
const result=addtwonumbers(3,2); 
// this will give ans
console.log(result) 
// this will give undefined

function add2numbers(num1,num2){
    let result=num1+num2
    return result
}

console.log(add2numbers(3,2)) 

function loginusermessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// if we write return then code stops running

console.log(loginusermessage("sanya"));
// if we wouldnt have passed any arguments then it will say undefined just logged in
console.log(loginusermessage());

// undefined is considered false 
// empty string is also considered false

