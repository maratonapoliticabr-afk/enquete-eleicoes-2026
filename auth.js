function login() {
  let email = document.getElementById("email").value.trim();
  let senha = document.getElementById("senha").value.trim();

  if (!email || !senha) {
    alert("Preencha todos os campos");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");

  if (!usuarios[email]) {
    // cadastra novo
    usuarios[email] = {
      senha: senha,
      votou: false
    };
    localStorage.setItem("usuarios", JSON.stringify(usuarios));
  } else {
    if (usuarios[email].senha !== senha) {
      alert("Senha incorreta");
      return;
    }
  }

  sessionStorage.setItem("usuarioLogado", email);
  window.location.href = "index.html";
}
