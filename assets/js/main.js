let up = document.querySelector(".up"),
    header_enter_course = document.querySelector(".header_enter_course")

window.addEventListener("scroll", () => {
    up.classList.toggle("scrolled", window.scrollY > 500)
    up.style.height = header_enter_course.getBoundingClientRect().height
    header_enter_course.classList.toggle("scrolled", window.scrollY > 500)
})



let contact_form_input = document.querySelectorAll(".contact_form input")
let contact_form_label = document.querySelectorAll(".contact_form label")
contact_form_input.forEach((el) => {
    el.addEventListener("click", () => {
        label = el.previousElementSibling
        contact_form_label.forEach((item) => {
            item.classList.remove("hovered")
        });
        label.classList.add("hovered")
    })
}
)