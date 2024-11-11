(function () {
    emailjs.init("f_vpoj1YOuI5LwmEC");
})();

document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("user-name").value;
        const phone = document.getElementById("user-tel").value;
        const email = document.getElementById("user-email").value;
        const message = document.getElementById("user-comment").value;

        emailjs
            .send("service_6ofh7ed", "template_da78pt6", {
                user_email: email,
                name: name,
                phone: phone,
                message: message,
            })
            .then(
                function () {
                    alert("Ваше повідомлення успішно відправлено!");
                    document.getElementById("modal").style.display = "none";
                    document.getElementById("contactForm").reset();
                    document.body.classList.remove("no-scroll");
                },
                function (error) {
                    alert(
                        "Не вдалося відправити ваше повідомлення: " +
                            JSON.stringify(error)
                    );
                }
            );
    });
