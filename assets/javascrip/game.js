var randomNumber = Math.floor((Math.random() * 40) + 20);
console.log(randomNumber)

$("#number-to-guess").text(randomNumber);


var object1 = Math.floor((Math.random() * 10) + 1);
var object2 = Math.floor((Math.random() * 10) + 1);
var object3 = Math.floor((Math.random() * 10) + 1);
var object4 = Math.floor((Math.random() * 10) + 1);

var wins = []
var losses = []
var objects = [object1, object2, object3, object4]
console.log(objects)
 var result = 0

 $("#result").text(result);
 console.log(result)

// var resultText = document.getElementById("result");



$(document).ready(function() {

    
// for (var i = 0; i < objects.length; i++) {

    

    



$("#object1").on("click", function(){





 result += object1



 $("#result").text(result);

 


//  resultText.textContent =  result;
win()
})

// var myValue = 0;
// var myArray = [1, 2, 3, 4];
// for (var i = 1; i < myArray.length; i++) {
//     myValue += myArray[i];
// }
    

$("#object2").on("click", function(){

   result += object2
    
    

    $("#result").text(result);

    
    // var result = click1 + click2
    // console.log(result)
// resultText.textContent = "bla " + result;

// resultText.textContent =  result;
win()
})

$("#object3").on("click", function(){

    result += object3
     
     

     $("#result").text(result);

     

     win()
//  resultText.textContent =  result;
    
})

$("#object4").on("click", function(){

    result += object4

  
     $("#result").text(result);
 
 
   win() 
//  resultText.textContent =  result;

})

// if (result > randomNumber ) {
//     alert("you lost");



console.log(randomNumber)
console.log(result)

})

function win() {
    if (result === randomNumber) {
        alert("you win")
        
        
    }

    if (result > randomNumber ) {
        alert("you lost");
        
        
    }  


}
