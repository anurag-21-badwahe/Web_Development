const calculator = (a,b,operation) =>{
       return operation(a,b);
};

const sum = calculator(3,4,function(num1,num2){
    return num1+num2;
});

console.log(sum);

const sub = calculator(10,3,function(num1,num2){
    return num1-num2;
});

console.log(sub);