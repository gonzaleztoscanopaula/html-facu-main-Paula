// main.ts
document.addEventListener("DOMContentLoaded", () => {
    const pedidosButton = document.querySelector("nav a[href='#pedidos']");
    if (pedidosButton) {
        pedidosButton.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "pedidos.html";
        });
    }

    const tableButtons = document.querySelectorAll(".table button");
    tableButtons.forEach((button) => {
        button.addEventListener("click", () => {
            window.location.href = "menu.html";
        });
    });
});

