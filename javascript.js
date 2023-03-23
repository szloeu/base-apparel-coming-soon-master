
function mailAlert() {
	var email = document.getElementById("input-id-mail").value;
	if (!validateEmail(email)) {
		document.getElementById("img-id-error").style.visibility = "visible";
		document.getElementById("p-id-please").style.visibility = "visible";
	}
}

function mailAlertReset() {
		document.getElementById("img-id-error").style.visibility = "hidden";
		document.getElementById("p-id-please").style.visibility = "hidden";
}


function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

document.getElementById("div-id-send").addEventListener("click",  mailAlert );
document.getElementById("input-id-mail").addEventListener("focus",  mailAlertReset );

