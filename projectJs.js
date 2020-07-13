var array = [{link:'https://fr.wikipedia.org/wiki/JavaScript'}]
function go() {
$('#wiss').on("click" ,function() {
	window.location.href= array[0]["link"];
})
}


function checkName() {
	var m = $('#myText').val();
	if(typeof m === "string") {
		alert('correct')
	}else{
	alert('wrong')
}
}
var x = $('#myDate').val()