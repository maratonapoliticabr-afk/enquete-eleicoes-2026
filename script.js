let numeroDigitado = "";

const candidatos = {
  "13": {
    nome: "Lula da Silva",
    foto: "lula.jpg"
  },
  "22": {
    nome: "Ratinho Jr",
    foto: "ratinho.jpg"
  },
  "17": {
    nome: "Flávio Bolsonaro",
    foto: "flavio.jpg"
  }
};

let votos = JSON.parse(localStorage.getItem("votos")) || {
  lula: 0,
  ratinho: 0,
  flavio: 0,
  branco: 0,
  nulo: 0
};

function digitar(num) {
  if (numeroDigitado.length >= 2) return;

  numeroDigitado += num;
  document.getElementById("numero").innerText = numeroDigitado;

  if (numeroDigitado.length === 2) {
    mostrarCandidato();
  }
}

function mostrarCandidato() {
  const candidato = candidatos[numeroDigitado];

  if (candidato) {
    document.getElementById("nome").innerText = candidato.nome;
    document.getElementById("foto").src = candidato.foto;
  } else {
    document.getElementById("nome").innerText = "VOTO NULO";
    document.getElementById("foto").src = "";
  }
}

function confirma() {
  if (numeroDigitado === "13") votos.lula++;
  else if (numeroDigitado === "22") votos.ratinho++;
  else if (numeroDigitado === "17") votos.flavio++;
  else votos.nulo++;

  salvar();
  limparTela();
}

function votarBranco() {
  votos.branco++;
  salvar();
  limparTela();
}

function corrige() {
  limparTela();
}

function limparTela() {
  numeroDigitado = "";
  document.getElementById("numero").innerText = "";
  document.getElementById("nome").innerText = "Digite o número";
  document.getElementById("foto").src = "";
}

function salvar() {
  localStorage.setItem("votos", JSON.stringify(votos));
}
