var president = document.getElementById("president");
president.onclick = function() {
    
var answer = document.getElementById("answer").value;
console.log(answer);    
if  (answer == 'George Washington'){
   greeting = "YES! You are correct!!"
   
   

} else {
    
  greeting = "Nope. Sorry try again."
}
    

    
	
var message1 = document.getElementById("message1");
message1.innerHTML = greeting; 
    
};    
    


var country = document.getElementById("country");
country.onclick = function() {
    
var land = document.getElementById("land").value;
console.log(land);    
if  (land == 'Africa'){
   greeting = "CORRECT! Good job."
   
   

} else {
    
  greeting = "Incorrect. Try again."
}
    

    
	
var message2 = document.getElementById("message2");
message2.innerHTML = greeting; 	
    

	
};



var ball = document.getElementById("ball");
ball.onclick = function() {
    
var ring = document.getElementById("ring").value;
console.log(ring);    
if  (ring == '6'){
   greeting = "You're right!!"
   
   

} else {
    
  greeting = "Wrong. Try again."
}
    

    
	
var message3 = document.getElementById("message3");
message3.innerHTML = greeting; 	
    

	
};