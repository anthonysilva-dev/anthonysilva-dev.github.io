// Mostra mensagem de erro em um campo
function mostrarErro(idErro, mensagem) {
  var elemento = document.getElementById(idErro);
  if (elemento) {
    elemento.textContent = mensagem;
  }
}

// Limpa mensagem de erro
function limparErro(idErro) {
  var elemento = document.getElementById(idErro);
  if (elemento) {
    elemento.textContent = "";
  }
}

// Marca campo como válido
function marcarValido(campo) {
  campo.classList.remove("invalido");
  campo.classList.add("valido");
}

// Marca campo como inválido
function marcarInvalido(campo) {
  campo.classList.remove("valido");
  campo.classList.add("invalido");
}

// Valida formato de e-mail
function emailValido(email) {
  return email.indexOf("@") !== -1 && email.indexOf(".") !== -1;
}

// Valida formato de telefone (82) 99999-9999
function telefoneValido(tel) {
  var regex = /^\(\d{2}\)\s\d{5}-\d{4}$/;
  return regex.test(tel);
}

// Calcula idade a partir da data de nascimento
function calcularIdade(dataNascimento) {
  var hoje = new Date();
  var nascimento = new Date(dataNascimento);
  var idade = hoje.getFullYear() - nascimento.getFullYear();
  var mes = hoje.getMonth() - nascimento.getMonth();
  if (mes < 0 || (mes === 0 && hoje.getDate() < nascimento.getDate())) {
    idade--;
  }
  return idade;
}

// Aplica máscara de telefone
function aplicarMascaraTelefone(campo) {
  campo.addEventListener("input", function() {
    var valor = this.value.replace(/\D/g, "");
    if (valor.length <= 11) {
      valor = valor.replace(/^(\d{2})(\d)/, "($1) $2");
      valor = valor.replace(/(\d{5})(\d{1,4})$/, "$1-$2");
    }
    this.value = valor;
  });
}
