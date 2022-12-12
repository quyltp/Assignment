var arrProduct = [];
var countcart = 0;
document.getElementById("cartlist").parentElement.style.display = "none";

//  Kiểm tra đã tồn tại sản phẩm trong local storage
if (JSON.parse(window.localStorage.getItem("DSGioHang"))) {
    arrProduct = JSON.parse(window.localStorage.getItem("DSGioHang"));
    for (let i = 0; i < arrProduct.length; i++) {
        countcart += arrProduct[i][3];
    }
    document.getElementById("countcart").innerText = countcart;
}

// Hiển thị giỏ hàng khi bấm vào giỏ hàng
function showcart() {
    let showcart = document.getElementById("cartlist").parentElement;
    if (countcart != 0) {
        showcart.style.display == "none" ? showcart.style.display = "block" : showcart.style.display = "none";
        document.getElementById("cartlist").innerHTML = cartlist();
    }
    else {
        alert("Chưa có sản phẩm nào trong giỏ hàng!");
    }
}

// Lấy dữ liệu trong mảng sản phẩm in ra màn hình
function cartlist() {
    let kq = "";
    let tongtien = 0;
    for (let i = 0; i < arrProduct.length; i++) {
        let thanhtien = arrProduct[i][2] * arrProduct[i][3];
        tongtien += thanhtien;
        kq += `<tr>
                <td>${i + 1}</td>
                <td><img src="${arrProduct[i][0]}" alt=""></td>
                <td><a href="${arrProduct[i][4]}">${arrProduct[i][1]}</a></td>
                <td>${arrProduct[i][2]}</td>
                <td>${arrProduct[i][3]}</td>
                <td>${thanhtien}</td>
                <td><button id="deletecart" onclick="deletecart(this)">Xóa</button></td>
            </tr>`;
    }
    kq += `<tr><td colspan="5">Tổng tiền</td><td colspan="2">${tongtien}</td></tr>`;
    return kq;
}

// Thêm sản phẩm vào giỏ hàng
function addcart(button) {
    let item = button.parentElement.cloneNode(true);
    let link = item.children[0].href;
    let img = item.children[0].children[0].src;
    let name = item.children[1].innerText;
    let price = Number(item.children[2].innerText);
    let flag = 0;
    for (let i = 0; i < arrProduct.length; i++) {
        if (name == arrProduct[i][1]) {
            arrProduct[i][3]++;
            flag = 1;
        }
    }
    if (flag == 0) {
        info = [img, name, price, 1, link];
        arrProduct.push(info);
    }
    upload();
}

// Xóa sản phẩm khỏi giỏ hàng
function deletecart(button) {
    let tablerow = button.parentElement.parentElement.cloneNode(true);
    let id = tablerow.children[0].innerText;
    arrProduct.splice(id - 1, 1);
    upload();
}

// Upload lại dữ liệu mỗi khi thêm/xóa sản phẩm
function upload() {
    window.localStorage.setItem("DSGioHang", JSON.stringify(arrProduct));
    countcart = 0;
    for (let i = 0; i < arrProduct.length; i++) {
        countcart += arrProduct[i][3];
    }
    document.getElementById("countcart").innerText = countcart;
    if (countcart != 0)
        document.getElementById("cartlist").innerHTML = cartlist();
    else {
        localStorage.removeItem("DSGioHang");
        document.getElementById("cartlist").parentElement.style.display = "none";
    }
}

// Thanh toán thành công và xóa dữ liệu trong local storage
function thanhtoan() {
    alert("Cảm ơn bạn đã đồng hành cùng shop");
    localStorage.removeItem("DSGioHang");
    location.reload();  // Load lại trang
}