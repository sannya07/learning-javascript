function calculateprice(...num1){
    // ... is rest operator 
    return num1;
}

console.log(calculateprice(1000,110,45,800))
// since rest operator was used this will return an array

const user={
    username: "sanya",
    id:1
}

function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and id is ${anyobject.id}`)
}
handleobject(user);
handleobject({
    username:"sam",
    id:4
})

const myarr=[1,2,3,5,4,7]
function return2ndvalue(array){
    return array[1]
}

console.log(return2ndvalue(myarr));