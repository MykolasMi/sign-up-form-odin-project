const pass = document.getElementById("password");
var confirmPass = document.getElementById("confirmPassword");
const indicator = document.getElementById("indicator");

confirmPass.addEventListener('keyup', function() {
    var input = confirmPass.value;
    var firstInput = pass.value;
    checkPass(input, firstInput);
})

function checkPass(confirmPasss, passs) {
    if (passs === confirmPasss ) {
        console.log("good");
        indicator.textContent = "";
        pass.className = 'noError';
        confirmPass.className = 'noError';
    }
    else {
        console.log("bad");
        pass.className = 'error';
        confirmPass.className = 'error';
        indicator.textContent = "*Passwords don't match";
    }
}