var randomnum=Math.floor(Math.random()*6) +1;

var randomdiceimage="dice"+randomnum +".png";

var randomimagesource="images/"+randomdiceimage;

var image1= document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);


var randomnum1=Math.floor(Math.random()*6)+1;

var randomdiceimage1="dice"+randomnum1+".png";

var randomimagesource1="images/"+randomdiceimage1;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimagesource1);

if(randomnum>randomnum1)
{
  document.querySelector("h1").innerHTML="Player 1 wins!"
}
else if (randomnum1>randomnum)
 {
  document.querySelector("h1").innerHTML="Player 2 wins!"
}
else{
  document.querySelector("h1").innerHTML="Draw!"
}
