// Looping
function cetakAngka(n) {
	for(var i = n ; i >= 1 ; i-- ){		
		console.log(i);
	}
}

cetakAngka(5);

// Rekursif
function cetakAngka(n) {
 	
	if(n === 0) {   // Base Case
	   return;
	}

	console.log(n);
 	cetakAngka(n - 1);
}

cetakAngka(5);

// Looping
function faktorial(n) {
 	
	var hasil = 1;
	for( var i = n ; i > 0 ; i-- ) { 	 
		hasil *= i;
	}

    return hasil;
}

faktorial(5);


// Faktorial
function faktorial(n) {
 	
	if(n === 0) {
	   return 1;
	}

    return n * faktorial(n - 1);
}
faktorial(5);
