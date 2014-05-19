
module.exports.words = {};

var fs = require('fs');
var options = { encoding: 'utf8' };

var each = function(array, fn) {
  var continueIterating = function(array, n, fn) {
    if (n < array.length) {
      fn(array[n]);
      continueIterating(array, n+1, fn);
    }
  };
  continueIterating(array, 0, fn);
};


fs.readFile('./file1.txt', options, function(err, read){
	// console.log(read); 
	array1 = (read.split("\n"));
	console.log(array1);
	fs.readFile('./file2.txt', options, function(err, read){
		// console.log(read);
		array2 = (read.split("\n"));
		console.log(array2);
	});
});


// array1 = (list1.split("\n"));
// console.log(array1);
