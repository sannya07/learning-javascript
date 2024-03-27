const score=400;
console.log(score);
// prototype is number
const balance=new Number(100);
console.log(balance);
// converts to strings
console.log(balance.toString().length);
// gives percission value eg in this case 100.000
console.log(balance.toFixed(3));
// and in this case 100.0
console.log(balance.toFixed(1));

const othernumber=23.8966;
// returns a string
// if we set the precision value to 2 then ans will come as 24
// if we set it to 3 then ans will come 23.9
console.log(othernumber.toPrecision(2));

const hundreds=1000000;
// this makes it more readable by adding commas in indian format 
// standard is US
console.log(hundreds.toLocaleString('en-IN'));


// MATHS
console.log(Math);
// to turn negative numbers to positive we use abs
// positive numbers remain the same
console.log(Math.abs(-4));
// output is 4
console.log(Math.abs(4));
// output is still 4

// we can also round off our values
console.log(Math.round(4.8));
// if we want it to pick the top number we have ceil
console.log(Math.ceil(4.2));
// will give output 5
// if we want it to pick the bottom value we pick floor
console.log(Math.floor(4.8));
// will give output 4

console.log(Math.min(4,5,6,7,2));
console.log(Math.max(4,5,6,7,2));

// math.random gives value always between 0 and 1
console.log(Math.random());
console.log((Math.random()*10)+1);

const min=10;
const max=20;
// ******************************************************************************
// this gives the random number by the range
console.log(Math.floor(Math.random()*(max-min+1)+min));
// ******************************************************************************