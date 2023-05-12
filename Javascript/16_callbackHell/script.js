
// asynchorous function

// console.log('Start')
// setTimeout(function(){
//   console.log("Hello")
// },2000);

// console.log('End')


// ---------------------- //



//Callback Hell

function getCheese(callback){
   setTimeout(function(){
    const cheese = "🧀";
    console.log("Finally i got the cheese",cheese)
    callback(cheese);
   },2000)
};

function makeDough(cheese,callback){
    setTimeout(function(){
     const dough = cheese + "🫓";
     console.log("Finally i got the dough ",dough)
     callback(dough);
    },2000)
 };

 function bakePizza(dough,callback){
    setTimeout(function(){
     const pizza = dough+"🍕";
     console.log("Finally i got the pizza ",pizza)
     callback(pizza);
    },2000)
 };

getCheese((cheese)=>{
    makeDough(cheese,(dough)=>{
        bakePizza(dough,(pizza)=>{
            console.log("here is pizza",pizza)
        });
    });
});