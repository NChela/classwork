var questions = ["Is the sky blue?", "What os the capital of Latvia?", "What is 2 + 2?"};
                 
var answers = [ "Yes", "Riga", "4", "Hello"];

var makeQuestion = function(question, answer){

var q = document.createElement("p")
    q.innerHTML = "Is the sky blue?";
    document.body.appendChild(q);

var t = document.createElement("t")
    t.type = "text";
    t.placeholder = "Answer";
    document.body.appendChild(t);

var b = document.createElement("b")
    b.innerHTML = "Submit Answer.?";
    b.onclick = function() {

var m = document.createElement("p")
var a = t.value;

if (a =="Yes") {
    m.innerHTML = "Correct!";

} else {
    m.innerHTML = "Nope!";
    
    

                                  

                 