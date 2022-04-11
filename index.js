var player1 = Math.random();
var player2 = Math.random();
player1 *= 6;
player2 *= 6;
player1 = Math.floor(player1) + 1;
player2 = Math.floor(player2) + 1;
var img1= "images/dice"+player1+".png";
var img2= "images/dice"+player2+".png";
// console.log("PLAYER1: "+ player1);
// console.log("PLAYER2: " +player2);
console.log(img1);
console.log(img2);
document.getElementById("pl1").src = img1;
document.getElementById("pl2").src = img2;
if (player1 > player2) {
    document.querySelector("h1").innerHTML = "<i class='fas fa-trophy'></i> Player 1 Wins!!"
}
else if (player1 < player2) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!! <i class='fas fa-trophy'></i>"
}
if (player1 == player2) {
    document.querySelector("h1").innerHTML = "Draw!!"
}
