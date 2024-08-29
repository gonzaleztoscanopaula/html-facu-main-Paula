// main.ts
document.addEventListener("DOMContentLoaded", function () {
    var pedidosButton = document.querySelector("nav a[href='#pedidos']");
    if (pedidosButton) {
        pedidosButton.addEventListener("click", function (event) {
            event.preventDefault();
            window.location.href = "pedidos.html";
        });
    }
    var tableButtons = document.querySelectorAll(".table button");
    tableButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            window.location.href = "realizar_pedido.html";
        });
    });
});
