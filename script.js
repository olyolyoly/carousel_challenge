//SLIDE OF 6 IMAGES AND SINGLE IMAGE
const carouselSlide = document.querySelector('.carousel-slide')
const carouselImages = document.querySelectorAll('.carousel-slide img')

// BUTTONS
const prevButton = document.querySelector('#prevButton')
const nextButton = document.querySelector('#nextButton')

// COUNTER
let counter = 1

//WIDTH OF AN IMAGE
const size = carouselImages[0].clientWidth

//APPENDS BY THE WIDTH OF 1 IMAGE
carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'

// BUTTON LISTENERS - TRANSLATE LEFT ALONG X - WIDTH OF ONE IMAGE * NEW COUNTER
nextButton.addEventListener('click',() => {
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter++
    // console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
// BUTTON LISTENERS - TRANSLATE RIGHT ALONG X
prevButton.addEventListener('click',() => {
    carouselSlide.style.transition = "transform 0.5s ease-in-out"
    counter--
    // console.log(counter)
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
})
// IF TRANSITIONED IMAGE WITH CLONE ID RETURN TO REAL IMAGE
carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - 2 //skip back 4 widths (misses firstClone)
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'//then transform
    } if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none"
        counter = carouselImages.length - counter
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)'
    }
})
