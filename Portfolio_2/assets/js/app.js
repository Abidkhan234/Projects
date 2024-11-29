// for side-menu
var sideBar = document.getElementById("side-menu");

var mediaQuery = window.matchMedia("(max-width: 425px)");

var sideBarShow = () => {
    if (mediaQuery.matches) {
        sideBar.style.width = "100%";
    } else {
        sideBar.style.width = "250px";
        sideBar.style.padding = "10px";
    }
}

var closeSideBar = () => {
    sideBar.style.width = "0px";
    sideBar.style.padding = "0px";
}
// for side-menu

// for active-page

const sections = document.querySelectorAll("section");

const links = document.querySelectorAll(".menu ul li a");

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach((section) => {
        let height = section.offsetHeight;
        let offset = section.offsetTop - 180; // Adjust the offset for better control
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            // Remove 'active' class from all links
            links.forEach((link) => link.classList.remove("active"));

            // Add 'active' class to the current section link
            const activeLink = document.querySelector(`.menu ul li a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add("active");
        }
    });
}


// for active-page