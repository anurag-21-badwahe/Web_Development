//               GUESS THE NUMBER            

let random = Math.random() * 100;
random = Math.floor(random);
console.log(random);
let guess;

while (guess != random) {
  guess = prompt("Enter any Number");
  if (guess < random) {
    console.log("Your Guessed Number is Less than original number")
  }

  else if (guess > random) {
    console.log("Your Guessed Number is Greater than original number")
  }

  else if (guess == random) {
    console.log("Congo You Won 🥳🥳🥳🥳🥳🥳🥳🥳")
  }

}