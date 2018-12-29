var firstNames   = [];
var lastNames  = [];
var email = [];
var subject = [];

var firstNameInput   = document.getElementById("firstName");
var lastNameInput  = document.getElementById("lastName");
var emailInput = document.getElementById("email");
var subjectInput = document.getElementById("subject");
var messageBox  = document.getElementById("display");

function insert() {
 "use strict"; 
//  var x = document.createElement("IMG");
//  x.setAttribute("src", "scan-code.png");
//  x.setAttribute("width", "330");
//  x.setAttribute("height", "330");
//  x.setAttribute("alt", "The Scan Code");

 firstNames.push( firstNameInput.value );
 lastNames.push( lastNameInput.value );
 email.push( emailInput.value ); 
 subject.push( subjectInput.value );
//  document.body.appendChild(x);
 clearAndShow();
}

function clearAndShow() {
  "use strict";  
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";

  messageBox.innerHTML = "";
  messageBox.innerHTML = "<br>";
  messageBox.innerHTML = "<h1>Hi " + firstNames + "!</h1><p>Thank you for reaching out to us.</p>" + "<p class='clientMsg'>(Your message has been received and we will contact you shortly.)</p>";
  messageBox.innerHTML += "<span class='msg'>First Name: " + firstNames.join(", ") + "</span><br/>";
  messageBox.innerHTML += "<span class='msg'>Last Name: " + lastNames.join(", ") + "</span><br/>";
  messageBox.innerHTML += "<span class='msg'>Email: " + email.join(", ") + "</span></br>";
  messageBox.innerHTML += "<span class='msg'>Message: " + subject.join(", ") + "</span>";
}