document.querySelector(".btn").addEventListener("click", function() {
    // Get input values
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check credentials
    if (username === "ADMIN" && password === "12345") {
        alert("Login Success");
    } else {
        alert("Invalid Details");
    }
});