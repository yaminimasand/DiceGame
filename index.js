var numberOne= Math.floor(Math.random() * 6) + 1;
var randomImgSource = "images/dice" + numberOne+".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImgSource);

var numberTwo = Math.floor(Math.random() * 6) + 1;
var randomImgSource2 = "images/dice" + numberTwo + ".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src", randomImgSource2);

if (numberOne > numberTwo) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}
else if (numberTwo> numberOne) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector("h1").innerHTML = "Draw!";
}
