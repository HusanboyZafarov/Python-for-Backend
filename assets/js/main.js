let up = document.querySelector(".up"),
    header_enter_course = document.querySelector(".header_enter_course")

window.addEventListener("scroll", () => {
    up.classList.toggle("scrolled", window.scrollY > 500)
    up.style.height = header_enter_course.getBoundingClientRect().height
    header_enter_course.classList.toggle("scrolled", window.scrollY > 500)
})
let loader = document.querySelector(".loader-wrapper")

window.addEventListener("load", () => {
    loader.classList.add("loaded")
})