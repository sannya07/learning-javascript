const user={
    username: "sanya",
    id: 1,

    welcomemessage: function(){
        // this means current context
        console.log(`${this.username} , welcome to the website`);
        console.log(this)
    }
}

user.welcomemessage()
user.username="sam";
user.welcomemessage()
// if we didnt have changed it to sam then this would have given nothing as there would have been no context
console.log(this);

// arrow function

// function chai(){
//     let username="hitesh";
//     console.log(this)
//     // gives loads of values
//     console.log(this.username);
//     // this gives undefined
// }

// chai()

const chai=()=>{
    let userid=2;
    console.log(this.userid);
    // will give empty {}
}

// ()=>{}
const addtwo=(num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(4,5))

// implicte return
const subtwo=(num1,num2)=>(num1-num2)
console.log(subtwo(14,5))

// to return object it should be wrapped between {}

