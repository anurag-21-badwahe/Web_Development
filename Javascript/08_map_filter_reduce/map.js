let arr = [34,545,643,343];
//console.log(arr);
let a = arr.map((element,index,array)=>{
    console.log(element,index,array);
})

console.log("---------------")

let b = arr.map((element,index,array)=>{
    console.log(element,index,array);
    return index + element;
})
console.log(b);