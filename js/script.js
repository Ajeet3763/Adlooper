

// -------------------Mobile Nav Bar-------------------

function openNav() {
    document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

const header = document.querySelector(".page-header");
const toggleClass = "is-sticky";
    
window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 150) {
        header.classList.add(toggleClass);
    } else {
        header.classList.remove(toggleClass);
    }
});
