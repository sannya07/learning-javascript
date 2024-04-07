// const coding=["js","ruby","java","py","cpp"];

// const values=coding.forEach( (item)=>{
//     console.log(item);
//     return item
// })
// console.log(values);
// for each does not return values

// filter returns values
const mynums=[1,2,3,4,5,6,7,8,9,10]
const newnums=mynums.filter((num)=>{
    return num>4
    // when we start {} it enters a new scope and we have to mention it
})
console.log(newnums);

const newnums2=[];
mynums.forEach((num)=>{
    if(num>4){
        newnums2.push(num)
    }
})
console.log(newnums2);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

let userbooks=books.filter((bk)=>bk.genre=='History')
let userbooks2=books.filter((bk)=>{
    return bk.publish>2000;
})
console.log(userbooks);
console.log(userbooks2);



