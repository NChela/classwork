var submit = document.getElementById("submit");
submit.onclick = function() {
    
var answer = document.getElementById("answer").value;
console.log(answer);    
if  (answer == 'The letter "e"'){
   greeting = "Correct!"
   
   

} else {
    
  greeting = "Nope. Sorry"
}
    
    
    
	
var message = document.getElementById("message");
message.innerHTML = greeting; 	

	
};