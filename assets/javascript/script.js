/* Modal de novo item */
const modalNovoItem = document.getElementById("modal-item");
const btnNovoItem = document.getElementById("novo-item");
const btnCancelarNovoItem = document.getElementById("cancelar");
const btnsLista = document.querySelectorAll(".menu-btn");

btnNovoItem.addEventListener("click", () => {
  modalNovoItem.showModal();
});

btnCancelarNovoItem.addEventListener("click", () => {
  modalNovoItem.close();
});

btnsLista.forEach((btn) => {
  btn.addEventListener("click", () => {
    
    let idLista = btn.getAttribute("id");

    let menu = document.getElementById(idLista);

    if (menu.style.display === "" || menu.style.display === "none") {
        document.querySelector('.submenu').style.display = "flex";
    } else {
        alert("Não é none");
    }
  });
});
