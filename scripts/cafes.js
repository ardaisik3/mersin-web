document.addEventListener("DOMContentLoaded", function () {
    const cafes = [
        { name: "Kahve Molası", city: "istanbul", description: "Öğrenciler için uygun fiyatlar ve sessiz çalışma ortamı." },
        { name: "Çatı Kafe", city: "ankara", description: "Ücretsiz Wi-Fi ve öğrencilere özel indirimler." },
        { name: "Sakinlik Espresso", city: "izmir", description: "Geniş çalışma alanı ve lezzetli kahveler." },
        { name: "Akademi Kahve", city: "istanbul", description: "Modern dekorasyon ve kaliteli kahve seçenekleri." },
        { name: "Retro Beans", city: "ankara", description: "Grup çalışmaları için geniş masalar ve rahat koltuklar." },
        { name: "Kırmızı Fincan", city: "izmir", description: "Öğrencilere özel sabah kahvaltısı indirimleri." },
        { name: "Fikir Atölyesi", city: "istanbul", description: "Sessiz okuma köşeleri ve düşük fiyatlı kahve seçenekleri." },
        { name: "Gece Çalışmaları", city: "ankara", description: "Sıcak içeceklerle dolu geniş bir menü." },
        { name: "Latte ve Kitap", city: "izmir", description: "Ücretsiz masa rezervasyonu ve öğrenci indirimleri." }
    ];

    const filter = document.getElementById("filter");
    const cafeList = document.getElementById("cafe-list");

    function displayCafes(city) {
        cafeList.innerHTML = "";
        cafes.filter(cafe => city === "all" || cafe.city === city)
             .forEach(cafe => {
                 let cafeItem = document.createElement("div");
                 cafeItem.classList.add("cafe-item");
                 cafeItem.innerHTML = `<h3>${cafe.name}</h3><p>${cafe.description}</p>`;
                 cafeList.appendChild(cafeItem);
             });
    }

    if (filter) {
        filter.addEventListener("change", function () {
            displayCafes(filter.value);
        });
        displayCafes("all");
    }
});
