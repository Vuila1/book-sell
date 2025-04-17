document.addEventListener("DOMContentLoaded", function () {
    const accountInfo = document.getElementById("account-info");
    const cartButton = document.getElementById("cart-button");
    const addToCartButtons = document.querySelectorAll(".add-to-cart");

    // Kiểm tra trạng thái đăng nhập
    if (localStorage.getItem("loggedIn") === "true") {
        const username = localStorage.getItem("username");
        accountInfo.textContent = `Đăng Xuất (${username})`;
        cartButton.style.display = "inline-block"; // Hiển thị nút "Giỏ Hàng"
        accountInfo.onclick = function () {
            const confirmLogout = confirm("Bạn có chắc chắn muốn đăng xuất không?");
            if (confirmLogout) {
                localStorage.removeItem("loggedIn");
                localStorage.removeItem("username");
                alert("Bạn đã đăng xuất thành công!");
                location.reload(); // Tải lại trang để cập nhật trạng thái
            }
        };
        // Cho phép thêm sản phẩm vào giỏ hàng
        addToCartButtons.forEach(button => {
            button.disabled = false;
            button.title = ""; // Xóa thông báo yêu cầu đăng nhập
        });
    } else {
        accountInfo.textContent = "Đăng Nhập";
        cartButton.style.display = "none"; // Ẩn nút "Giỏ Hàng"
        accountInfo.onclick = function () {
            location.href = "login.html";
        };
        // Vô hiệu hóa nút thêm vào giỏ hàng
        addToCartButtons.forEach(button => {
            button.disabled = true;
            button.title = "Vui lòng đăng nhập để thêm vào giỏ hàng!";
        });
    }
});