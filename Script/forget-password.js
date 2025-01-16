const submitButton = document.getElementById('submit');
const emailInput = document.getElementById('email-input');
const emailMessage = document.getElementById('email-message')


submitButton.addEventListener('click', (e) =>{
    e.preventDefault();
    isvalid = validateForm();
    if(isvalid) {
        displaySuccessMessage();
    }
})

function validateForm() {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  let isValid = true;

  if(emailRegex.test(email)) {
    emailInput.style.borderColor = '#2ac940';
    emailInput.style.backgroundColor = '#f3faf7'
    emailMessage.innerHTML = ''
  } else {
    emailInput.style.borderColor = '#fa2b2b';
    emailMessage.innerHTML = 'please fill in with a valid email adddress';
    emailMessage.style.color = '#fa2b2b';
    isValid = false
  }
  return isValid
}