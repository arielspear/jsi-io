
module.exports.words = {};

var fs = require('fs');
var options = { encoding: 'utf8' };

var list1 = fs.readFile('./file1.txt', options, function(err, read){
console.log(read); 
fs.readFile('./file2.txt', options, function(err, read){
console.log(read);
})});
// var list2 = fs.readFile('./file2.txt', options, function(err, read){
// console.log(read);
// });
// list1(list2)

// fs.readFile('./path/to/file', { encoding: 'utf8' }, function(err, contents) {
//   console.log(contents);
// });