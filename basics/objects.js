// A singleton object is created using constructors
// object literals
const mysym= Symbol("key1")
// how to create objects

const jsuser= {
    name:"sanya",
    "full name":"sanya kansal",
    age:20,
    location:'Chd',
    email:'sanya@gmail.com',
    // this is how we declare a symbol as a property of object
    [mysym]:"mykey1",
    isloggedin: false,
    lastloggedindays:["Monday","Tuesday"]
}
// singleton object
// Object.create

// how to access objects
console.log(jsuser.email)
console.log(jsuser["email"])
// full name can only be accessed this way
console.log(jsuser["full name"])
console.log(jsuser[mysym])

jsuser.email="sanya@chatgpt.com"
console.log(jsuser.email)


// print the object
console.log(jsuser)

jsuser.greetings=function(){
    console.log("hello user");
}

console.log(jsuser.greetings);
// this gives undefined

console.log(jsuser.greetings());


jsuser.greetingstwo=function(){
    console.log(`hello Js User, ${this.name}`);
    // these are backticks
}
console.log(jsuser.greetingstwo());
// this freezes the object that means that the object cannot be changed further
Object.freeze(jsuser);