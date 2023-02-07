let up = document.querySelector(".up"),
    header_enter_course = document.querySelector(".header_enter_course")

window.addEventListener("scroll", () => {
    up.classList.toggle("scrolled", window.scrollY > 500)
    up.style.height = header_enter_course.getBoundingClientRect().height
    header_enter_course.classList.toggle("scrolled", window.scrollY > 500)
})

var countDownDate = new Date("Feb 20, 2023 17:35:25").getTime();

var x = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".day").innerHTML = days
    document.querySelector(".hour").innerHTML = hours
    document.querySelector(".min").innerHTML = minutes
    document.querySelector(".second").innerHTML = seconds
    if (countDownDate < now) {
        clearInterval(x);
        document.querySelector(".hero-coundown").innerHTML = "Vaqt tugadi!";
    }
}, 1000);