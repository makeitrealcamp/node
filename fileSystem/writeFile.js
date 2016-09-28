var path = require('path')
var fs = require('fs')
var dirpath =  path.join( path.dirname(__filename) , 'testFiles','nestedDirectory')
var findPhrase = process.argv.indexOf('--phrase') !== -1;


if ( findPhrase ){

  var file = path.join(dirpath, 'iamNew.md')
  var phraseIndex = process.argv.indexOf('--phrase') + 1;
  var phrase = process.argv[phraseIndex];

  fs.writeFile(file, phrase, function(err) {
      if(err) { return console.log(err) }
      console.log('Your phrase have been saved in \'nestedDirectory/iamNew.md\'')
  })

} else {
  console.log('Please input a phrase with --phrase')

}
