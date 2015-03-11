var rg = new RedOrGreen("chair");

rg.makeRed();

if(document.body.lastChild.style.backgroundColor === "red"){
 alert("sucess is green");
}else{
alert("Not red");
}

rg.makeGreen();
if(document.body.style.backgroundColor === "green"){
 alert("sucess is green");
}else{
alert("Not red");
}