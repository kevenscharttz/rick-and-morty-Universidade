document.addEventListener("DOMContentLoaded", function () {
    const filterMenus = document.querySelectorAll(".menu__options");

    // Alterna a visibilidade dos filtros ao clicar nos menus
    filterMenus.forEach(menu => {
        menu.addEventListener("click", function () {
            const dropdown = this.nextElementSibling;
            dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
        });
    });

    // Alterna o estado do botão quando clicado
    const filterButtons = document.querySelectorAll(".filter__button");

    filterButtons.forEach(button => {
        button.addEventListener("click", function () {
            this.classList.toggle("active");
        });
    });
});
