// Part ****************************************************
function validate(e) {
    e.preventDefault() // Prevent form submission immediately
    hideErrors() // Hide any previous errors
  
    if (formHasErrors()) {
      return false // Do not submit the form if there are errors
    }
  
    // If there are no errors, submit the form
    document.getElementById("form-page-js").submit()
    return true  
}

// // Part ****************************************************
function resetForm(e) {
    hideErrors()
}

// Part ****************************************************
function formHasErrors() {
    let errorFlag = false;

    let requiredFields = ["fullname", "telnumber", "email"];
    for (let i = 0; i < requiredFields.length; i++)
    {
        let textField = document.getElementById(requiredFields[i]);
        if (!formFieldHasInput(textField))
        {
            document.getElementById(requiredFields[i] + "_error").style.display = "block";

            if(!errorFlag)
            {
                textField.focus();
                textField.select();
            }

            errorFlag = true;
        }
    }

    let phoneField = document.getElementById("telnumber")
    if (formFieldHasInput(phoneField)) 
        {
            let phoneDigits = phoneField.value.replace(/\D/g, "")
  
            if (phoneDigits.length !== 10) 
                {
                    document.getElementById("telnumber_error").textContent = "* Phone number must be 10 digits"
                    document.getElementById("telnumber_error").style.display = "block"
  
                    if (!errorFlag) 
                        {
                            phoneField.focus()
                            phoneField.select()
                        }
  
                    errorFlag = true
                }
        }

    let emailField = document.getElementById("email")
    if (formFieldHasInput(emailField)) 
        {
            let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  
            if (!emailRegex.test(emailField.value)) 
                {
                    document.getElementById("email_error").textContent = "* Please enter a valid email address"
                    document.getElementById("email_error").style.display = "block"
  
                    if (!errorFlag) 
                        {
                            emailField.focus()
                            emailField.select()
                        }
  
                    errorFlag = true
                }
        }

return errorFlag;
}

// Part ****************************************************
function hideErrors() {
	let error = document.getElementsByClassName("error");

	for (let i = 0; i < error.length; i++) 
        {
		    error[i].style.display = "none";
	    }
}

// Part ****************************************************
function formFieldHasInput(fieldElement)
{
	if (fieldElement.value == null || fieldElement.value.trim() == "")
	{
		return false;
	}
	return true;
}

// Part ****************************************************
function load() {
    document.getElementById("form-page-js").addEventListener("submit", validate);
    document.getElementById("form-page-js").addEventListener("reset", resetForm);
    hideErrors();
}

// Part ****************************************************
document.addEventListener("DOMContentLoaded", load);
