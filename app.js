// Registration - Username Validation:

// Username validation should run on change.
// The username cannot be blank.
// The username must be at least four characters long.
// The username must contain at least two unique characters.
// The username cannot contain any special characters or whitespace.
const form = document.querySelector('#registration', '#login')

const usernameInput = document.getElementById('username')
const usernamePattern = /^[a-zA-Z0-9]{4,}$/;

usernameInput.addEventListener('input', function (event) {
    const username = event.target.value;
    const error = document.querySelector('#usernameError');
    error.textContent = validateUsername(username);
});



function validateUsername(username) {
    if (username.length === 0) {
        return 'Username is required';
    }

    if (username.length < 4) {
        return 'Username must be at least 4 characters long';
    }

    if (usernamePattern.test(username) === false) {
        return 'Username must contain at least two unique characters';
    }

    if (usernamePattern.test(username) === false) {
        return 'Username cannot contain any special characters or whitespace';
    }

    return '';
}

// Registration - Email Validation:

// Email validation should run on change.
// The email must be a valid email address.
// The email must not be from the domain "example.com."
const emailInput = document.querySelector('email')
const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

emailInput.addEventListener('input', function (event) {
    const email = event.target.value;
    const error = document.querySelector('#emailError');
    error.textContent = validateEmail(email);
});

function validateEmail(email) {
    if (emailPattern.test(email) === false) {
        return 'Email must be a valid email address';
    }

    if (emailPattern.test(email) === false) {
        return 'Email must not be from the domain "example.com."';
    }

    return '';
}



// Registration - Password Validation:

// Password validation should run on input.
// Passwords must be at least 12 characters long.
// Passwords must have at least one uppercase and one lowercase letter.
// Passwords must contain at least one number.
// Passwords must contain at least one special character.
// Passwords cannot contain the word "password" (uppercase, lowercase, or mixed).
// Passwords cannot contain the username.
// Both passwords must match.
const passwordInput = document.querySelector('password')
const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{12,}$/;
const passwordCheckInput = document.querySelector('passwordCheck')

passwordInput.addEventListener('input', function (event) {
    const password = event.target.value;
    const error = document.querySelector('passwordError');
    error.textContent = validatePassword(password);
});

function validatePassword(password) {
    if (passwordPattern.test(password) === false) {
        return 'Passwords must be at least 12 characters long';
    }

    if (passwordPattern.test(password) === false) {
        return 'Passwords must have at least one uppercase and one lowercase letter';
    }

    if (passwordPattern.test(password) === false) {
        return 'Passwords must contain at least one number';
    }

    if (passwordPattern.test(password) === false) {
        return 'Passwords must contain at least one special character';
    }

    if (passwordPattern.test(password) === false) {
        return 'Passwords cannot contain the word "password" (uppercase, lowercase, or mixed)';
    }

    if (passwordPattern.test(password) === false) {
        return 'Passwords cannot contain the username';
    }

    if (passwordPattern.test(password) === false) {
        return 'Both passwords must match';
    }

    return '';
}




// Registration - Terms and Conditions:

// Terms and conditions validation should run on submit.
// The terms and conditions must be accepted.
const termsInput = document.querySelector('terms')

termsInput.addEventListener('input', function (event) {
    const terms = event.target.value;
    const error = document.querySelector('#termsError');
    error.textContent = validateTerms(terms);
});

function validateTerms(terms) {
    if (termsInput.checked === false) {
        return 'The terms and conditions must be accepted';
    }

    return '';
}


// Registration - Form Submission:

// Usually, we would send this information to an external API for processing. In our case, we're going to process and store the data locally for practice purposes.
// If all validation is successful, store the username, email, and password using localStorage. If you are unfamiliar with localStorage, that is okay! Reference the documentation's "Description" and "Examples" sections to learn how to implement it, and if you run into issues speak with a peer or one of your instructors.

// Consider how you want to store the user data, keeping in mind that there will be quite a few users registering for the site. Perhaps an array of user objects? Or maybe an object whose keys are the usernames themselves?
// Valid usernames should be converted to all lowercase before being stored.
// Valid emails should be converted to all lowercase before being stored.
// Clear all form fields after successful submission, and show a success message.

// Registration - Username Validation (Part Two):

// Now that we are storing usernames, create an additional validation rule for them...
// Usernames must be unique ("that username is already taken").

// Login - Username Validation:

// Username validation should run on submit.
// The username cannot be blank.
// The username must exist (within localStorage). Remember that usernames are stored in all lowercase, but the username field accepts (and should not invalidate) mixed case.
const usernameSuccess = document.querySelector('#usernameSuccess')



// Login - Password Validation:

// Password validation should run on submit.
// The password cannot be blank.
// The password must be correct (validate against localStorage).
const passwordSuccess = document.querySelector('#passwordSuccess')

// Login - Form Submission:

// If all validation is successful, clear all form fields and show a success message.
// If "Keep me logged in" is checked, modify the success message to indicate this (normally, this would be handled by a variety of persistent login options).



// Test!

// Test your validation thoroughly! Try to break things!
// Remember that each successful registration should be stored, and therefore you should be able to login with a variety of account credentials.
// When you are done testing your own code, swap sandboxes with a partner and test theirs!
// When each of you are finished testing, share your results.
// Discuss with your partner the differences and similarities between your two approaches.

form.addEventListener('submit', function (event) {
    event.preventDefault();

    let errors = [];
    if (usernameInput.value.length === 0) {
        errors.push('Username is required');
    }

    if (usernameInput.value.length < 4) {
        errors.push('Username must be at least 4 characters long');
    }

    if (usernamePattern.test(usernameInput.value) === false) {
        errors.push('Username must contain at least two unique characters');
    }

    if (usernamePattern.test(usernameInput.value) === false) {
        errors.push('Username cannot contain any special characters or whitespace');
    }

    if (emailPattern.test(emailInput.value) === false) {
        errors.push('Email must be a valid email address');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password must be at least 12 characters long');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password must have at least one uppercase and one lowercase letter');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password must contain at least one number');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password must contain at least one special character');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password cannot contain the word "password" (uppercase, lowercase, or mixed)');
    }

    if (passwordPattern.test(passwordInput.value) === false) {
        errors.push('Password cannot contain the username');
    }

    if (passwordInput.value !== passwordCheckInput.value) {
        errors.push('Both passwords must match');
    }

    if (termsInput.checked === false) {
        errors.push('The terms and conditions must be accepted');
    }

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    } 

let username = document.querySelector('username').value;
let email = emailInput.value;
let password = passwordInput.value;
let passwordCheck = passwordCheckInput.value;
let terms = termsInput.checked;



let existingUsers = JSON.parse(localStorage.getItem('users')) || [];
let isExistingUser = existingUsers.find(function (user) {
    return user.email === email;
    
});

if (isExistingUser) {
    alert('That email is already in use.');
} else {
 existingUsers.push({ username, email, password, passwordCheck, terms });
 localStorage.setItem('users', JSON.stringify(existingUsers));
 alert('Registration successful!');
 form.reset();
}

});