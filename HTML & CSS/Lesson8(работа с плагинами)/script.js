const swiper = new Swiper(".mySwiper", {
    loop: true, // т.е. будет работать бесконечно
    autoplay: {
        delay: 3000, // ждёт 3000 мсек = 3 сек
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next", // следующий элемент
        prevEl: ".swiper-button-prev"  // предыдущий элемент
    }
})