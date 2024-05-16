function toggleMenu() {
    let menu = document.getElementById("menu");
    let icono = document.querySelector(".icono-hamburguesa");
    if (menu.style.display === "block") {
        menu.style.display = "none";
        icono.innerHTML = "&#9776;"; // Cambia el icono a hamburguesa
    } else {
        menu.style.display = "block";
        icono.innerHTML = "&#10006;"; // Cambia el icono a X
    }
}
