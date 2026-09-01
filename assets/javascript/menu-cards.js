function toggle(botao) {
    let menu = botao.closest('.card').querySelector('.opts');
    menu.style.display = menu.style.display === "flex" ? "none" : "flex";
}