var randomNumber = Math.floor((Math.random() * 100) + 1);
console.log(randomNumber)

$("#number-to-guess").text(randomNumber);


var object1 = Math.floor((Math.random() * 20) + 1);
var object2 = Math.floor((Math.random() * 20) + 1);
var object3 = Math.floor((Math.random() * 20) + 1);
var object4 = Math.floor((Math.random() * 20) + 1);

var wins = []
var losses = []
var objects = [object1, object2, object3, object4]
console.log(objects)
 var result = 0
 console.log(result)

var resultText = document.getElementById("result");



$(document).ready(function() {

    
// for (var i = 0; i < objects.length; i++) {

$("#object1").on("click", function(){





 click1 = object1
 console.log(click1)




})

    

$("#object2").on("click", function(){

    click2 = object2
    
    console.log(click2)


//     var result = click1 + click2
//     console.log(result)
// resultText.textContent = "bla " + result;



})

    
//     var result = click1 + click2
//     console.log(result)
// resultText.textContent = "bla " + result;


// }
})
