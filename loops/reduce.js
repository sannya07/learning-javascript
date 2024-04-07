const mynums=[1,2,3]

const total=mynums.reduce(function (acc,currval){
    console.log(`acc: ${acc} and currval: ${currval}`);
    return acc+currval
},10)
console.log(total)

const mytotal=mynums.reduce((acc,currval)=>acc+currval,0)
console.log(mytotal)