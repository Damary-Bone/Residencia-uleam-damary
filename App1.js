const form = document.querySelector('form');
const usuarioInput = document.getElementById('usuario');
const contraseñaInput = document.getElementById('contraseña');
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

  const usuario = usuarioInput.value.trim();
  const contraseña = contraseñaInput.value.trim();

  if (usuario === '' || contraseña === '') {
    showError('Por favor, complete todos los campos.');
    return;
  }

  usuarioInput.value = '';
  contraseñaInput.value = '';

  alert('Inicio de sesión exitoso.');

}

form.addEventListener('submit', validateForm);