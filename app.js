 // Get form elements
    const registrationForm = document.getElementById('registration');
    
    const errorDisplay = document.getElementById('errorDisplay');

    // Registration form validation
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorDisplay.innerHTML = '';

      const usernameInput = registrationForm.elements.username;
      const emailInput = registrationForm.elements.email;
      const passwordInput = registrationForm.elements.password;
      const passwordCheckInput = registrationForm.elements.passwordCheck;
      const termsInput = registrationForm.elements.terms;
      

      // Validate username
      if (usernameInput.value.trim() === '') {
        showError(usernameInput, 'Username cannot be blank.');
        return;
      }

      if (usernameInput.value.length < 4) {
        showError(usernameInput, 'Username must be at least 4 characters long.');
        return;
      }

      if (usernameInput.value.split('').filter((char, i, arr) => arr.indexOf(char) === i).length < 2) {
        showError(usernameInput, 'Username must contain at least two unique characters.');
        return;
      }

      if (!/^[a-zA-Z0-9]+$/.test(usernameInput.value)) {
        showError(usernameInput, 'Username cannot contain special characters or whitespace.');
        return;
      }

      // Validate email
      if (!emailInput.checkValidity()) {
        showError(emailInput, 'Invalid email address.');
        return;
      }

      if (emailInput.value.toLowerCase().includes('example.com')) {
        showError(emailInput, 'Email cannot be from the domain "example.com".');
        return;
      }

      // Validate password
      if (passwordInput.value.length < 12) {
        showError(passwordInput, 'Password must be at least 12 characters long.');
        return;
      }

      if (!/(?=.*[a-z])/.test(passwordInput.value)) {
        showError(passwordInput, 'Password must contain at least one lowercase letter.');
        return;
      }

      if (!/(?=.*[A-Z])/.test(passwordInput.value)) {
        showError(passwordInput, 'Password must contain at least one uppercase letter.');
        return;
      }

      if (!/(?=.*\d)/.test(passwordInput.value)) {
        showError(passwordInput, 'Password must contain at least one number.');
        return;
      }

      if (!/(?=.*[@$!%*?&])/.test(passwordInput.value)) {
        showError(passwordInput, 'Password must contain at least one special character.');
        return;
      }

      if (passwordInput.value.toLowerCase().includes('password')) {
        showError(passwordInput, 'Password cannot contain the word "password".');
        return;
      }

      if (passwordInput.value.toLowerCase() === usernameInput.value.toLowerCase()) {
        showError(passwordInput, 'Password cannot contain the username.');
        return;
      }

      if (passwordInput.value !== passwordCheckInput.value) {
        showError(passwordCheckInput, 'Passwords do not match.');
        return;
      }

      // Validate terms and conditions
      if (!termsInput.checked) {
        showError(termsInput, 'You must accept the terms and conditions.');
        return;
      }

      // Store user data
      const user = {
        username: usernameInput.value.toLowerCase(),
        email: emailInput.value.toLowerCase(),
        password: passwordInput.value
      };

      // Store user data in localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      // Clear form fields and show success message
      registrationForm.reset();
      errorDisplay.innerHTML = '<p class="success-message">Registration successful!</p>';
    });

    // Login form validation
    const loginForm = document.getElementById('login');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      errorDisplay.innerHTML = '';

      const usernameLoginInput = loginForm.elements.usernameLogin;
      const passwordLoginInput = loginForm.elements.passwordLogin;
      const persistInput = loginForm.elements.persist;

      // Validate username
      if (usernameLoginInput.value.trim() === '') {
        showError(usernameLoginInput, 'Username cannot be blank.');
        return;
      }

      // Validate password
      if (passwordLoginInput.value.trim() === '') {
        showError(passwordLoginInput, 'Password cannot be blank.');
        return;
      }

      // Retrieve user data from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];

      // Check if username exists
      const foundUser = users.find(user => user.username === usernameLoginInput.value.toLowerCase());
      if (!foundUser) {
        showError(usernameLoginInput, 'Username does not exist.');
        return;
      }

      // Check if password is correct
      if (foundUser.password !== passwordLoginInput.value) {
        showError(passwordLoginInput, 'Incorrect password.');
        return;
      }

      // Clear form fields and show success message
      loginForm.reset();
      const successMessage = persistInput.checked ? 'Login successful (Keep me logged in).' : 'Login successful.';
      errorDisplay.innerHTML = `<p class="success-message">${successMessage}</p>`;
    });

    // Function to display error message
    function showError(input, message) {
      const errorElement = document.createElement('p');
      errorElement.className = 'error-message';
      errorElement.textContent = message;
      errorDisplay.appendChild(errorElement);
      input.focus();
    }