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
 firstNames.push( firstNameInput.value );
 lastNames.push( lastNameInput.value );
 email.push( emailInput.value ); 
 subject.push( subjectInput.value );
 clearAndShow();
}

function clearAndShow() {
  firstNameInput.value = "";
  lastNameInput.value = "";
  emailInput.value = "";
  subjectInput.value = "";

  messageBox.innerHTML = "";
  messageBox.innerHTML = "<br>";
  messageBox.innerHTML = "<h1>Hi " + firstNames + "!</h1><p>Thank you for reaching out to us.</p>" + "Your message has been received and we will contact you shortly.<br><br>";
  messageBox.innerHTML += "<span class='msg'>First Name: " + firstNames.join(", ") + "</span><br/>";
  messageBox.innerHTML += "<span class='msg'>Last Name: " + lastNames.join(", ") + "</span><br/>";
  messageBox.innerHTML += "<span class='msg'>Email: " + email.join(", ") + "</span></br>";
  messageBox.innerHTML += "<span class='msg'>Message: " + subject.join(", ") + "</span>";
  messageBox.innerHTML += "</div>";
}