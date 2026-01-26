// Inicializa votos no LocalStorage
const candidatos = ['lula', 'ratinho', 'flavio', 'branco', 'nulo'];

candidatos.forEach(c => {
  if (!localStorage.getItem(c)) {
    localStorage.setItem(c, 0);
  }
});

function votar(candidato) {
  let votos = parseInt(localStorage.getItem(candidato));
  votos++;
  localStorage.setItem(candidato, votos);
  atualizarTela();
}

function atualizarTela() {
  candidatos.forEach(c => {
    document.getElementById(c).innerText = localStorage.getItem(c);
  });
}

// Atualiza ao abrir a página
atualizarTela();
