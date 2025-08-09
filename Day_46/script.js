const emailBox = document.getElementById('email');
const passwordBox = document.getElementById('password');
const submitBtn = document.getElementById('submitBtn');

// error fields
const emailErrorField = document.getElementById('emailError');
const passwordErrorField = document.getElementById('passwordError');

submitBtn.addEventListener('click', function () {
  const emailValue = emailBox.value;
  const passwordValue = passwordBox.value;

  if (!emailValue) {
    // if email is not provided
    emailErrorField.innerText = 'Email cannot be empty';
    emailErrorField.style.display = 'block';
  }

  if (!passwordValue) {
    // is password is not provided
    passwordErrorField.innerText = 'Password cannot be empty';
    passwordErrorField.style.display = 'block';
  }

  if (passwordValue && passwordValue.length < 6) {
    passwordErrorField.innerText = 'Password length must be greater than 6';
    passwordErrorField.style.display = 'block';
  }
});
