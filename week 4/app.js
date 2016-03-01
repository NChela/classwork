var submit = document.getElementById("answerButton");
submit.onclick = function() {

var messages = [
  'Maybe.', 'Certainly not.', 'I hope so.', 'Not in your wildest dreams.',
  'There is a good chance.', 'Quite likely.', 'I think so.', 'I hope not.',
  'I hope so.', 'Never!', 'Fuhgeddaboudit.', 'Ahaha! Really?!?', 'Pfft.',
  'Sorry, bucko.', 'Hell, yes.', 'Hell to the no.', 'The future is bleak.',
  'The future is uncertain.', 'I would rather not say.', 'Who cares?',
  'Possibly.', 'Never, ever, ever.', 'There is a small chance.', 'Yes!'];

document.getElementById('answerButton').onclick = function () 
{var answer = messages[Math.floor(Math.random() * messages.length)];
document.getElementById('message').innerHTML = answer;
};
    



















}



