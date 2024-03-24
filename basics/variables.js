const accountId = 144553
let accountEmail= "sanya@gmail.com"
var accountPassword= "12345"
accountcity="Jaipur"
let accountdata;

// accountId=2
accountEmail="sera@hc.com"
accountPassword="121212"
accountcity="Delhi";

console.log(accountId);
// we cannot change variables declared using const
console.table([accountId,accountEmail,accountPassword,accountcity,accountdata])

//we do not use var anymore instead we use let as it overcomes the block scope issue

let score=33
console.log(typeof(score))
