function clearErrors()
{
	for(var loopCounter = 0; loopCounter < document.forms["contactForm"].elements.length; loopCounter++)
	{
		if(document.forms["contactForm"].elements[loopCounter].parentElement.className.indexOf("has-") != -1)
		{
			document.forms["contactForm"].elements[loopCounter].parentElement.className = "form-group"; 
		}
	}
}

function validateItems()
{
	
	clearErrors(); 
	var name = document.forms["contactForm"]["name"].value;
	var email = document.forms["contactForm"]["email"].value;
	var phone = document.forms["contactForm"]["phone"].value; 
	var returning = document.forms["contactForm"]["returning"].value; 
	
	if(name == "")
	{
		alert("Please provide name."); 
		document.forms["contactForm"]["name"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["name"].focus(); 
		return false; 
	}
	if(email == "")
	{
		alert("Please provide email."); 
		document.forms["contactForm"]["email"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["email"].focus(); 
		return false; 
	}
	if(phone == "")
	{
		alert("Please provide phone number."); 
		document.forms["contactForm"]["phone"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["phone"].focus(); 
		return false; 
	}
	if(returning == "")
	{
		alert("Please let us know if you have been to the restaurant before."); 
		document.forms["contactForm"]["returning"].parentElement.className = "form-group has-error";
		document.forms["contactForm"]["returning"].focus(); 
		return false; 
	}
	
	alert("Information is valid"); 
	return false; 
}