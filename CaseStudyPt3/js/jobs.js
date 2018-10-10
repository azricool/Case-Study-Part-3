var customerNode = document.getElementById("job-name");
var emailNode = document.getElementById("job-email");
var dateNode = document.getElementById("job-date");
customerNode.addEventListener("change", chkName);
emailNode.addEventListener("change", chkEmail);
dateNode.addEventListener("change", chkDate);

function validateAll(){
	'use strict';

	if(!chkName() || !chkEmail() || !chkDate()){
		alert("Incomplete!")
		return false;
	}
	else{ 
		return true;
	}
}

function init() {
    'use strict';
    
    // Confirm that document.getElementById() can be used:
    if (document && document.getElementById) {
        var loginForm = document.getElementById('job-application');
        loginForm.onsubmit = validateAll;
    }

} // End of init() function.

// Assign an event listener to the window's load event:
window.onload = init;

function chkName() {

	// Get the target node of the event
	
	var myName = customerNode.value;
	
	
	var regex = /^([A-Za-z]+\s?)+$/;
	
	if (!regex.test(myName)) {
	alert("The name you entered (" + myName + 
		  ") is incorrect. \n" +
		  "Please enter again.");
	customerNode.focus();
	customerNode.select();
	return false;
	} else {
		return true;
	}
}

function chkEmail() {

	// Get the target node of the event
		
	  var myEmail = emailNode.value;
	
	  var regex = /^[\w.-]+@([\w.]+\.){1,4}[\w.]{2,3}$/;
	
	if (!regex.test(myEmail)) {
	alert("The email you entered (" + myEmail + 
		  ") is not correct.\n Please try again.");
	myEmail.focus();
	myEmail.select();
	return false;
	}
		return true;

	 
}
	
function chkDate() {
	
	var myDate = dateNode.value;

	var	today       = new Date(Date.now());
	var	selectedDay = new Date(myDate);
	
	if (selectedDay > today) {
		return true;
	}
		alert("Date cannot be in the past/today");
		return false;	
}