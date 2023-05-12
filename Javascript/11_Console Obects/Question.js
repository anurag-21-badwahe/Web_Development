// Compare the time of for and while loop
console.time("for loop")
for(let i = 0; i < 30; i++){
}
console.timeEnd("for loop");


console.time("While loop")
let i = 0;
while(i < 30){
    i++;
}
console.timeEnd("While loop");