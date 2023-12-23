var dt = document.getElementById("dt");

setInterval(function () {
    var date = new Date();
    dt.textContent = date.toDateString() + date.toTimeString();
}, 1000);

var data = window.prompt("Enter space separated ints");

var pos = (neg = zer = 0);

var nums = data.split(" ");

for (let i = 0; i < nums.length; i++) {
    if (eval(nums[i]) > 0) pos++;
    else if (eval(nums[i]) < 0) neg++;
    else zer++;
}
document.write(
    "<p> Positive : " +
        pos +
        "</p><p> Negative : " +
        neg +
        "</p><p> Zeroes: " +
        zer +
        "</p>"
);
