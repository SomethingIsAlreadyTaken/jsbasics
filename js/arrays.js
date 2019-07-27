(function(){
	'use strict';

	let students = [
        'Maxim Shevchenko',
        'Andrey Rubtsov',
        'Denys Vasyliev',
        'Valeriya Kolomiiets',
        'Molchanova Tatyana',
        'Посух Дарья',
        'Ольга Подопригора'
    ];

    let workers = [
    	'Kate Kharchenko',
    	'Ivan Petrov'
    ];

    let groups = [
        ['Maxim Shevchenko', 'Andrey Rubtsov'],
        ['Denys Vasyliev', 'Valeriya Kolomiiets'],
        ['Tatyana Molchanova', 'Посух Дарья', 'Ольга Подопригора']
    ];


// MATRIX-----------------------------------------------------------------------
    
    groups.forEach(function(group, index){
    	document.write(`<h2>Group # ${++index}</h2>`);
    	document.write(`<ul class="some-class">`);
    	group.forEach(function(person){
    		document.write(`<li>${person}`);
    	});
    	document.write(`</ul>`);
    })

// SIMPLE-----------------------------------------------------------------------
   
    document.write('<ul>');
    for (var i = 0; i < students.length; i++) {
    	document.write(`<li>${students[i]}</li>`); 	
    }
    document.write('</ul>');

// OR-----------------------------------------------------------------------

    document.write('<ul>');
    students.forEach(function(student, index){
    	document.write(`<li>${++index} ${student}</li>`);
    }); 
    document.write('</ul>');

// NAMES-----------------------------------------------------------------------

    document.write('<ul>');
    students.forEach(function(student){
    	document.write(`<li>${student.split(' ')[0]}</li>`);
    }); 
    document.write('</ul>');

// STROKA-----------------------------------------------------------------------

    document.write(`<em>${students.join(', ')}</em>`);

// ZADANIE-----------------------------------------------------------------------

    document.write('<ul>');

    delete workers[1];

    students.concat(workers).forEach(function(student, index){
    	let parts = student.split(' '); 
    	document.write(`<li>
    		<b>${++index}</b> 
    		<em>${parts[0] ? parts[0] : ''}</em> 
    		<b><em>${parts[1] ? parts[1] : ''}</em></b>
    		</li>`);
    }); 
    document.write('</ul>');

// IndexOf-----------------------------------------------------------------------

    document.write(`<b>${students.indexOf('Valeriya Kolomiiets')}</b>`);



})();