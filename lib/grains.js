'use strict';

function total(){
	// Add total rice count from riddle... 
	return Math.pow(2, 64) - 1;
};

function square(num){
	// write code here...
	if (num < 1 || num > 64) {
		return "Invalid number"
	}
	return Math.pow(2, num-1);
};


module.exports = { square, total }; 
