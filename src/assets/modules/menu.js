

//Menu strategy
//Event handler to show and hide menu
    let show = true;

    const menuSection = document.querySelector(".page-lading-content");
    const menuToggle = menuSection.querySelector(".menu-toggle")

    menuToggle.addEventListener("click", () => {
        document.body.style.overflow = show ? "hidden" : "initial"

        menuSection.classList.toggle("on", show)
        show = !show;
    })
