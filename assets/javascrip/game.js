var randomNumber = Math.floor((Math.random() * 100) + 20);
console.log(randomNumber)

$("#number-to-guess").text(randomNumber);


var object1 = Math.floor((Math.random() * 20) + 1);
var object2 = Math.floor((Math.random() * 20) + 1);
var object3 = Math.floor((Math.random() * 20) + 1);
var object4 = Math.floor((Math.random() * 20) + 1);

var wins = 0
$("#wins").text(wins);
var losses = 0
$("#losses").text(losses);
var result = 0
$("#result").text(result);
 
$(document).ready(function() {

$("#object1").on("click", function(){

     result += object1
    $("#result").text(result);

     win()
})
    

$("#object2").on("click", function(){

   result += object2
 $("#result").text(result);

 win()

})

$("#object3").on("click", function(){

    result += object3
$("#result").text(result);

     win()
    
})

$("#object4").on("click", function(){

    result += object4
$("#result").text(result);
 
  win() 

})

})

function win() {
    if (result === randomNumber) {
        wins++
        $("#wins").text(wins);
        result = 0
        $("#result").text(result);
        alert("you win")
        randomNumber = Math.floor((Math.random() * 100) + 20);
        $("#number-to-guess").text(randomNumber);
        
        
        
    }

    if (result > randomNumber ) {
        losses++
        $("#losses").text(losses);
        result = 0
        $("#result").text(result);
        alert("you lost");
        randomNumber = Math.floor((Math.random() * 100) + 20);
        $("#number-to-guess").text(randomNumber);
        
        
    }  


}
