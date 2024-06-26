
function changeMode() {
    var htmlElement = document.getElementById('html');
    var logo = document.getElementById("logo")
    if (htmlElement.getAttribute('data-bs-theme') == "" || htmlElement.getAttribute('data-bs-theme') == "white") {
        htmlElement.setAttribute('data-bs-theme', 'dark');
        logo.setAttribute("title", "contrast")
        logo.setAttribute("class", "contrast")
        sessionStorage.setItem("mode", "dark")
    } else {
        htmlElement.setAttribute('data-bs-theme', 'white')
        sessionStorage.setItem("mode", "white")
        logo.setAttribute("title", "brightness")
        logo.setAttribute("class", "brightness")
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

function setSelectedMovieId(event) {
    var selectedMovieId = event.currentTarget.dataset.id;
    window.location.href = "film.html?movieId=" + encodeURIComponent(selectedMovieId);
}

function selectActivePage() {
    var page1 = document.getElementById("page1")
    var page2 = document.getElementById("page2")
    var page3 = document.getElementById("page3")
    var previous = document.getElementById("previous")
    var next = document.getElementById("next")
    if (pagePreset != 1) {
        previous.classList.remove("disabled")
        page1.innerHTML = pagePreset - 1
        page1.classList.remove("active")
        page2.innerHTML = pagePreset
        page2.classList.add("active")
        page3.innerHTML = pagePreset + 1
        page3.classList.remove("active")
        page3.classList.remove("disabled")

    } else if (pagePreset == totalPages) {
        page1.innerHTML = pagePreset - 2
        page1.classList.remove("active")
        page2.innerHTML = pagePreset - 1
        page2.classList.remove("active")
        page3.innerHTML = pagePreset
        page3.classList.add("active")
    } else {
        previous.classList.add("disabled")
        page1.innerHTML = pagePreset
        page1.classList.add("active")
        page2.innerHTML = pagePreset + 1
        page2.classList.remove("active")
        page3.innerHTML = pagePreset + 2
        page3.classList.remove("active")
        page3.classList.remove("disabled")
    }
}


function deleteCards() {
    var card = document.getElementById("card");
    var parent = card.parentNode;
    var lastChild = parent.lastChild;
    while (card.nextSibling != lastChild) {
        card.remove()
        card = document.getElementById("card");
    }
}

function getNumberOfResults() {
    
}


var searchBar = document.querySelector('.searchbar');
var searchInput = document.querySelector('.search_input');

searchInput.addEventListener('focus', function() {
    searchBar.classList.add('focused');
});

searchInput.addEventListener('blur', function() {
    searchBar.classList.remove('focused');
});