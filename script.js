<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore-compat.js"></script>

<script>
  // CONFIGURAÇÃO FIREBASE
  const firebaseConfig = {
    apiKey: "AIzaSyAmrXYsq92CCO77M_Lgfsgnsnh2vwiW15E",
    authDomain: "enquete-eleicoes-2026.firebaseapp.com",
    projectId: "enquete-eleicoes-2026",
    storageBucket: "enquete-eleicoes-2026.firebasestorage.app",
    messagingSenderId: "205259728257",
    appId: "1:205259728257:web:a47bd907144759a468b480"
  };

  firebase.initializeApp(firebaseConfig);
  const db = firebase.firestore();

  const docRef = db.collection("votos").limit(1);

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

    docRef.get().then(snapshot => {
      const doc = snapshot.docs[0];
      const id = doc.id;

      const campo = votoAtual.toLowerCase().includes("lula") ? "lula" :
                    votoAtual.toLowerCase().includes("ratinho") ? "ratinho" :
                    votoAtual.toLowerCase().includes("flávio") ? "flavio" :
                    votoAtual === "Branco" ? "branco" : "nulo";

      db.collection("votos").doc(id).update({
        [campo]: firebase.firestore.FieldValue.increment(1)
      });

      votoAtual = null;
      document.getElementById("escolha").innerText = "Voto computado ✔";
    });
  }

  db.collection("votos").onSnapshot(snapshot => {
    const d = snapshot.docs[0].data();

    const total = d.lula + d.ratinho + d.flavio + d.branco + d.nulo;
    const p = v => total === 0 ? "0%" : ((v / total) * 100).toFixed(1) + "%";

    document.getElementById("v1").innerText = d.flavio;
    document.getElementById("v2").innerText = d.lula;
    document.getElementById("v3").innerText = d.ratinho;
    document.getElementById("vb").innerText = d.branco;
    document.getElementById("vn").innerText = d.nulo;

    document.getElementById("p1").innerText = p(d.flavio);
    document.getElementById("p2").innerText = p(d.lula);
    document.getElementById("p3").innerText = p(d.ratinho);
    document.getElementById("pb").innerText = p(d.branco);
    document.getElementById("pn").innerText = p(d.nulo);
  });
</script>
