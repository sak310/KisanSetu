function togglePassword(inputId, button) {

    const passwordInput =
        document.getElementById(inputId);

    const icon =
        button.querySelector("i");


    if (passwordInput.type === "password") {

        passwordInput.type = "text";

        icon.classList.remove("bi-eye");

        icon.classList.add("bi-eye-slash");

    } else {

        passwordInput.type = "password";

        icon.classList.remove("bi-eye-slash");

        icon.classList.add("bi-eye");
    }
}


/* Login demo */

const farmerLoginForm =
    document.getElementById("farmerLoginForm");


if (farmerLoginForm) {

    farmerLoginForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert("Farmer login submitted successfully!");

        }
    );

}