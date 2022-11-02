function generatePopUp(alertHeader, alertContent) {
	let myAlert = document.createElement("div");
	myAlert.className = "alert alert-primary alert-dismissible fade show pb-0 mx-3 fixed-bottom";

	let closeButton = document.createElement("button");
	closeButton.className = "btn close";
	closeButton.dataset["dismiss"] = "alert";
	closeButton.innerHTML = "&times;";
	myAlert.appendChild(closeButton);

	let textContent = document.createElement("p");
	textContent.innerHTML = `<strong>${alertHeader}</strong><br>${alertContent}`;
	myAlert.appendChild(textContent);
	
	return myAlert;
}

function load() {
	let popUp = generatePopUp("Welcome to the website", "This is simply a template to demonstrate Bootstrap 4 skills.");
	document.body.appendChild(popUp);
}