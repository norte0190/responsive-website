
// 스크롤시 header에 그림자 효과
function scrollHeader() 
{
    const header = document.getElementById('header')

    if (this.scrollY >= 50) 
        header
            .classList
            .add('scroll-header');
    
    else 
        header
            .classList
            .remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);
 
// 모달
const modalViews = document.querySelectorAll('.services__modal'),
      modalBtns = document.querySelectorAll('.services__button'),
      modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) 
{
    modalViews[modalClick]
        .classList
        .add('active-modal')
}

modalBtns.forEach((mb, i) => 
{

    mb.addEventListener('click', () => 
    {
        modal(i)
    })
})

modalClose.forEach((mc) => 
{
    mc.addEventListener('click', () => 
    { 
        modalViews.forEach((mv) => 
        {
            mv
                .classList
                .remove('active-modal')
        })
    })
})




// MIXITUP 필터
let mixerPortFolio = mixitup('.projects__container', {
    selectors: {
        target: '.projects__card'
    },
    animation: {
        duration: 300
    }
});
const linkprojects = document.querySelectorAll('.projects__item')

// 활성화된 필터 색표현
function activeprojects() {
    linkprojects.forEach(l => l.classList.remove('active-projects'))
    this
        .classList
        .add('active-projects')
}
linkprojects.forEach(l => l.addEventListener('click', activeprojects))

// 스와이퍼
let swiperReview = new Swiper(".review__container", {
    spaceBetween: 24,
    loop: true,
    grabCursor: true,

    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        576: {
            slidesPerView: 2
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 48
        }
    }
});

//보고있는 섹션 활성화 
const sections = document.querySelectorAll('section[id]')
 
function scrollActive() 
{
    const scrollY = window.pageYOffset

        sections
        .forEach(current => 
        {
            const sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) 
            {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList
                        .add('active-link')
                        
            } 
            
            else 
            {
                document
                    .querySelector('.nav__menu a[href*=' + sectionId + ']')
                    .classList
                        .remove('active-link')
            }
        })
}
window.addEventListener('scroll', scrollActive)


// 테마 변환
const themeButton = document.getElementById('theme-button')
const activeLightTheme = 'light-theme'
const activeLightThemeIcon = 'bx-sun'
themeButton.addEventListener('click', () => 
{
    document
        .body
        .classList
        .toggle(activeLightTheme)

    themeButton
        .classList
        .toggle(activeLightThemeIcon)
})



// scrollreveal
const sr = ScrollReveal(
{
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400, 
})

sr.reveal(`.home__data`)
sr.reveal(`.home__handle`, {delay:700})
sr.reveal(`.home__social, .home__scroll`, {delay:900, origin:'bottom'})

