const swiper = new Swiper('.achive-swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    slidesPerView: 1,
    thumbs: {
        swiper: {
            el: '.achive-swiper_mini',
            slidesPerView: 3,
            spaceBetween: 17,
        }
    }
});

const projectsSwiper = new Swiper('.projects__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // slideToClickedSlide: true,
    thumbs: {
        swiper: {
            el: '.projects__swiper_mini',
            slidesPerView: 3,
            spaceBetween: 14,
            autoHeight: true
        }
    },
    breakpoints: {
        769: {
            slidesPerView: 3,
            spaceBetween: 17,
            autoHeight: true,
            centeredSlides: true,

        }
    }

});

const optionsSwiperReviews = {
    freeMode: true,
    loop: true,
    spaceBetween: 15,
    slidesPerView: 2,
    breakpoints: {
        769: {
            direction: 'vertical',
        },

    }
}

const reviewsLeftSwiper = new Swiper('.reviews-swiper-one', {
    navigation: {
        nextEl: '.reviews-left-next',
        prevEl: '.reviews-left-prev',
    },
    ...optionsSwiperReviews
});
const reviewsCenterSwiper = new Swiper('.reviews-swiper-two', {
    navigation: {
        nextEl: '.reviews-center-next',
        prevEl: '.reviews-center-prev',
    },
    ...optionsSwiperReviews
});
const reviewsRightSwiper = new Swiper('.reviews-swiper-three', {
    navigation: {
        nextEl: '.reviews-right-next',
        prevEl: '.reviews-right-prev',
    },
    ...optionsSwiperReviews
});

const profSwiper = new Swiper('.prof__swiper', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 3000,
    },
    speed: 800,

});
