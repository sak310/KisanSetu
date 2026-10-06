/* =========================================
   GOVERNMENT PASSWORD
========================================= */

function toggleGovernmentPassword() {

    const password =
        document.getElementById("governmentPassword");

    const eye =
        document.getElementById("governmentEye");


    if (password.type === "password") {

        password.type = "text";

        eye.classList.remove("bi-eye");

        eye.classList.add("bi-eye-slash");

    } else {

        password.type = "password";

        eye.classList.remove("bi-eye-slash");

        eye.classList.add("bi-eye");
    }
}


/* =========================================
   GOVERNMENT LOGIN DEMO
========================================= */

const governmentForm =
    document.getElementById("governmentLoginForm");


if (governmentForm) {

    governmentForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            alert(
                "Government login submitted successfully!"
            );

        }
    );
}