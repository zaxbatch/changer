console.log('here');



//handle quarters

function quarters() {
	var pennies, nickels, dimes, quarters, remainder;
	var  changeDue =  document.getElementById('change').value;
	var remainder;



	//quarters
	if(changeDue/.25>=1){
		quarters = changeDue/.25;
		remainder = changeDue % .25.toFixed(2);
		alert("Quarters: " + Math.floor(quarters));
		
		// no dimes 
		if(remainder.toFixed(2) / .10 < 1) {
			alert('Dimes: 0');
			if(remainder.toFixed(2)/.05<1) {
				alert('Nickels: 0')
			}
			
			if(remainder.toFixed(2)/.05>=1) {
				nickels = remainder.toFixed(2)/.05
				alert("Nickels: " + Math.floor(nickels))
				remainder = remainder.toFixed(2) % .05;
				if(remainder.toFixed(2) / .01 < 1){
					alert('Pennies: 0');
				} 
				if(remainder.toFixed(2) / .01 >= 1) {
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies))
				}
			}
		}
		// dimes
		if(remainder.toFixed(2) / .10 >=1 ) {
			dimes = remainder.toFixed(2)/.10
			alert("Dimes: " + Math.floor(dimes))
			remainder = remainder.toFixed(2) % .10;
			
			if(remainder.toFixed(2)/.05<1) {
				alert('Nickels: 0');
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies));

			}
			
			if(remainder.toFixed(2)/.05>=1) {
				nickels = remainder.toFixed(2)/.05
				alert("Nickels: " + Math.floor(nickels));
				remainder = remainder.toFixed(2) % .05;
				if(remainder.toFixed(2) == 0){
					alert('Pennies: 0');
				} 
				if(remainder.toFixed(2) != 0) {
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies))
				}
			}

		}

		// nickels
		if(remainder.toFixed(2) / .05 < 1) {
			alert("Nickels: 0");
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies));
		}		
	} // end quarters

	// no quarters
	if(changeDue/.25<1) {
		remainder = changeDue % .25.toFixed(2);
		alert('Quarters: 0')

		// no dimes 
		if(remainder.toFixed(2) / .10 < 1) {
			alert('Dimes: 0');
			if(remainder.toFixed(2)/.05<1) {
				alert('Nickels: 0')
			}
			
			if(remainder.toFixed(2)/.05>=1) {
				nickels = remainder.toFixed(2)/.05
				alert("Nickels: " + Math.floor(nickels))
				remainder = remainder.toFixed(2) % .05;
				if(remainder.toFixed(2) / .01 < 1){
					alert('Pennies: 0');
				} 
				if(remainder.toFixed(2) / .01 >= 1) {
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies))
				}
			}
		}
		// dimes
		if(remainder.toFixed(2) / .10 >=1 ) {
			dimes = remainder.toFixed(2)/.10
			alert("Dimes: " + Math.floor(dimes))
			remainder = remainder.toFixed(2) % .10;
			
			if(remainder.toFixed(2)/.05<1) {
				alert('Nickels: 0');
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies));

			}
			
			if(remainder.toFixed(2)/.05>=1) {
				nickels = remainder.toFixed(2)/.05
				alert("Nickels: " + Math.floor(nickels));
				remainder = remainder.toFixed(2) % .05;
				if(remainder.toFixed(2) == 0){
					alert('Pennies: 0');
				} 
				if(remainder.toFixed(2) != 0) {
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies))
				}
			}

		}

		// nickels
		if(remainder.toFixed(2) / .05 < 1) {
			alert("Nickels: 0");
					pennies = remainder.toFixed(2)/.01;
					alert('Pennies: ' + Math.floor(pennies));
		}		


			
	} //end no quarters
}
