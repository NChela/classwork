var userInput = [];
var answers = ["B", "D", "A", "C", "C", "D", "A", "C", "A", "B"]; 

function getScore(){
var score=0;
var numQuestions=10;

for (var i = 0; i < numQuestions; i++){
console.log(document.getElementsByName("question" + i));    

if (userInput[i] == answers[i]){
score += 1;
}
else{
score += 0;
}

}
return score;
}
function returnScore(){
alert("Your score is "+getScore()+"/10");
}