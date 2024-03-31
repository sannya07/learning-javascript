// singleton objects

const tinderuser=new Object();
tinderuser.id="123abc"
tinderuser.name="sammy"
tinderuser.isloggedin="false"
// console.log(tinderuser);

// we can have nested objects as well
const regularuser={
    email:"some@gmail.com",
    fullname: {
        userfullname:{
            firstname:"hitesh",
            lastname:"verma"
        }
    }
}

console.log(regularuser.fullname);
// we will get full object

// if we want to access object inside an object use dot
console.log(regularuser.fullname.userfullname.firstname);

const obj1={
    1:'a',
    2:'b'
}

const obj2={
    3:'c',
    4:'d'
}

const obj3={obj1,obj2};
console.log(obj3);
// this will give object inside an object

// to avoid this issue we have
// this green empty {} is the target and obj1 and obj2 are sources
const obj4=Object.assign({},obj1,obj2);
console.log(obj4);

// another way to do this is
const obj5={...obj1,...obj2};
console.log(obj5);

const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"s@gmail.com"
    },
    {
        id:3,
        email:"a@gmail.com"
    }
]

console.log(users[1].email);

console.log(tinderuser);
console.log(Object.keys(tinderuser));
// returns an array of keys
console.log(Object.values(tinderuser));
// returns an array of values
console.log(Object.entries(tinderuser));
// returns nested array of key and value


console.log(tinderuser.hasOwnProperty('isloggedin'))