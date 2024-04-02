// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS(IIFE)
// (function definition)(function calling)
// it prevents global scope pollution
(
    function chai(){
        // named IIFE
        console.log("DB connected");
    }
)();
// we have to use semicolan

( (name)=>{
    // simple iife
    console.log(`DB 2 connected ${name}`);
})('shivangi');

