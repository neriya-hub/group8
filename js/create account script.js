
    function createAccount() {
      //clear error messages
     
      const name = document.getElementById('name').value;
      const age = document.getElementById('age').value;
      const email = document.getElementById('email').value;
      const phone = document.getElementById('phone').value;
      const password = document.getElementById('password').value;

      //validate inputs
      if (!/^[a-zA-Z ]+$/.test(name)) {
        displayError('nameError', 'Invalid name. Please enter a valid name.');
        return;
      }

      if (isNaN(age) || age <= 0) {
        displayError('ageError', 'Invalid age. Please enter a valid age.');
        return;
      }

      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        displayError('emailError', 'Invalid email. Please enter a valid email.');
        return;
      }

      if (!/^[1-9]\d{9}$/.test(phone)) {
        displayError('phoneError', 'Invalid phone number. It should start with a digit other than 0 and have 10 digits.');
        return;
      }

      if (password.length < 6) {
        displayError('passwordError', 'Password should be at least 6 characters long.');
        return;
      }

      //user can proceed with form submission 
      alert('Account created successfully!');
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
  