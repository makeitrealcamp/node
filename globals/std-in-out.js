// Tu codigo va aca

var questions = [
  "What is your name?",
  "What is your fav hobby?",
  "What is your preferred programming language?"
];




//var wName = process.stdout.write(questions[0]);

var index = 0;
function askQuestion(questionsArr){
  process.stdout.write(questionsArr[index])
  if (index < 2){ index+=1;}
  console.log(index)
  if (index === 2){
    console.log('jajaja')
  }

}

askQuestion(questions);

process.stdin.on('data', function(data){
  askQuestion(questions);
})
  process.exit()


  // var nameAnswer = data.toString().trim()
  //  process.stdout.write(questions[1])
  // console.log(nameAnswer);
  //  process.exit()
