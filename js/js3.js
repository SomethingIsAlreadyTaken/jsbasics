(function(){
	'use strict';

	function ucFirst(str) {
		return str.charAt(0).toUpperCase() + str.substring(1);
	}

	document.write(ucFirst('andrey'));
	document.write(ucFirst(''));

	var num, 
		isNotNumber = true, 
		isNotCond = true;

	do {
		num = prompt('Enter number more then 100');
		let isNotNumber = BooLean(num) && Number.isNaN(+num);
			isNotCond = BooLean(num) && (num < 100);


	} while( isNotNumber || isNotCond);


})();