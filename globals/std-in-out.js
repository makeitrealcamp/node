// // Tu codigo va aca
//
var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = new Array;

function readAnswer(){
  return `Go to ${answers[1]} ${answers[0]}, you can end writing ${answers[2]} later`
}

function readQuestion(i){
  return questions[i];
}

function cleanInput(data){
  return data.toString().trim()
}

function addAnswer(data){
  answers.push(cleanInput(data))
}

function cliProgram(data){
  if ( answers.length !== questions.length ) { addAnswer(data) }
  if ( answers.length === questions.length ) { process.exit() }
  console.log( readQuestion(answers.length) )
}

process.stdin.on('data', function(data){
  cliProgram(data)
})

process.on('exit', () => {
  console.log( readAnswer() )
});

console.log( readQuestion(answers.length) )
