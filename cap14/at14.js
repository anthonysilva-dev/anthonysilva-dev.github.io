// Dados originais do perfil
var nomeOriginal = "João Silva";
var cursoOriginal = "Curso: Técnico em Informática";
var fotoOriginal = "imagens/perfil1.jpg";

// Contador de ações
var totalAcoes = 0;

// Função para registrar ação
function registrarAcao(descricao) {
  totalAcoes++;
  document.getElementById("contadorAcoes").textContent = totalAcoes;
  document.getElementById("ultimaAcao").textContent = descricao;
}

// Funcionalidade 1 — Alterar Nome
document.getElementById("btnAlterarNome").addEventListener("click", function() {
  document.getElementById("nomePerfil").textContent = "Maria Oliveira";
  registrarAcao("Alteração de nome");
});

// Funcionalidade 2 — Alterar Curso
document.getElementById("btnAlterarCurso").addEventListener("click", function() {
  document.getElementById("cursoPerfil").textContent = "Curso: Análise e Desenvolvimento de Sistemas";
  registrarAcao("Alteração de curso");
});

// Funcionalidade 3 — Alterar Foto
document.getElementById("btnAlterarFoto").addEventListener("click", function() {
  document.getElementById("fotoPerfil").src = "imagens/perfil2.jpg";
  registrarAcao("Alteração de foto");
});

// Funcionalidade 4 — Destacar Perfil
document.getElementById("btnDestacarPerfil").addEventListener("click", function() {
  document.getElementById("perfil").classList.add("perfilDestacado");
  registrarAcao("Destaque de perfil");
});

// Funcionalidade 5 — Restaurar Perfil
document.getElementById("btnRestaurar").addEventListener("click", function() {
  document.getElementById("nomePerfil").textContent = nomeOriginal;
  document.getElementById("cursoPerfil").textContent = cursoOriginal;
  document.getElementById("fotoPerfil").src = fotoOriginal;
  document.getElementById("perfil").classList.remove("perfilDestacado");
  registrarAcao("Restauração do perfil");
});

// Funcionalidade 6 — Alterar Tema
document.getElementById("temaSelect").addEventListener("change", function() {
  var tema = this.value;
  document.body.classList.remove("tema-escuro", "tema-azul");
  if (tema === "escuro") {
    document.body.classList.add("tema-escuro");
  } else if (tema === "azul") {
    document.body.classList.add("tema-azul");
  }
  registrarAcao("Alteração de tema");
});

// Funcionalidade 7 — Tamanho da Fonte
document.getElementById("fonteRange").addEventListener("input", function() {
  var tamanho = this.value;
  document.getElementById("biografiaPerfil").style.fontSize = tamanho + "px";
  document.getElementById("valorFonte").textContent = tamanho + "px";
  registrarAcao("Alteração de tamanho de fonte");
});

// Funcionalidade 8 — Mostrar ou Ocultar Biografia
document.getElementById("mostrarBio").addEventListener("change", function() {
  var bio = document.getElementById("biografiaPerfil");
  if (this.checked) {
    bio.style.display = "block";
    registrarAcao("Biografia exibida");
  } else {
    bio.style.display = "none";
    registrarAcao("Biografia ocultada");
  }
});

// Funcionalidade 9 — Atualizar Contato
document.getElementById("btnAtualizarContato").addEventListener("click", function() {
  var email = document.getElementById("emailInput").value;
  var telefone = document.getElementById("telefoneInput").value;

  if (email !== "") {
    document.getElementById("emailExibido").textContent = "E-mail: " + email;
  }
  if (telefone !== "") {
    document.getElementById("telefoneExibido").textContent = "Telefone: " + telefone;
  }
  registrarAcao("Atualização de contato");
});
