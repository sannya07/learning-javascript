const coding=["js","cpp","java","rb","py"]

// coding.forEach( function (item) {
//     console.log(item);
// })



// coding.forEach((val)=>{
//     console.log(val)
// })



// function printme(item){
//     console.log(item);
// }
// coding.forEach(printme)


coding.forEach((item,index,arr)=> {
    console.log(item, index ,arr);
})

const mycoding=[
    {
        languagename: "javascript",
        file:"js"
    },
    {
        languagename: "java",
        file:"java"
    },
    {
        languagename: "python",
        file:"py"
    }
]

// iteration over objects
mycoding.forEach((item)=>{
    console.log(item.languagename)
    console.log(item.file)
})
