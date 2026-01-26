let votoSelecionado = null;

// inicializa votos no localStorage se não existir
if (!localStorage.getItem("votos")) {
  localStorage.setItem("votos", JSON.stringify({
    lula: 0,
    ratinho: 0,
    flavio: 0,
    branco: 0,
    nulo: 0
  }));
}

// função para selecionar voto
function votar(tipo) {
  votoSelecionado = tipo;
  alert("Voto selecionado: " + tipo.toUpperCase());
}

// confirmar voto
function confirmarVoto() {

  if (localStorage.getItem("jaVotou") === "sim") {
    alert("Você já votou. Obrigado!");
    return;
  }

  if (!votoSelecionado) {
    alert("Selecione um candidato antes de confirmar.");
    return;
  }

  let votos = JSON.parse(localStorage.getItem("votos"));
  votos[votoSelecionado]++;
  localStorage.setItem("votos", JSON.stringify(votos));

  localStorage.setItem("jaVotou", "sim");

  atualizarTela();

  alert("Voto confirmado com sucesso!");
}

// atualizar resultados na tela
function atualizarTela() {
  let votos = JSON.parse(localStorage.getItem("votos"));

  document.getElementById("votos-lula").innerText = votos.lula;
  document.getElementById("votos-ratinho").innerText = votos.ratinho;
  document.getElementById("votos-flavio").innerText = votos.flavio;
  document.getElementById("votos-branco").innerText = votos.branco;
  document.getElementById("votos-nulo").innerText = votos.nulo;
}

// atualiza automaticamente ao abrir
atualizarTela();
