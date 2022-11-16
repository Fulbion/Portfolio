const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

if (navToggle)
{
    navToggle.addEventListener("click", () =>
    {
        navMenu.classList.add("show-menu")
    })
}

if (navClose)
{
    navClose.addEventListener("click", () =>
    {
        navMenu.classList.remove("show-menu")
    })
}

const navLink = document.querySelectorAll(".nav-link");

function linkAction()
{
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}

navLink.forEach(link => link.addEventListener("click", linkAction))

const skillsContent = document.getElementsByClassName("skills-content"),
      skillsHeader = document.querySelectorAll(".skills-header");

function toggleSkills()
{
    let itemClass = this.parentNode.className

    for (let i = 0; i < skillsContent.length; i++)
    {
        skillsContent[i].className = "skills-content skills-close"
    }

    if (itemClass === "skills-content skills-close")
    {
        this.parentNode.className = "skills-content skills-open"
    }
}

skillsHeader.forEach((el) =>
{
    el.addEventListener("click", toggleSkills)
})

const modalViews = document.querySelectorAll(".services-modal"),
      modalBtns = document.querySelectorAll(".services-button"),
      modalCloses = document.querySelectorAll(".services-modal-close");

let modal = function(modalClick)
{
    modalViews[modalClick].classList.add("active-modal")
}

modalBtns.forEach((modalBtn, i) =>
{
    modalBtn.addEventListener("click", () =>
    {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>
{
    modalClose.addEventListener("click", () =>
    {
        modalViews.forEach((modalView) =>
        {
            modalView.classList.remove("active-modal")
        })
    })
})