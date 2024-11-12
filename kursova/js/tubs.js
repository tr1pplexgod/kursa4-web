document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".products_tubs-list-tub");
    const items = document.querySelectorAll(".products_list-item");

    console.log(items);
    console.log(buttons);

    buttons.forEach((button) => {
        button.addEventListener("click", function () {
            buttons.forEach((btn) => btn.classList.remove("active"));

            this.classList.add("active");

            const category = this.textContent.trim().toLowerCase();

            items.forEach((item) => {
                const itemCategory = item.dataset.category?.toLowerCase();
                if (category === "all" || itemCategory === category) {
                    item.style.display = "block";
                } else {
                    item.style.display = "none";
                }
            });
        });
    });
});
