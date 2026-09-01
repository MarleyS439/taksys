const check = document.getElementById("concluir-1");

check.addEventListener("change", () => {
  concluir("ti-1");
});

function concluir(id) {
  let titulo = document.getElementById(`${id}`);

  if (
    titulo.style.textDecoration === "" ||
    titulo.style.textDecoration === "none"
  ) {
    titulo.style.textDecoration = "line-through";
  } else {
    titulo.style.textDecoration = "none";
  }
}
