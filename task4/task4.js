
function myFunction()
{
		  document.getElementById("square").style.backgroundColor="red"; 
		 var too= document.getElementById("touch");
		 if(too.value=="Make Red")
		 {
		 	too.value="MakeGreen";
		 }
		 else{
		 	too.value="Make Red";
		 	document.getElementById("square").style.backgroundColor="green"; 
		 	
 		 }
}
		