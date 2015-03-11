var passes= 0;
var fails = 0;

var assert = {

 

	equals:function (expectedResult, returnedResult) {
		// body...
		var myDiv = new RedOrGreen("mySquare");
		//document.getElementById('results')
		if (expectedResult === returnedResult) {
			var newDiv=document.createElement('div') 
			passes++; 
			newDiv.style.backgroundColor='green';
			newDiv.style.width='300px';
			newDiv.style.height='300px';
			document.getElementById("tests").appendChild(newDiv);
		}
		else {

			var newDiv=document.createElement('div')
			fails++
			newDiv.style.backgroundColor='red';
			newDiv.style.width='300px';
			newDiv.style.height='300px';
			document.getElementById("tests").appendChild(newDiv);

		}


		var stats = passes+fails;
		var statsElement =  document.getElementById("results"); //document.createElement("p");
		statsElement.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
		//document.body.appendChild(newP);

	}
};

var TestMyCode = {
	run:function(nameOfTest, functionToExecute){

		
		
		this.nameOfTest = nameOfTest;
		functionToExecute(assert);
	}
};
		 document.body.appendChild(results);