var array = [{link:"https://fr.wikipedia.org/wiki/JavaScript"},
{link1: "https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"},
{link2: "https://fr.wikipedia.org/wiki/Java_(langage)"},
{link3: "https://en.wikipedia.org/wiki/C_(programming_language)"},
{link4: "https://en.wikipedia.org/wiki/C%2B%2B"},
{link5: "https://en.wikipedia.org/wiki/Python_(programming_language)"},
{link6: "https://fr.wikipedia.org/wiki/PHP"}];

function goJs() {
$('#0').on("click" ,function() {
	window.location.href= array[0]["link"];
})
}
function goHtml() {
$('#1').on("click" ,function() {
	window.location.href= array[1]["link1"];
})
}
function goJava() {
$('#2').on("click" ,function() {
	window.location.href= array[2]["link2"];
})
}
function goC() {
$('#3').on("click" ,function() {
	window.location.href= array[3]["link3"];
})
}
function goCc() {
$('#4').on("click" ,function() {
	window.location.href= array[4]["link4"];
})
}
function goPython() {
$('#5').on("click" ,function() {
	window.location.href= array[5]["link5"];
})
}
function goPhp() {
$('#6').on("click" ,function() {
	window.location.href= array[6]["link6"];
})
}

function checkName() {
	var myName = $('#firstN').val();
	if(typeof myName === "string") {
		alert('Name is Valid, press ok to continue')
	} else {
	alert('name invalid, please try again!')
}
}
function checkLastName() {
	var myLastname = $('#lastN').val();
	if(typeof myLastname === "string") {
		alert('Lastname valid, please carry on')
	} else {
	alert('invalid charachters, please try again!')
}
}
function checkPseudo() {
	var myPseudo = $('#myPs').val();
	if(myPseudo.length >= 5) {
		alert('Pseudo valid, please continue')
	} else {
	alert('invalid Pseudo, please try larger Pseudo!')
}
}
function checkPassword() {
	var myPassword = $('#myPw').val();
	if(myPassword.length >= 8) {
		alert('Pseudo valid, one more step')
	} else {
	alert('invalid Password, please try stronger password!')
}
}