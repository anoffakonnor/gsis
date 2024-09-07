const primaryNav = document.querySelector(".nav-list");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    const visibility = primaryNav.getAttribute("data-visible");

    if (visibility === "false") {
        primaryNav.setAttribute("data-visible", "true")
    }
})

function greet(name){
    console.log(Hello, ${name}!);
}

greet('Mimmie')
