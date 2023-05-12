console.log("S stands for snake");
console.log("W stands for water");
console.log("G stands for gun");
let choice = ['S','W','G'];
let comp = Math.floor(Math.random() * choice.length);
comp = choice[comp];
console.log(comp);
console.log("________________________")
let player = prompt("Choose any one word from S, W, G");

if (player == 'S' && comp == 'W'){
    console.log("Hurrrah! You Won")
}
else if (player == 'S' && comp == 'G'){
    console.log("Oops! You Lose")
}
else if (player == 'W' && comp == 'S'){
    console.log("Oops! You Lose")
}
else if (player == 'W' && comp == 'G'){
    console.log("Hurrrah You Won")
}
else if (player == 'G' && comp == 'S'){
    console.log("Oops! You Lose")
}
else if (player == 'G' && comp == 'W'){
    console.log("Oops! You Lose")
}

