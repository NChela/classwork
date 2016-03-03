var submit = document.getElementById("submit");
submit.onclick = function() {
    
var answer = document.getElementById("answer").value;
console.log(answer);    
if  (answer == 'The letter "e"'){
   greeting = "Correct!"
   
   

} else {
    
  greeting = "Nope. Sorry"
}
    
var answer2 = document.getElementById("answer2").value;
console.log(answer2);    
if  (answer == 'The letter "e"'){
   greeting = "Correct!"
   
   

} else {
    
  greeting = "Nope. Sorry"
}
    

var answer3 = document.getElementById("answer3").value;
console.log(answer3);    
if  (answer == 'The letter "e"'){
   greeting = "Correct!"
   
   

} else {
    
  greeting = "Nope. Sorry"
}
    
    
    
	
var message = document.getElementById("message");
message.innerHTML = greeting; 	

	
};