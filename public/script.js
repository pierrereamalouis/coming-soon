const contentSubscribe = document.getElementById('contentSubscribe'),
  subtitle = document.getElementById('subtitle'),
  emailInput = document.getElementById('email'),
  errorMsg = document.getElementById('errorMsg'),
  btnSubmit = document.getElementById('btnSubmit'),
  success = document.getElementById('success'),
  error = document.getElementById('error');

function validateEmail(inputEmail) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(inputEmail);
}

emailInput.addEventListener('input', () => {
  errorMsg.style.display = 'none';
  btnSubmit.disabled = false;
  btnSubmit.classList.replace('btn-disabled', 'btn-primary');
});

btnSubmit.addEventListener('click', (event) => {
  event.preventDefault();

  if (!validateEmail(emailInput.value)) {
    errorMsg.style.display = 'block';
    emailInput.classList.add('form-control--error');
    btnSubmit.disabled = true;
    btnSubmit.classList.replace('btn-primary', 'btn-disabled');
  } else {
    let data = {
      method: 'POST',
      body: JSON.stringify({ email: emailInput.value, json: true }),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    fetch('/subscribe', data).then((res) => {
      if (res.status >= 400 && res.status < 600) {
        contentSubscribe.classList.add('invisible');
        subtitle.classList.add('invisible');
        error.style.display = 'block';
      } else {
        contentSubscribe.classList.add('invisible');
        subtitle.classList.add('invisible');
        success.style.display = 'block';
      }
    });
  }
});
