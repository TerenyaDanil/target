

burger = document.querySelector('.header__burger');
menu = document.querySelector('.header__menu');
body = document.querySelector('body');

burger.onclick = function () {
    burger.classList.toggle('active');
    menu.classList.toggle('active');

}


const anchors = document.querySelectorAll('a.scroll-to')

for (let anchor of anchors) {
    anchor.addEventListener('click', function (e) {
        e.preventDefault()

        const blockID = anchor.getAttribute('href')

        document.querySelector(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
    })
}



btn = document.querySelector('.inner-program__btn');
dop = document.querySelector('.inner-program__item-dop');


btn.onclick = function () {
    btn.classList.add('active');
    dop.classList.add('active');

}


var qus = document.querySelectorAll('.qustions__item-plus')

qus.forEach(function (el) {
    el.onclick = function () {
        el.classList.toggle("active");
        el.previousElementSibling.classList.toggle("active");
    }
});


var swiper = new Swiper('.cases__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,

    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.cases__slider-next',
        prevEl: '.cases__slider-prev',
    },
    breakpoints: {

        768: {
            slidesPerView: 2,

            slidesPerGroup: 2,
            spaceBetween: 100,
        },

    }

});

var swiper = new Swiper('.rev__slider', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 100,
    loop: true,
    speed: 1000,
    navigation: {
        nextEl: '.rev__slider-next',
        prevEl: '.rev__slider-prev',
    },
    breakpoints: {

        768: {
            slidesPerView: 2,
            spaceBetween: 100,
            slidesPerGroup: 2,
        },

    }

});

let header = gsap.timeline({
    scrollTrigger: {
        trigger: ".header",   // pin the trigger element while active
        start: "top center",




    }
});


header.from(".bot-header__man", { duration: 1.5, ease: "power4.out", opacity: 0, x: 250 }, "+=0.2")
    .from(".bot-header__name", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
    .from(".bot-header__title", { duration: 1.6, ease: "power4.out", opacity: 0, x: -350 }, "-=0.4")
    .from(".bot-header__btn", { duration: 1.7, ease: "power4.out", opacity: 0, x: -150 }, "-=0.8")




let about = gsap.timeline({
    scrollTrigger: {
        trigger: ".about",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play pause resume reverse",


    }
});

about.from(".about__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 350 })
    .from(".about__text", { duration: 1.3, ease: "power4.out", opacity: 0, y: 150 }, "-=0.5")
    .from(".about__dop", { duration: 1.3, ease: "power4.out", opacity: 0, y: 50 }, "-=0.5")




let info = gsap.timeline({
    scrollTrigger: {
        trigger: ".info",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});

info.from(".info__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 })
    .from(".inner-info__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
    .from(".inner-info__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, x: 150 }, "-=0.6")
    .from(".inner-info__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
    .from(".inner-info__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, x: 150 }, "-=0.6")
    .from(".inner-info__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, x: -150 }, "-=0.6")
    .from(".inner-info__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, x: 150 }, "-=0.6")


let forr = gsap.timeline({
    scrollTrigger: {
        trigger: ".for",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});

forr.from(".for__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 250 })
    .from(".for-inner__item-1", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".for-inner__item-2", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".for-inner__item-3", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".for-inner__item-4", { duration: 1, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")


let cource = gsap.timeline({
    scrollTrigger: {
        trigger: ".do",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});


cource.from(".do__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 250 })
    .from(".inner-do__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-do__item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")


let speakers = gsap.timeline({
    scrollTrigger: {
        trigger: ".speakers",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});

speakers.from(".speakers__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 250 })
    .from(".wrap-speakers__img-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".speakers__text-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".wrap-speakers__img-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".speakers__text-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".wrap-speakers__img-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".speakers__text-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".wrap-speakers__img-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".speakers__text-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")


let program = gsap.timeline({
    scrollTrigger: {
        trigger: ".program__inner",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});

program.from(".program__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 })
    .from(".inner-program__item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")
    .from(".inner-program__item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 150 }, "-=0.6")






let tarif = gsap.timeline({
    scrollTrigger: {
        trigger: ".tarif",   // pin the trigger element while active
        start: "top center",

    }
});


let tarifItem = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "-300px center",
        end: "center center",



    }
});

let ItemOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-1",   // pin the trigger element while active
        start: "200px center",




    }
});


let ItemTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-2",   // pin the trigger element while active
        start: "200px center"



    }
});


let ItemThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__item-3",   // pin the trigger element while active
        start: "200px center",

    }
});


let tarifOne = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-1",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifTwo = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-2",   // pin the trigger element while active
        start: "top center",


    }
});


let tarifThree = gsap.timeline({
    scrollTrigger: {
        trigger: ".inner-tarif__price-3",   // pin the trigger element while active
        start: "top center",

    }
});






if (window.innerWidth > 737) {


    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.8")
        .from(".inner-tarif__img-1", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-2", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__img-3", { duration: 1.2, ease: "power4.out", opacity: 0, y: -50 }, "-=0.8")
        .from(".inner-tarif__text-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-10", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-11", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-12", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-13", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__text-item-14", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__dop", { duration: 1, ease: "power4.out", opacity: 0, y: 50 }, "-=0.8")

    tarifItem.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.2")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
        .from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })
} else {
    tarif.from(".tarif__title", { duration: 1.2, ease: "power4.out", opacity: 0, y: 150 }, "-=0.2")

    ItemOne.from(".inner-tarif__img-1", { duration: 1.2, ease: "power4.out", opacity: 0, x: 150 }, "-=0.2")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-10", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-11", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-12", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-13", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-1 .inner-tarif__text-item-14", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

    tarifOne.from(".inner-tarif__price-1 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-1", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-1 active" })
        .from(".inner-tarif__price-1 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemTwo.from(".inner-tarif__img-2", { duration: 1.2, ease: "power4.out", opacity: 0, x: 150 }, "-=0.2")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-10", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-11", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-12", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-13", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-2 .inner-tarif__text-item-14", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")

    tarifTwo.from(".inner-tarif__price-2 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-2", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-2 active" })
        .from(".inner-tarif__price-2 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

    ItemThree.from(".inner-tarif__img-3", { duration: 1.2, ease: "power4.out", opacity: 0, x: 150 }, "-=0.2")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-1", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-2", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-3", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-4", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-5", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-6", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-7", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-8", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-9", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-10", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-11", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-12", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-13", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")
        .from(".inner-tarif__item-3 .inner-tarif__text-item-14", { duration: 0.8, ease: "power4.out", opacity: 0, y: 50 }, "-=0.6")


    tarifThree.from(".inner-tarif__price-3 span", { duration: 0.8, ease: "power4.out", opacity: 1, fontSize: 48, y: 32 }, "-=0.6")
        .to(".inner-tarif__price-3", { duration: 0.8, ease: "power4.out", className: "+=inner-tarif__price inner-tarif__price-3 active" })
        .from(".inner-tarif__price-3 .price", { duration: 0.8, ease: "power4.out", opacity: 0 })

}



let qustions = gsap.timeline({
    scrollTrigger: {
        trigger: ".qustions",   // pin the trigger element while active
        start: "top 60% ",
        end: "center 40%",
        toggleActions: "play resume resume reverse",

    }
});

qustions.from(".qustions__title", { duration: 1.6, ease: "power4.out", opacity: 0, y: 250 })