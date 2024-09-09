const form = document.getElementById('signup-form');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const usernameError = document.getElementById('username-error');
  const emailError = document.getElementById('email-error');

  // Clear previous errors
  usernameError.textContent = '';
  emailError.textContent = '';

  let valid = true;

  if (username.length < 3) {
    usernameError.textContent = 'Username must be at least 3 characters';
    valid = false;
  }

  if (!validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address';
    valid = false;
  }

  if (valid) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}
