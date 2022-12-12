// search
var viewsearch = document.getElementById("showsearch");
viewsearch.style.display = "none";
var arrsearch = [];
function search() {
    var productname = document.getElementsByClassName("product-name");
    var input = document.getElementById("search").value;
    if (input != "") {
        arrsearch.splice(0, arrsearch.length);
        for (var i = 0; i < productname.length; i++)
            if (productname[i].innerText.toUpperCase().indexOf(input.toUpperCase()) > -1)
                arrsearch.push(productname[i]);
        if (arrsearch.length != 0) {
            document.getElementById("viewsearch").innerHTML = showsearch();
            viewsearch.style.display = "block";
        }
        else {
            viewsearch.style.display = "block";
            document.getElementById("viewsearch").innerText = "Không có kết quả cần tìm kiếm";
        }
    }
    else
        alert("Vui lòng nhập từ khóa để tìm kiếm");
}
function showsearch() {
    var kq = "";
    if (arrsearch.length != 0)
        for (var i = 0; i < arrsearch.length; i++)
            kq += "<a href=\"" + arrsearch[i].href + "\">" + arrsearch[i].innerText + "</a>";
    return kq;
}
function dong() {
    viewsearch.style.display = "none";
}