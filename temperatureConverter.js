(function() {

	var celciusTemp = 30;
	var fahrenheitConverted = Math.ceil(((celciusTemp * 9/5) + 32));

	console.log(celciusTemp + '°C is ' + fahrenheitConverted + '°F.');

	var fahrenheit = 20;
	
	var celciusConverted = Math.floor(((fahrenheit - 32) * 5/9));
	console.log(fahrenheit + '°F ' + 'is ' + celciusConverted + '°C.')

})();
// 30°C is 86°F.
// 20°F is -7°C.

// 0 degrees Celsius is equal to 32 degrees Fahrenheit
// 0 degrees Fahrenheit is equal to -17.77778 degrees Celsius

/* It's hot out! Let's make a converter based on the steps here.

Store a celsius temperature into a variable.
Convert it to fahrenheit and output "NN°C is NN°F".
Now store a fahrenheit temperature into a variable.
Convert it to celsius and output "NN°F is NN°C." */