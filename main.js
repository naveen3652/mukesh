var RandomNumber1 = Math.floor(Math.random()*6)+1;
var one = document.getElementsByClassName("img1")[0];
one.setAttribute("src","./images/dice"+RandomNumber1+".png");

var RandomNumber2 = Math.floor(Math.random()*6)+1;
var two = document.getElementsByClassName("img2")[0];
two.setAttribute("src","./images/dice"+RandomNumber2+".png");

var text = "Match Draw";
if (RandomNumber1 === RandomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = text;
}else if (RandomNumber1>RandomNumber2){
    document.getElementsByTagName("h1")[0].innerHTML = "Player 1  Wins....";
}else{
    document.getElementsByTagName("h1")[0].innerHTML ="Player 2 Wins..."
}