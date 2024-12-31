document.getElementById('google-button').onclick = function() { window.location.href = '/index.html'; };

const click = document.getElementById('open-eye');
const input = document.getElementById('input');

click.addEventListener('click', () => {
    const isVisible = input.type === 'text';

    if(isVisible) {
        input.type = 'password';
        click.classList.remove('show');
    } else{
        input.type = "text";
        click.classList.add('show')
    }
})

   const submitButton = document.getElementById('submit');
   const emailInput = document.getElementById('email-input')
   const messageEmailElement = document.getElementById('email-message');
   const messagePasswordElement = document.getElementById('password-message');
   const errorDiv = document.getElementById('error-div');
   const errorMessage = document.getElementById('error-text')




   submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    errorDiv.style.display = '';
    const isValid = validateForm();
    if(isValid) {
      displaySuccessMessage();
    } else if(emailInput.value.trim() !== "" && input.value.trim() !== "") {
      displayErrorMessage();
    }
  });
  

   emailInput.addEventListener('focus', () => {
    emailInput.style.borderColor = '#0257ee';
    emailInput.style.color = '';
    emailInput.style.backgroundImage = '';
    emailInput.style.backgroundRepeat = 'no-repeat';
    emailInput.style.backgroundPosition = 'right';
    emailInput.style.backgroundColor = '#f9fafb'

  });

  input.addEventListener('focus', () => {
    input.style.borderColor = '#0257ee';
    input.style.color = '';
    input.style.backgroundColor = "#f9fafb"

  });

   function validateForm() {
    const email = emailInput.value.trim();
    const password = input.value.trim();
    const acceptableEmail = 'dominiconwubuya500@gmail.com';
    const acceptablePassword = "@Benita5000";

    let isValid = true;

   if(email === acceptableEmail) {
     /*emailInput.style.borderColor = "green";
     emailInput.style.color = 'green';*/
     messageEmailElement.innerHTML = "";
   } 
   
   else if(email !== "") {
    emailInput.style.borderColor = "#fa2b2b";
    emailInput.style.color = "#fa2b2b";
    emailInput.style.backgroundColor = '#fdf2f2';
    emailInput.style.backgroundImage = 'url(Register/wrong.png)';
    emailInput.style.backgroundRepeat = 'no-repeat';
    emailInput.style.backgroundPosition = 'right 25px center';
    messageEmailElement.innerHTML = "Email Incorrect"
    messageEmailElement.style.color = "#fa2b2b";
    displayErrorMessage();
    isValid = false;
   } 
   
   else {
    emailInput.style.borderColor = "#fa2b2b";
    emailInput.style.color = "#fa2b2b";
    emailInput.style.backgroundColor = '#fdf2f2';
    emailInput.style.backgroundImage = 'url(Register/wrong.png)';
    emailInput.style.backgroundRepeat = 'no-repeat';
    emailInput.style.backgroundPosition = 'right 25px center';
    messageEmailElement.innerHTML = "Please  fill in the field"
    messageEmailElement.style.color = "#fa2b2b";
    isValid = false;
     }

    if(password === acceptablePassword) {
        /*input.style.borderColor = 'red';
        input.style.color = 'red'; */
        messagePasswordElement.innerHTML = "";
    }
    
    else if(password !== '') {
        input.style.borderColor = "#fa2b2b";
        input.style.color = '#fa2b2b';
        input.style.backgroundColor = "#fdf2f2"
        messagePasswordElement.innerHTML = "Password Incorrect";
        messagePasswordElement.style.color = "#fa2b2b";
        displayErrorMessage();
        isValid = false;
    }
    
    else {
        input.style.borderColor = "#fa2b2b";
        input.style.color = "#fa2b2b";
        input.style.backgroundColor = "#fdf2f2"
        messagePasswordElement.innerHTML = 'Please fill in the field';
        messagePasswordElement.style.color = "#fa2b2b";
        isValid = false;
    }

     return isValid;
   }
   
   function displaySuccessMessage() {

    emailInput.style.backgroundColor = '#f3faf7';
    emailInput.style.color = '#2ac940';
    emailInput.style.borderColor = '#2ac940';
    emailInput.style.backgroundImage = 'url(Register/check.png)';
    emailInput.style.backgroundRepeat = 'no-repeat';
    emailInput.style.backgroundPosition = 'right 25px center';
    messageEmailElement.innerHTML = "Email Correct";
    messageEmailElement.style.color = '#2ac940';
    input.style.borderColor = '#2ac940';
    input.style.color = '#2ac940';
    input.style.backgroundColor = "#f3faf7";
    
   }

   function displayErrorMessage() {
     errorDiv.style.width = '312px';
     errorDiv.style.height = "53px";
     errorDiv.style.backgroundColor = '#fde8e8';
     errorMessage.innerHTML = "incorrect email address or password";

     const cancelIcon = document.getElementById('cancel-icon');
     cancelIcon.style.backgroundImage = "url('Register/red.png')";
  
     cancelIcon.style.width = "20px";
     cancelIcon.style.height = "20px";
  
     cancelIcon.addEventListener('click', () => {
     errorDiv.style.display = 'none';
   });
}