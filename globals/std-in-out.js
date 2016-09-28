// // Tu codigo va aca
//
var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];

var answers = new Array;

function readAnswer(){
  return answers;
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

  if (answers.length !== questions.length ){
    addAnswer(data)
    console.log( readQuestion(answers.length) )
  }

  if (answers.length === questions.length){
    process.exit()
  }

}

console.log( readQuestion(answers.length) )
process.stdin.on('data', function(data){
  cliProgram(data)
})

process.on('exit', () => {
  console.log( readAnswer() )
});
