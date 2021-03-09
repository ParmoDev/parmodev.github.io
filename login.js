let loggedIn = false

function loginHref() {
    location.href = "login.html"
}

function loginCheck() {
    if (document.getElementById("username").value == "DashboardAdminAccess" && document.getElementById("password").value == "GAqTd?qrtX5j873Q") {
        loggedIn = true
        window.location.assign("success.html")
        console.log("Logged in!")

    } else {
        console.log("FAILED")
        window.location.assign("index.html")
    }
}

function loggedInCheck() {
    if (document.URL.includes("success.html") && loggedIn == true) {
        location.href = "dashboard.html"
    } else {
        location.href = "login.html"
    }
}
