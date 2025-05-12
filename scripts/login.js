document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            const storedUser = JSON.parse(localStorage.getItem(email));

            if (storedUser && storedUser.password === password) {
                alert(`Giriş başarılı! Hoş geldin, ${storedUser.username}.`);
            } else {
                alert("E-posta veya şifre hatalı.");
            }
        });
    }
});
