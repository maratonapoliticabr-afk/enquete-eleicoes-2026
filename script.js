let votos = {
  candidato1: 0,
  candidato2: 0,
  candidato3: 0,
  branco: 0,
  nulo: 0
};

function votar(opcao) {
  votos[opcao]++;
  atualizarResultados();
}

function atualizarResultados() {
  let total = Object.values(votos).reduce((a, b) => a + b, 0);
  let html = "";

  for (let opcao in votos) {
    let percentual = total > 0 ? ((votos[opcao] / total) * 100).toFixed(1) : 0;
    html += `<p>${opcao}: ${votos[opcao]} votos (${percentual}%)</p>`;
  }

  document.getElementById("resultados").innerHTML = html;
}