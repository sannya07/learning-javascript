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