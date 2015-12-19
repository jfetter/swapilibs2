"use strict";

x = 5; 

console.log(x);

var x; 

(function whatever(){
		
		console.log(x);

})()

var x; 

console.log("outside:", x)

() =>{console.log(x)}()