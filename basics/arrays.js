// storing a collection of multiple items under a single variable name 
const myarr=[1,2,3,4,5];
const myheroes=["spiderman","batman"]
const arr2=new Array(2,3,4,8,9);
// can be of mixed datatypes
// they are resizable
// they make shallow copies: they share the same reference point
console.log(arr2[0]);

arr2.push(11);
arr2.push(70);
console.log(arr2);
arr2.pop();
console.log(arr2);

// there is an unshift operator 
arr2.unshift(10);
// element gets inserted at zero index
console.log(arr2);
arr2.shift();
// this is like pop
console.log(arr2);

console.log(arr2.includes(10));
console.log(arr2.indexOf(4));
console.log(arr2.indexOf(10)); 
// will give -1 as 10 does not exist in the array

const newarr=arr2.join()
// adds all the elements of the array as a string seperated by comma
console.log(newarr);
console.log(typeof newarr);


// slice and splice
console.log("A",arr2);
// slice function returns a section of the array
const n1=arr2.slice(1,3);
console.log(n1);
console.log("B",arr2);
const n2=arr2.splice(1,3);
console.log("C",arr2);
console.log(n2);
// in splice last range is included
// in splice the orginal array is manipulated and we get everything other than the spliced elements

const marvel=["thor","Ironman","Spiderman"];
const dc=["superman","joker","batman"];
marvel.push(dc);
// this gives an array inside an array and it up
console.log(marvel);
console.log(marvel[3][1]);
// this gives new array and it actually puts elements with comma seperation
const all=marvel.concat(dc);
console.log(all);

const allnew=[...marvel,...dc];
console.log(allnew);

const anotherarray=[1,2,3,[4,5,6],7[6,7,[4,5]]];
// this will return one single array
const useable=anotherarray.flat(Infinity);
console.log(useable);

console.log(Array.isArray("sanya"));
console.log(Array.from("sanya"));
console.log(Array.from({name:"sanya"}));

let s1=100;
let s2=200;
let s3=300;
console.log(Array.of(s1,s2,s3))