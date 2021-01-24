const contentSubscribe = document.getElementById('contentSubscribe'),
  subtitle = document.getElementById('subtitle'),
  email = document.getElementById('email'),
  errorMsg = document.getElementById('errorMsg'),
  btnSubmit = document.getElementById('btnSubmit'),
  success = document.getElementById('success');

function validateEmail(inputEmail) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(inputEmail);
}

email.addEventListener('input', () => {
  errorMsg.style.display = 'none';
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  if (email.value === null || email.value === '') {
    errorMsg.style.display = 'block';
  } else if (!validateEmail(email.value)) {
    errorMsg.style.display = 'block';
  } else {
    let data = {
      method: 'POST',
      body: JSON.stringify({ email: email.value, json: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('/subscribe', data).then((res) => {
      if (res.status >= 400 && res.status < 600) {
        errorMsg.textContent = 'Something went wrong. Refresh and try again';
        errorMsg.style.display = 'block';
      } else {
        contentSubscribe.classList.add('invisible');
        subtitle.classList.add('invisible');
        success.style.display = 'block';
      }
    });
  }
});
