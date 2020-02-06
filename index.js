// "My Code"
// var randomNumber1 = Math.random()*6;
// randomNumber1 = Math.floor(randomNumber1) + 1;
//
// var randomNumber2 = Math.random()*6;
// randomNumber2 = Math.floor(randomNumber2) + 1;
//
// if (randomNumber1 === 1){
//   document.querySelector(".img1").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber1 === 2){
//   document.querySelector(".img1").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber1 === 3){
//   document.querySelector(".img1").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber1 === 4){
//   document.querySelector(".img1").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber1 === 5){
//   document.querySelector(".img1").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber1 === 6){
//   document.querySelector(".img1").setAttribute("src","images/dice6.png");
// }
//
//
// if (randomNumber2 === 1){
//   document.querySelector(".img2").setAttribute("src","images/dice1.png");
// }
// else if (randomNumber2 === 2){
//   document.querySelector(".img2").setAttribute("src","images/dice2.png");
// }
// else if (randomNumber2 === 3){
//   document.querySelector(".img2").setAttribute("src","images/dice3.png");
// }
// else if (randomNumber2 === 4){
//   document.querySelector(".img2").setAttribute("src","images/dice4.png");
// }
// else if (randomNumber2 === 5){
//   document.querySelector(".img2").setAttribute("src","images/dice5.png");
// }
// else if (randomNumber2 === 6){
//   document.querySelector(".img2").setAttribute("src","images/dice6.png");
// }


// For Image 1
var randomNumber1 = Math.floor(Math.random()*6) + 1;
var randomImageSrc1 = "images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",randomImageSrc1);

// For Image 2
var randomNumber2 = Math.floor(Math.random()*6) + 1;
var randomImageSrc2 = "images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",randomImageSrc2);

// Winner
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "🚩Player 1 Wins!";
}
else if(randomNumber1<randomNumber2){
  document.querySelector("h1").textContent = "Player 2 Wins!🚩";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
