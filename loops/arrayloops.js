// for of
// ["","",""]
// [{},{},{}]

const arr=[1,2,3,4,5]
for (const i of arr) {
    console.log(i);
}

const greetings="hello world";
for (const i of greetings) {
    console.log(i);
}

// maps

const map=new Map()
// map objects are collection of key value pairs
// but they only have unique values

map.set('IN', "india")
map.set('IN', "india")
map.set('FR', "france")
map.set('USA', "United States of America")
console.log(map);

for (const i of map) {
    console.log(i);
}

for (const [key,value] of map) {
    console.log(key,':-',value);
}

const myobj={
    "game1":'NFS',
    "game2":'spiderman'
}
// this is not iterable with for of loop

// so we use for in loop

for (const key in myobj) {
    console.log(key);
    console.log(myobj[key]);
    // returns the keys
}

const programming=["js","rb","py","java","cpp"]
for(const key in programming){
    console.log(programming[key]);
}