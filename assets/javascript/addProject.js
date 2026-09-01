const btnAdd = document.getElementById('add_prj');
const btnCancel = document.getElementById('cancel_add_prj');
const btnCreate = document.getElementById('create');
const form = document.getElementById('cadastrar_proj');

// Define o ID do Usuário momentaneamente
document.addEventListener("DOMContentLoaded", () => {
  localStorage.setItem("usuarioId", 1);
});

btnAdd.addEventListener("click", () => {
  document.getElementById("add-proj").show();
})

btnCancel.addEventListener("click", () => {
  document.getElementById('add-proj').close();
});

let erroDiv = document.getElementById('erroDiv');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  btnCreate.disabled = true;
  btnCancel.disabled = true;
  btnCreate.textContent = "Registrando ...";

  let nomeProjeto = document.getElementById('nome_prj').value.trim();
  let descricaoProjeto = document.getElementById('desc_prj').value.trim();

  if (nomeProjeto == "" || descricaoProjeto == "") {
    erroDiv.textContent = 'Nome e descrição pode ser vazio!';
    return;
  }

  let dataHora = new Date().toISOString();

  fetch("http://localhost:8080/projetos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: nomeProjeto,
        descricao: descricaoProjeto,
        criacao: dataHora,
        usuarioId: Number(localStorage.getItem("usuarioId"))
      })
    })
    .then(async (response) => {
      if (!response.ok) {
        const erro = await response.text();
        throw new Error(erro || "Ocorreu um erro no servidor");
      }
      return response.json();
    })
    .then((dados) => {
      console.log("Sucesso:", dados);
    })
    .catch((err) => {
      console.error("Ocorreu um erro: ", err);
      erroDiv.textContent = err.message;
    });
})
