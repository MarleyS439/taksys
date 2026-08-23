// Função para validar formato de e-mail via regex
function validarEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
