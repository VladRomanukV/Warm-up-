// module.exports = 
function warmup(temperature) {
	// your implementation here 
	var celcGradus = +prompt('Enter your number to convert from Celsius to Fahrenheit', 0); 
	var umn = 9/5; 
	var sum = 32; 

	return (celcGradus * umn) + sum; 

}; 

warmup(); 


// сначала думал реализовать через цикл, потом думал, через call, map, все не шло и было сложно, в итоге переписал самым простым способом 
//перешел на сайт физики, нашел формулу градусов в фарингеты, и реализовал ее))
