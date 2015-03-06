
var passes= 0;
var fails = 0;
var assert = {
	 

	equals:function (expectedResult, returnedResult) {
		// body...
		var myDiv = new RedOrGreen("mySquare");


		if (expectedResult === returnedResult) {
			myDiv.makeGreen();
			passes++;
		}
		else {

			myDiv.makeRed();
			fails++;

		}
	var stats = passes+fails;
	var newP = document.createElement("p");
	newP.innerHTML = "Passes: " + passes + " Fails: " + fails + " Total tests: " + stats;
	document.body.appendChild(newP);
	}
};

var TestMyCode = {
	run:function(nameOfTest, functionToExecute){
		this.nameOfTest = nameOfTest;
		functionToExecute(assert);
	}
};
