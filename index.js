function submitEmail() {
  const errorMessage = document.getElementById('errorMessage')
  const errorMessageMobile = document.getElementById('errorMessageMobile')
  const emailField = document.getElementById('emailField')
  const submittedEmail = emailField.value

  let errorText = ''

  if (!submittedEmail) {
    errorText = 'Whoops! It looks like you forgot to add your email'
    errorMessage.innerHTML = errorText
    errorMessageMobile.innerHTML = errorText
      
    emailField.style.borderColor = 'hsl(354, 100%, 66%)'
  } else if (validateEmail(submittedEmail)) {
    errorMessage.innerHTML = ''
    errorMessageMobile.innerHTML = ''
    emailField.style.borderColor = ''
  } else {
    errorText = 'Please provide a valid email address'
    errorMessage.innerHTML = errorText
    errorMessageMobile.innerHTML = errorText
    emailField.style.borderColor = 'hsl(354, 100%, 66%)'
  }
}

//  https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  )
}
