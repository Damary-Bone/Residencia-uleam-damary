
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type="email"]');
const passwordInput = document.querySelector('input[type="password"]');
const termsCheckbox = document.querySelector('input[type="checkbox"]');
const errorContainer = document.querySelector('.error-message');

function showError(message) {
  errorContainer.textContent = message;
  errorContainer.style.display = 'block';
}

function hideError() {
  errorContainer.textContent = '';
  errorContainer.style.display = 'none';
}

function validateForm(event) {
  event.preventDefault(); 

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === '' || password === '') {
    showError('Por favor, complete todos los campos.');
    return;
  }

  if (!termsCheckbox.checked) {
    showError('Debe aceptar los términos y condiciones.');
    return;
  }

  emailInput.value = '';
  passwordInput.value = '';

  alert('Formulario enviado correctamente.');

}
form.addEventListener('submit', validateForm);