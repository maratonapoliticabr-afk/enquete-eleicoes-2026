let votos = {
  flavio: 0,
  lula: 0,
  ratinho: 0,
  romeu: 0,
  ronaldo: 0,
  branco: 0,
  nulo: 0
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

  let usuario = sessionStorage.getItem("usuarioLogado");
  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");

  if (!usuario || !usuarios[usuario]) {
    alert("Sessão inválida. Faça login novamente.");
    sessionStorage.removeItem("usuarioLogado");
    window.location.href = "login.html";
    return;
  }

  if (usuarios[usuario].votou === true) {
    alert("Você já votou. Seu voto é único.");
    return;
  }

  let mapa = {
    "Flávio Bolsonaro": "flavio",
    "Lula": "lula",
    "Ratinho Jr": "ratinho",
    "Romeu Zema": "romeu",
    "Ronaldo Caiado": "ronaldo",
    "Branco": "branco",
    "Nulo": "nulo"
  };

  let campo = mapa[votoAtual] || "nulo";

  votos[campo]++;

  // MARCA COMO VOTADO
  usuarios[usuario].votou = true;

  // SALVA DE VOLTA NO LOCALSTORAGE
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  atualizarResultados();

  votoAtual = null;
  document.getElementById("escolha").innerText = "Voto computado ✔";
}



function atualizarResultados() {
  const total = Object.values(votos).reduce((a, b) => a + b, 0);
  const p = v => total === 0 ? "0%" : ((v / total) * 100).toFixed(1) + "%";

  document.getElementById("v1").innerText = votos.flavio;
  document.getElementById("v2").innerText = votos.lula;
  document.getElementById("v3").innerText = votos.ratinho;
  document.getElementById("v4").innerText = votos.romeu;
  document.getElementById("v5").innerText = votos.ronaldo;
  document.getElementById("vb").innerText = votos.branco;
  document.getElementById("vn").innerText = votos.nulo;

  document.getElementById("p1").innerText = p(votos.flavio);
  document.getElementById("p2").innerText = p(votos.lula);
  document.getElementById("p3").innerText = p(votos.ratinho);
  document.getElementById("p4").innerText = p(votos.romeu);
  document.getElementById("p5").innerText = p(votos.ronaldo);
  document.getElementById("pb").innerText = p(votos.branco);
  document.getElementById("pn").innerText = p(votos.nulo);
}

