document.addEventListener("DOMContentLoaded", function () {
    const gameContainer = document.getElementById("game-container");
    const scoreDisplay = document.getElementById("score");
    const rewardMessage = document.getElementById("reward-message");

    let score = 0;

    function createBalloon() {
        const balloon = document.createElement("div");
        balloon.classList.add("balloon");
        balloon.textContent = "🎈";
        balloon.style.left = Math.random() * 90 + "%";
        balloon.style.top = "100%";
        balloon.style.position = "absolute";

        let position = 100;
        const interval = setInterval(() => {
            if (position <= -10) {
                clearInterval(interval);
                balloon.remove();
                return;
            }
            position -= 1;
            balloon.style.top = position + "%";
        }, 50);

        balloon.addEventListener("click", () => {
            clearInterval(interval);
            balloon.remove();
            score++;
            scoreDisplay.textContent = score;
            checkReward();
        });

        gameContainer.appendChild(balloon);
    }

    function checkReward() {
        let coupons = JSON.parse(localStorage.getItem("coupons")) || [];
        if (score === 5) {
            rewardMessage.textContent = "Tebrikler! %10 indirim kuponu kazandınız!";
            coupons.push("%10 indirim kuponu");
        } else if (score === 10) {
            rewardMessage.textContent = "Harika! %20 indirim kuponu kazandınız!";
            coupons.push("%20 indirim kuponu");
        }
        localStorage.setItem("coupons", JSON.stringify(coupons));
    }

    // Her 2 saniyede bir yeni balon oluştur
    setInterval(createBalloon, 2000);
});
