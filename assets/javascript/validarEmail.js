/**
 * Valida o formato do e-mail
 *
 * @param {string} email - E-mail
 * @returns {boolean} Se o formato é válido ou não
 */
function validarEmail(email) {
  var regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}
