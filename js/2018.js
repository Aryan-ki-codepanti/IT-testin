var form = document.getElementById("product_form");
var pname = document.getElementById("pname");
var price = document.getElementById("price");
var price_val = document.getElementById("price_val");
price_val.innerText = price.value;

var messg = document.getElementById("message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var m = "";

    if (!pname.value || pname.value.length >= 20) m += "Product name invalid";

    if (!document.querySelector("input[name='ptype']:checked"))
        m += "\nProduct type not selected";
    if (!document.querySelector("input[name='warranty']:checked"))
        m += "\nWarranty not selected";

    if (m === "") m += "Form submitted ";
    messg.innerText = m;
});

price.addEventListener("input", function (e) {
    price_val.innerText = price.value;
});
