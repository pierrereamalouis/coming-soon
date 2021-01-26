const contentSubscribe = document.getElementById('contentSubscribe'),
  subtitle = document.getElementById('subtitle'),
  emailInput = document.getElementById('email'),
  errorMsg = document.getElementById('errorMsg'),
  btnSubmit = document.getElementById('btnSubmit'),
  success = document.getElementById('success'),
  error = document.getElementById('error'),
  originalHeight = window.innerHeight,
  metaViewport = document.querySelector('meta[name=viewport]');

// Validate input email
function validateEmail(inputEmail) {
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  return emailPattern.test(inputEmail);
}

// Listen to email input
emailInput.addEventListener('input', () => {
  errorMsg.style.display = 'none';
  btnSubmit.disabled = false;
  btnSubmit.classList.replace('btn-disabled', 'btn-primary');
});

// Handle form submit with js using fetch API
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

// Handle soft keyboard screen resize event on mobile
window.addEventListener('resize', (e) => {
  if (originalHeight < window.innerHeight) {
    metaViewport.setAttribute(
      'content',
      'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
    );
  } else {
    document.documentElement.style.setProperty('overflow', 'auto');
    metaViewport.setAttribute(
      'content',
      'height=' + originalHeight + 'px, width=device-width, initial-scale=1.0'
    );
  }
});
