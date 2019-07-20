(function (){
	'use strict';


	document.write(genRand(1, 6) + ' : ' + genRand(1, 6));
	document.write('<br>');
	function genRand(min, max) {
		return Math.round(Math.random() * (max - min)) + min;
	}

	document.write(Boolean(genRand(0,1)));
	document.write('<br>');
	if (genRand(0, 1)) {
		document.write("Orel");
	} else {
		document.write("Reshka");
	}
	document.write('<br>');

	genRand(0, 1) ? document.write("Orel") : document.write("Reshka");
	document.write('<br>');

	document.write( genRand(0, 1) ? "Orel" : "Reshka");
	document.write('<br>');

// -----------------------------------------------
	var userNum, userSecNum;

	do {
		userNum = +prompt('enter min number plz');
	} while(Number.isNaN(userNum));

	do {
		userSecNum = +prompt('enter max number plz');
	} while(Number.isNaN(userSecNum));

	document.write( genRand(userNum, userSecNum));
	document.write('<br>');


})();
















/*	FOR
	// for (let i = 0; i < 10; i++) 
	// for (let i = -10; i < 10; i +=2)
	for (let i = 10; i >= 0; i--) {
		document.write(i);
		document.write('<br>');
	}
	*/

/*  FOR
	// for (let i = 0; i < 10; i++) 
	// for (let i = -10; i < 10; i +=2)
	for (let i = 10; i >= 0; i--) {
		document.write(i);
		document.write('<br>');
	}*/

/* SWITCH	
	var numberA, numberB;
		
	do {
		numberA = +prompt('Enter first number');

		} while(Number.isNaN(numberA));	
		do {
		numberB = +prompt('Enter second number');

		} while(Number.isNaN(numberB));	
	
		// if (numberA > numberB) {
		// 	alert (numberA);
		// } else if (numberA < numberB) {
		// 	alert (numberB);
		// } else {
		// 	alert (numberA + ' ' + numberB);
		// }

		switch (true) {
			case (numberA > numberB):
				alert(numberA);
				break;
			case (numberA < numberB):
				alert(numberB);
				break;
			default: 
				alert (numberA + ' ' + numberB);
				break;
		}*/

/*	? 
	var numberA, numberB;
		do {
		numberA = +prompt('Enter first number');

		} while(Number.isNaN(numberA));	
		do {
		numberB = +prompt('Enter second number');

		} while(Number.isNaN(numberB));	
	
		// if (numberA >= numberB) {
		// alert (numberA);
		// } else {
		// alert (numberB);
		// }
	
		numberA >= numberB ? document.write(numberA) : document.write(numberB);*/

/*	?
	let a = 6,
		b = 10,
		result;

		if (a + b < 4) {
		result = 'Мало';
		} else {
		result = 'Много';
		}

		result = (a + b < 4) ? 'Мало' : 'Много'; 
	
		document.write(result);*/

/*	IF ELSE
	var numberA, numberB;
		do {
		numberA = +prompt('Enter first number');

		} while(Number.isNaN(numberA));	
		do {
		numberB = +prompt('Enter second number');

		} while(Number.isNaN(numberB));	
	
		if (numberA >= numberB) {
		alert (numberA);
		} else {
		alert (numberB);
		}
	*/

/*	IF ELSE
	let answer = prompt('Каково название Javascript?');

	if (answer && answer.toLowerCase() == 'ECMAscript'.toLowerCase()) {
		alert('Verno!');
	} else {
		alert('Ne znaete? ECMAscript');
	}
	*/

/*	Сума чисел которые ввел пользователь 
	var numberA, numberB;
	do {
		numberA = +prompt('Enter first number');

	} while(Number.isNaN(numberA));	
	do {
		numberB = +prompt('Enter second number');

	} while(Number.isNaN(numberB));	

	document.write(numberA + numberB);*/