document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  var name = document.getElementById('name').value.trim();
  var email = document.getElementById('email').value.trim();
  var errorMessage = '';

  // Basic validation
  if (name === '') {
    errorMessage += 'Name is required.<br>';
  }
  if (email === '') {
    errorMessage += 'Email is required.<br>';
  } else if (!isValidEmail(email)) {
    errorMessage += 'Email is not valid.<br>';
  }

  if (errorMessage !== '') {
    document.getElementById('error-message').innerHTML = errorMessage;
  } else {
    document.getElementById('error-message').innerHTML = '';
    document.getElementById('success-message').style.display = 'block';

    // Submit the form (you can add AJAX here if needed)
    // document.getElementById('contactForm').submit();
  }
});

function isValidEmail(email) {
  // Simple email validation
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}
