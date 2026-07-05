// Inicialização
document.addEventListener("DOMContentLoaded", function() {

  // Máscara de telefone
  aplicarMascaraTelefone(document.getElementById("telefone"));

  // Validação em tempo real — Nome
  document.getElementById("nome").addEventListener("input", validarNome);

  // Validação em tempo real — E-mail
  document.getElementById("email").addEventListener("input", validarEmail);

  // Validação em tempo real — Senha
  document.getElementById("senha").addEventListener("input", function() {
    validarSenha();
    atualizarForcaSenha(this.value);
  });

  // Validação em tempo real — Confirmar senha
  document.getElementById("confirmarSenha").addEventListener("input", validarConfirmarSenha);

  // Validação em tempo real — Mensagem
  document.getElementById("mensagem").addEventListener("input", function() {
    atualizarContador(this.value.length);
    validarMensagem();
  });

  // Preview da foto
  document.getElementById("foto").addEventListener("change", function() {
    var valido = validarFoto();
    if (valido && this.files.length > 0) {
      mostrarPreview(this.files[0]);
    } else {
      document.getElementById("previewFoto").innerHTML = "";
    }
  });

  // Envio do formulário
  document.getElementById("formInscricao").addEventListener("submit", function(e) {
    e.preventDefault();

    var tudo = [
      validarNome(),
      validarEmail(),
      validarTelefone(),
      validarNascimento(),
      validarCurso(),
      validarTurno(),
      validarInteresses(),
      validarSenha(),
      validarConfirmarSenha(),
      validarFoto(),
      validarMensagem(),
      validarTermos()
    ];

    var tudoValido = tudo.every(function(resultado) {
      return resultado === true;
    });

    if (tudoValido) {
      alert("Cadastro realizado com sucesso!");
      this.reset();
      document.getElementById("previewFoto").innerHTML = "";
      document.getElementById("contadorMensagem").textContent = "0/500";
      document.getElementById("forcaSenha").className = "forca-senha";
    }
  });

  // Limpar formulário
  document.getElementById("btnLimpar").addEventListener("click", function() {
    document.getElementById("previewFoto").innerHTML = "";
    document.getElementById("contadorMensagem").textContent = "0/500";
    document.getElementById("forcaSenha").className = "forca-senha";
    var campos = document.querySelectorAll("input, select, textarea");
    for (var i = 0; i < campos.length; i++) {
      campos[i].classList.remove("valido", "invalido");
    }
    var erros = document.querySelectorAll(".erro");
    for (var j = 0; j < erros.length; j++) {
      erros[j].textContent = "";
    }
  });

});

// Atualiza indicador de força da senha
function atualizarForcaSenha(valor) {
  var barra = document.getElementById("forcaSenha");
  barra.className = "forca-senha";
  if (valor.length === 0) return;
  var tem8 = valor.length >= 8;
  var temMaiuscula = /[A-Z]/.test(valor);
  var temNumero = /[0-9]/.test(valor);
  var pontos = (tem8 ? 1 : 0) + (temMaiuscula ? 1 : 0) + (temNumero ? 1 : 0);
  if (pontos === 1) barra.classList.add("forca-fraca");
  if (pontos === 2) barra.classList.add("forca-media");
  if (pontos === 3) barra.classList.add("forca-forte");
}

// Atualiza contador de caracteres da mensagem
function atualizarContador(quantidade) {
  document.getElementById("contadorMensagem").textContent = quantidade + "/500";
}

// Mostra preview da foto
function mostrarPreview(arquivo) {
  var reader = new FileReader();
  reader.onload = function(e) {
    document.getElementById("previewFoto").innerHTML =
      '<img src="' + e.target.result + '" alt="Preview da foto" />';
  };
  reader.readAsDataURL(arquivo);
}
