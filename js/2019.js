var btn = document.getElementById("fetch");
var idx = document.getElementById("idx");
var prop = document.getElementById("prop");
var content = document.getElementById("content");

var obj = [
    {
        name: "Jim Corbett National Park",
        state: "Uttarakhand",
        speciality: "tigers"
    },
    {
        name: "Kaziranga National Park",
        state: "Assam",
        speciality: "Rhinos"
    },
    {
        name: "Asola Bhatti Wildlife Sanctuary",
        state: "Delhi",
        speciality: "Birds"
    },
    {
        name: "Gir National Park",
        state: "Gujarat",
        speciality: "Lions"
    }
];

btn.addEventListener("click", function () {
    var i = parseInt(idx.value);
    var p = prop.value;
    if (!i || !p) {
        content.textContent = "Missing Index/Property";
        return;
    }
    content.textContent = obj[i][p];
});
