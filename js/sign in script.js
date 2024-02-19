function signIn() {
  //clear error messages
  clearErrors();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  //validate inputs
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    displayError('emailError', 'Invalid email. Please enter a valid email.');
    return;
  }

  if (password.length < 8) {
    displayError('passwordError', 'Password should have at least 8 characters.');
    return;
  }

  //user can proceed with form submission 
  alert('Sign in successful!');
}

function displayError(elementId, message) {
  document.getElementById(elementId).textContent = message;
}

function clearErrors() {
  const errorElements = document.getElementsByClassName('error');
  for (const element of errorElements) {
    element.textContent = '';
  }
}
