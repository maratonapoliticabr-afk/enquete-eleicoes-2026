let votos = {
  "flavio": 0,
  "lula": 0,
  "ratinho": 0,
  "branco": 0,
  "nulo": 0
};

let votoAtual = null;

function selecionar(nome) {
  votoAtual = nome;
  document.getElementById("escolha").innerText = nome;
}

function confirmar() {
  if (!votoAtual) {
    alert("Escolha um candidato");
    return;
  }

  let campo = "";
  if (votoAtual === "Flávio Bolsonaro") campo = "flavio";
  else if (votoAtual === "Lula") campo = "lula";
  else if (votoAtual === "Ratinho Jr") campo = "ratinho";
  else if (votoAtual === "Branco") campo = "branco";
  else campo = "nulo";

  votos[campo] += 1;

  atualizarResultados();
  votoAtual = null;
  document.getElementById("escolha").innerText = "Voto computado ✔";
}

function atualizarResultados() {
  const total = votos.flavio + votos.lula + votos.ratinho + votos.branco + votos.nulo;
  const p = v => total === 0 ? "0%" : ((v / total) * 100).toFixed(1) + "%";

  document.getElementById("v1").innerText = votos.flavio;
  document.getElementById("v2").innerText = votos.lula;
  document.getElementById("v3").innerText = votos.ratinho;
  document.getElementById("vb").innerText = votos.branco;
  document.getElementById("vn").innerText = votos.nulo;

  document.getElementById("p1").innerText = p(votos.flavio);
  document.getElementById("p2").innerText = p(votos.lula);
  document.getElementById("p3").innerText = p(votos.ratinho);
  document.getElementById("pb").innerText = p(votos.branco);
  document.getElementById("pn").innerText = p(votos.nulo);
}
