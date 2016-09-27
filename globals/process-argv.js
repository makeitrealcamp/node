
/*var findUser = process.argv.indexOf('--user') === -1;
var findGreeting = process.argv.indexOf('--greeting') === -1;
console.log(findUser,findGreeting)


if ( findUser || findGreeting ){
  console.log('Algo salio mal')
}else{
  var greetingIndex = process.argv.indexOf('--greeting') + 1;
  var greeting = process.argv[greetingIndex];

  var userIndex = process.argv.indexOf('--user') + 1;
  var user = process.argv[userIndex];

  console.log(`Hola ${user}, ${greeting}`)
}*/

var findUser = process.argv.indexOf('--user')=== -1;
var findGreeting = process.argv.indexOf('--greeting'=== -1);
console.log(findUser,findGreeting)

if(findUser || findGreeting ){
  var greetingIndex = process.argv.indexOf('--greeting') + 1;
  var greeting = process.argv[greetingIndex];

  var userIndex = process.argv.indexOf('--user') + 1;
  var user = process.argv[userIndex];

  console.log(`Hola ${user}, ${greeting}`)
}else {
  console.log('Algo salio mal')
}
