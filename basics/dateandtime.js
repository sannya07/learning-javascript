// javascript dates start from january 1,1970,UTC
// we have a date and time proposal as temporal

let mydate=new Date();
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toLocaleString());
console.log(typeof mydate);
// date is an object

let mycreateddate=new Date(2023,1,23);
// month starts from zero in javascript
// similarly we can also set date and time both
console.log(mycreateddate.toDateString());


// but if we write it in the format such that yy-mm-dd then months start from 1

let newdate=new Date("2023-01-07");
console.log(newdate.toLocaleString);

let mytimestamp=Date.now();
// this gives the current time but its in miliseconds
console.log(mytimestamp);
console.log(mycreateddate.getTime());

// to get the value in seconds 
console.log(Math.floor(Date.now()/1000));

let projectdate=new Date();
console.log(projectdate);
console.log(projectdate.getMonth()+1);
console.log(projectdate.getDay());

projectdate.toLocaleString('default',{
    weekday:"long"
})