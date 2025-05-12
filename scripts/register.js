document.addEventListener("DOMContentLoaded", function () {
    const registerForm = document.getElementById("register-form");

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const username = document.getElementById("username").value;
            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            if (username && email && password) {
                localStorage.setItem(email, JSON.stringify({ username, email, password }));
                alert("Kayıt başarılı! Şimdi giriş yapabilirsiniz.");
                registerForm.reset();
            }
        });
    }
});
