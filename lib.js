
function changeMode() {
    var htmlElement = document.getElementById('html');
    if (htmlElement.getAttribute('data-bs-theme') == "" || htmlElement.getAttribute('data-bs-theme') == "white") {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        sessionStorage.setItem("mode", "dark")
    } else {
        htmlElement.setAttribute('data-bs-theme', 'white')
        sessionStorage.setItem("mode", "white")
    }
}

function setMode() {
    var htmlElement = document.getElementById("html")

    if (sessionStorage.getItem("mode") == "dark" || sessionStorage.getItem("mode") == "" || sessionStorage.getItem("mode") == null) {
        sessionStorage.setItem("mode", "dark")
        htmlElement.setAttribute('data-bs-theme', "dark")
    } else {
        htmlElement.setAttribute('data-bs-theme', "white")
        sessionStorage.setItem("mode", "white")
    }
}
