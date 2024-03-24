"use strict";
// this treats all JS code as per the new version
// even if we dont write this it will be considered as the new version 

// alert(3+3)
// this gives us a pop up in console but we are using node js not browser

// check mdn for documentation
// official documentation is ECMA

let name="sanya"
let age=20
let isloggedin=false
// decimal is also considered number


//primitive:
// number-range 2 power 53ish
// bigint
// string
// boolean
// null->stand alone value, it is empty value or zero
// undefined->value is not defined
// symbol->unique 

//non primitive or refernced
// object
// arrays
// functions

console.log(typeof null) 
// this gives object

console.log(typeof undefined)
// this gives undefined only

let score="33abc"
console.log(typeof(score))

let valueinnumber=Number(score)
// similarly we can convert to string or boolean as well 
console.log(typeof(valueinnumber))
console.log(valueinnumber)
// this gives NaN who has datatype number

//"33"->33
// "33abc"->NaN
// true->1

// operations
let value=3
let negvalue=-(value)
console.log(negvalue)

let str1="hello"
let str2="world"
let str3=str1+str2
console.log(str3)
// concat


console.log("1"+2+2) //string
console.log(1+2+"2") //number

console.log(+true) //gives 1

// check prefix and postfix values

// comparisons
console.log(2>1)
// will give ans in true or false
// datatypes should be the same
// null is greater than or equal to zero

// ===
// this checks strictly and checks datatypes

const id=symbol('123')
const secondid=symbol('123')
// these 2 are not the same

// memory
// stacks(primitive) and heaps(non-primitive)


