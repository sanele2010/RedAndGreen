var rg = new RedOrGreen("div");

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