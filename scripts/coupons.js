document.addEventListener("DOMContentLoaded", function () {
    const couponList = document.getElementById("coupon-list");
    const coupons = JSON.parse(localStorage.getItem("coupons")) || [];

    if (couponList) {
        coupons.forEach(coupon => {
            let listItem = document.createElement("li");
            listItem.textContent = coupon;
            couponList.appendChild(listItem);
        });
    }
});
