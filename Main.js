// BurgerMenu mavbar
const restaurantNavBar = document.querySelector(".restaurant__li-navbar")
const menuItems = document.querySelectorAll(".menuItem")
const hamburger = document.querySelector(".restaurant__menu-hamburger")
const closeIcon = document.querySelector(".fa-xmark")
const menuIcon = document.querySelector(".fa-bars")

function toggleMenu() {

    if (restaurantNavBar.classList.contains("showMenu")) {
        restaurantNavBar.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    } else {
        restaurantNavBar.classList.add("showMenu");
        closeIcon.style.display = "block";
        menuIcon.style.display = "none";
    }
}

hamburger.addEventListener("click", toggleMenu)



// onclick to show details in img one two three
function BlogOne() {
    window.location.href = "http://127.0.0.1:5500/BlogpostOne.html"
}


function BlogTwo() {
    window.location.href = "http://127.0.0.1:5500/blogposttwo.html"
}

function BlogThree() {
    window.location.href = "http://127.0.0.1:5500/BlogThree.html"
}




