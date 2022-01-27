{/* <script src="https://unpkg.com/swiper/swiper-bundle.min.js"></script> */}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
    },
});
$(".swipper-wrapper").on("mouseenter", function (e) {
    console.log("stop autoplay");
    swiper.stopAutoplay();
});
$(".swipper-wrapper").on("mouseleave", function (e) {
    console.log("start autoplay");
    swiper.startAutoplay();
});