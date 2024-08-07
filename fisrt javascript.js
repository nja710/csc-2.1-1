function firstAlert()
{
 alert("you must believe in yourself!");
}

function avg(num1, num2)
{
var result;
result = (num1, num2)/2.0;
//DONT EVER USE DOCUMENT.WRITE
//document.write("average of "+num1 + " " + num2 + " = + "result);
document.getElementById("Average").innerHTML = "average of "+num1 + " " + num2 + " =  "+ result;
}

function play()
{
    alert("play");
    var die1 = Math.ceil(Math.random() * 10);
    var die2 = Math.ceil(Math.random() * 10);
    var sum = die1 + die2;
    document.getElementById("Sumres").innerHTML = "sum = " + sum;
document.getElementById("First Hand").innerHTML = die1;
document.getElementById("Second Hand").innerHTML = die2;
    if (sum ==5 || sum == 10)
{
   
    document.getElementById("finalRes").innerHTML = "unfortunate"

}


else
document.getElementById("finalRes").innerHTML = "sorry try again!";
}