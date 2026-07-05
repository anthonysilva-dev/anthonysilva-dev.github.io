// Valida nome
function validarNome() {
  var campo = document.getElementById("nome");
  var valor = campo.value.trim();
  if (valor === "") {
    mostrarErro("erroNome", "Nome é obrigatório.");
    marcarInvalido(campo);
    return false;
  }
  if (valor.length < 3) {
    mostrarErro("erroNome", "Nome deve ter pelo menos 3 caracteres.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroNome");
  marcarValido(campo);
  return true;
}

// Valida e-mail
function validarEmail() {
  var campo = document.getElementById("email");
  var valor = campo.value.trim();
  if (valor === "") {
    mostrarErro("erroEmail", "E-mail é obrigatório.");
    marcarInvalido(campo);
    return false;
  }
  if (!emailValido(valor)) {
    mostrarErro("erroEmail", "Informe um e-mail válido.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroEmail");
  marcarValido(campo);
  return true;
}

// Valida telefone
function validarTelefone() {
  var campo = document.getElementById("telefone");
  var valor = campo.value.trim();
  if (valor === "") {
    mostrarErro("erroTelefone", "Telefone é obrigatório.");
    marcarInvalido(campo);
    return false;
  }
  if (!telefoneValido(valor)) {
    mostrarErro("erroTelefone", "Use o formato (82) 99999-9999.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroTelefone");
  marcarValido(campo);
  return true;
}

// Valida data de nascimento
function validarNascimento() {
  var campo = document.getElementById("nascimento");
  var valor = campo.value;
  if (valor === "") {
    mostrarErro("erroNascimento", "Data de nascimento é obrigatória.");
    marcarInvalido(campo);
    return false;
  }
  if (calcularIdade(valor) < 16) {
    mostrarErro("erroNascimento", "Você deve ter pelo menos 16 anos.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroNascimento");
  marcarValido(campo);
  return true;
}

// Valida curso
function validarCurso() {
  var campo = document.getElementById("curso");
  if (campo.value === "") {
    mostrarErro("erroCurso", "Selecione um curso.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroCurso");
  marcarValido(campo);
  return true;
}

// Valida turno
function validarTurno() {
  var turnos = document.querySelectorAll("input[name='turno']");
  var selecionado = false;
  for (var i = 0; i < turnos.length; i++) {
    if (turnos[i].checked) {
      selecionado = true;
      break;
    }
  }
  if (!selecionado) {
    mostrarErro("erroTurno", "Selecione um turno.");
    return false;
  }
  limparErro("erroTurno");
  return true;
}

// Valida áreas de interesse
function validarInteresses() {
  var interesses = document.querySelectorAll("input[name='interesses']:checked");
  if (interesses.length < 2) {
    mostrarErro("erroInteresses", "Selecione pelo menos 2 áreas de interesse.");
    return false;
  }
  limparErro("erroInteresses");
  return true;
}

// Valida senha
function validarSenha() {
  var campo = document.getElementById("senha");
  var valor = campo.value;
  if (valor === "") {
    mostrarErro("erroSenha", "Senha é obrigatória.");
    marcarInvalido(campo);
    return false;
  }
  if (valor.length < 8) {
    mostrarErro("erroSenha", "Senha deve ter pelo menos 8 caracteres.");
    marcarInvalido(campo);
    return false;
  }
  if (!/[A-Z]/.test(valor)) {
    mostrarErro("erroSenha", "Senha deve ter pelo menos uma letra maiúscula.");
    marcarInvalido(campo);
    return false;
  }
  if (!/[0-9]/.test(valor)) {
    mostrarErro("erroSenha", "Senha deve ter pelo menos um número.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroSenha");
  marcarValido(campo);
  return true;
}

// Valida confirmação de senha
function validarConfirmarSenha() {
  var campo = document.getElementById("confirmarSenha");
  var senha = document.getElementById("senha").value;
  var confirmar = campo.value;
  if (confirmar === "") {
    mostrarErro("erroConfirmarSenha", "Confirme sua senha.");
    marcarInvalido(campo);
    return false;
  }
  if (senha !== confirmar) {
    mostrarErro("erroConfirmarSenha", "As senhas não coincidem.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroConfirmarSenha");
  marcarValido(campo);
  return true;
}

// Valida mensagem
function validarMensagem() {
  var campo = document.getElementById("mensagem");
  var valor = campo.value.trim();
  if (valor.length < 50) {
    mostrarErro("erroMensagem", "Mensagem deve ter pelo menos 50 caracteres.");
    marcarInvalido(campo);
    return false;
  }
  limparErro("erroMensagem");
  marcarValido(campo);
  return true;
}

// Valida foto
function validarFoto() {
  var campo = document.getElementById("foto");
  if (campo.files.length === 0) {
    limparErro("erroFoto");
    return true;
  }
  var arquivo = campo.files[0];
  var tiposPermitidos = ["image/jpeg", "image/png"];
  if (tiposPermitidos.indexOf(arquivo.type) === -1) {
    mostrarErro("erroFoto", "Apenas JPG ou PNG são permitidos.");
    return false;
  }
  if (arquivo.size > 2 * 1024 * 1024) {
    mostrarErro("erroFoto", "A foto deve ter no máximo 2 MB.");
    return false;
  }
  limparErro("erroFoto");
  return true;
}

// Valida termos
function validarTermos() {
  var campo = document.getElementById("termos");
  if (!campo.checked) {
    mostrarErro("erroTermos", "Você deve aceitar os termos.");
    return false;
  }
  limparErro("erroTermos");
  return true;
}
