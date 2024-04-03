// for
// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }

// we cannot access this element outside the loop

// for (let i = 0; i <=10; i++) {
//     console.log(`outer loop value ${i}`);
//     for (let j = 0; j < 10; j++) {
//         const element =j;
//         console.log(`inner loop value ${j} and outer loop ${i}`);
//     }
    
// }

// let myarray=["flash","spiderman","batman"]

// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

// break and continue

for (let index = 0; index < 20; index++) {
    if(index==5){
        break;
    }
    console.log(`value of i is ${index}`);
}

for (let index = 0; index < 20; index++) {
    if(index==5){
        continue;
        // 5 is skipped
    }
    console.log(`value of i is ${index}`);
}