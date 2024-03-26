const name="sanya"
const repocount=5
const gamename=new String('hello-sanya-com')

console.log(name+repocount+"value")

console.log(`hello my name is ${name} and my repo count is ${repocount}`); 

console.log(name[0]);
console.log(gamename[1]);
console.log(name.length);
console.log(gamename.length);
//it doesnt change the orignalvalue
console.log(gamename.toUpperCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('l'));
// we give a starting and ending point
const newstring1=(gamename.substring(0,5));
const newstring2=(gamename.substring(6,10));
// we cannot give negative values
console.log(newstring1);
console.log(newstring2);
// we can give negative values in slice
const anotherstring=gamename.slice(-10,4);
console.log(anotherstring);

const newstringone="  sanya    ";
console.log(newstringone);
// but if we do not want the space then use trim
console.log(newstringone.trim());
// replace
const url="http://hitesh.com/hitesh%20@choudhary";
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(url.includes('sanya'));
// converts to array
console.log(gamename.split('-'))