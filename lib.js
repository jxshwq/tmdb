
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

    // var card = document.getElementById("card")
    // while (card.nextSibling != null) {
    //         console.log(card.nextSibling)
    //         card = card.nextSibling
    //         card.previousSibling.remove()
    // }

    while (card.nextSibling != null) {
        card.nextSibling.remove()
    }
}


// function deleteCards() {

//     var card = document.getElementById("card")
//     while (card.nextSibling.nex
//          != null) {
//         card.nextSibling.remove()
//     }
// }