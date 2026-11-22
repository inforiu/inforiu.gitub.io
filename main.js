const sidebar = document.getElementById("main-sidebar");
const overlay = document.getElementById("myOverlay");

const menuButton = document.getElementById("menu-button");

function w3_open() {
    sidebar.style.display = "block";
    overlay.style.display = "block";
}

function w3_close() {
    sidebar.style.display = "none";
    overlay.style.display = "none";
}

menuButton.addEventListener("click", w3_open);

overlay.addEventListener("click", w3_close);
