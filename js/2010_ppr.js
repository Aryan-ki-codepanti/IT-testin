my_form.addEventListener("submit", function (e) {
    e.preventDefault();
    console.clear();
    console.log(`Sabji Checked : ${sabji.checked}`);
    console.log(`Chutney Checked : ${chutney.checked}`);
    console.log(`Country: ${country.value}`);
    console.log(`Male Checked : ${male.checked}`);
    console.log(`Female Checked : ${female.checked}`);

    console.log(
        `Gender : ${
            document.querySelector('input[name="gender"]:checked')?.value
        }`
    );
});
