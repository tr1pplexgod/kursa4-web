document.addEventListener("DOMContentLoaded", () => {
    const openModalButtons = document.querySelectorAll(".open-modal");
    const modal = document.getElementById("modal");
    const closeModalButton = modal.querySelector(".close");
    const footerInput = document.querySelector(".footer_search-input");
    const modalEmailInput = document.getElementById("user-email");

    openModalButtons.forEach((button) => {
        button.addEventListener("click", () => {
            if (footerInput.value) {
                modalEmailInput.value = footerInput.value;
            }
            modal.style.display = "block";
            document.body.classList.add("no-scroll");
        });
    });

    closeModalButton.addEventListener("click", closeModal);

    window.addEventListener("click", (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("no-scroll");
    }
});
