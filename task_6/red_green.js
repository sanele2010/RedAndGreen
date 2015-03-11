function RedOrGreen (elementId) {
 // body...

 var newElement = document.getElementById(elementId);

 this.makeGreen = function() {
 // body...
 	newElement.style.backgroundColor = "green";
 	newElement.innerHTML = "Passed!";
 };

 this.makeRed = function() {
 // body...
 	newElement.style.backgroundColor = "red";
 	newElement.innerHTML = "Failed!";
 };

 document.body.appendChild(newElement);
};