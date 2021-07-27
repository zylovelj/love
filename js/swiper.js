var swiper = new Swiper('.swiper-container-lovelj1', {
    pagination: '.swiper-pagination-lovelj1',
    paginationClickable: true,
    spaceBetween: 30,
});

var swiper = new Swiper('.swiper-container-lovelj2', {
    pagination: '.swiper-pagination-lovelj2',
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflow: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true
    }
});

var swiper = new Swiper('.swiper-container-lovelj3', {
    pagination: '.swiper-pagination-lovelj3',
    effect: 'flip',
    grabCursor: true,
    nextButton: '.swiper-button-next-lovelj3',
    prevButton: '.swiper-button-prev-lovelj3'
});