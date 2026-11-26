fetch("/sidenav.html")
    .then(response => response.text())
    .then(data => {
        document.getElementById("nav").innerHTML = data;
        initDropdowns();
    });

function initDropdowns() {
    document.querySelectorAll(".dropdown-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                button.classList.toggle("active");

                const content = button.nextElementSibling;

                content.style.display =
                    content.style.display === "block"
                    ? "none"
                    : "block";
            });

        });
}