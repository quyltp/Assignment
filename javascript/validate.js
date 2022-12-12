var x = document.getElementById("dangnhap");
x.style.display = "none";
var sigup = document.getElementsByClassName("signup");
for (let i = 0; i < sigup.length; i++) {
    sigup[i].style.display = "none";
}
var dieukhoan = document.getElementById("dieukhoan");
dieukhoan.style.display = "none";

function signup() {
    document.getElementById("formname").innerText = "Đăng ký";
    for (let i = 0; i < sigup.length; i++) {
        sigup[i].style.display = "block";
    }
    dieukhoan.style.display = "block";
    var login = document.getElementById("login");
    login.value = "Đăng ký";
    login.attributes[2].value = "checksignup()";
    document.getElementById("forgotpassword").style.display = "none";
    document.getElementById("acc").innerText = "Bạn đã có tài khoản?";
    var clickacc = document.getElementById("clickacc");
    clickacc.innerText = "Đăng nhập ngay";
    clickacc.attributes[0].value = "login()";
}

function login() {
    document.getElementById("formname").innerText = "Đăng nhập";
    dieukhoan.style.display = "none";
    for (let i = 0; i < sigup.length; i++) {
        sigup[i].style.display = "none";
    }
    var login = document.getElementById("login");
    login.value = "Đăng nhập";
    login.attributes[2].value = "checklogin()";
    document.getElementById("forgotpassword").style.display = "block";
    document.getElementById("acc").innerText = "Bạn chưa có tài khoản?";
    var clickacc = document.getElementById("clickacc");
    clickacc.innerText = "Đăng ký ngay";
    clickacc.attributes[0].value = "signup()";
}

function checkusername() {
    let username = document.getElementById("username").value;
    if (username.length < 5)
        document.getElementById("checkusername").innerText = "* Không được để trống hoặc ngắn hơn 5 ký tự.";
    else if (/\W/.test(username))
        document.getElementById("checkusername").innerText = "* Không được chứa khoẳng trắng hoặc ký tự đặc biệt.";
    else
        document.getElementById("checkusername").innerText = "";
}

function checkpassword() {
    let password = document.getElementById("password").value;
    if (password.length < 8)
        document.getElementById("checkpassword").innerText = "* Không được để trống hoặc ngắn hơn 8 ký tự.";
    else if (/\W/.test(password))
        document.getElementById("checkpassword").innerText = "* Không được chứa khoẳng trắng hoặc ký tự đặc biệt.";
    else
        document.getElementById("checkpassword").innerText = "";
}

function checkrepassword() {
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
    if (repassword.length < 8)
        document.getElementById("checkrepassword").innerText = "* Không được để trống hoặc ngắn hơn 8 ký tự.";
    else if (/\W/.test(repassword))
        document.getElementById("checkrepassword").innerText = "* Không được chứa khoẳng trắng hoặc ký tự đặc biệt.";
    else if (password != repassword)
        document.getElementById("checkrepassword").innerText = "* Mật khẩu không giống nhau.";
    else
        document.getElementById("checkrepassword").innerText = "";
}

function checkfullname() {
    let fullname = document.getElementById("fullname").value;
    if (fullname == "")
        document.getElementById("checkfullname").innerText = "* Không được để trống.";
    else if (/\d/.test(fullname))
        document.getElementById("checkfullname").innerText = "* Họ và tên của bạn không hợp lệ.";
    else
        document.getElementById("checkfullname").innerText = "";
}

function checkemail() {
    let email = document.getElementById("email").value;
    if (email.length < 5)
        document.getElementById("checkemail").innerText = "* Không được để trống hoặc ngắn hơn 5 ký tự.";
    else if (!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
        document.getElementById("checkemail").innerText = " * E-mail của bạn không hợp lệ.";
    else
        document.getElementById("checkemail").innerText = "";
}

function checkphone() {
    let phone = document.getElementById("phone").value;
    if (phone == "")
        document.getElementById("checkphone").innerText = "* Không được để trống.";
    else if (!/^[0][0-9]{9,10}$/.test(phone))
        document.getElementById("checkphone").innerText = "* Vui lòng kiểm tra lại số điện thoại.";
    else
        document.getElementById("checkphone").innerText = "";
}

function checkaddress() {
    let address = document.getElementById("address").value;
    if (address != "" && address.length < 10)
        document.getElementById("checkaddress").innerText = "Vui lòng kiểm tra lại địa chỉ";
    else
        document.getElementById("checkaddress").innerText = "";
}

function checklogin() {
    checkusername();
    checkpassword();
}

function checksignup() {
    checkusername();
    checkpassword();
    checkrepassword();
    checkfullname();
    checkemail();
    checkphone();
    checkaddress();
}
 function dongdangnhap() {
    if(x.style.display == "none")
        x.style.display = "block";
    else
        x.style.display = "none";
 }