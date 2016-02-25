var submit = document.getElementById("submit");
submit.onclick = function() {
    
var response = [];    
    
    
var responseElements = document.getElementsByClassName("response");
console.log(response); 
    

    
if  (response == 'The letter "e"'){
   greeting = "Correct!"
   
   

} else {
    
  greeting = "Nope. Sorry"
}
    
    
    
var message = document.getElementById("message");
message.innerHTML = greeting; 	

	
};