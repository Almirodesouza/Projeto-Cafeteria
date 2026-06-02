const btnEndereco = document.querySelector(".btn-endereço");
const modal = document.querySelector(".modal");
const mascaraModal = document.querySelector(".mascara-modal");

btnEndereco.addEventListener("click", () => {
    modal.style.left = "50%";
    mascaraModal.style.visibility = "visible";
});

mascaraModal.addEventListener("click", () => {
    modal.style.left = "-23%";
    mascaraModal.style.visibility = "hidden";
});
