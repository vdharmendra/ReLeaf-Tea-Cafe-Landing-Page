var scene = document.getElementById('scene');
var parallax = new Parallax(scene);

TweenMax.from('.logo', 1, {
    opacity:0,
    x:-20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom('.menu-links ul li', 1, {
    opacity:0,
    x:-20,
    ease: Power3.easeInOut
}, 0.08)
TweenMax.from('.search', 1, {
    delay:.5,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut
})
TweenMax.from('.account', 1, {
    delay:.6,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut
})
TweenMax.from('.cart', 1, {
    delay:.7,
    opacity:0,
    x:-20,
    ease: Expo.easeInOut
})
TweenMax.from('.juice', 1, {
    delay:.9,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.leaves .layer:nth-child(1)', 2, {
    delay:.9,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.leaves .layer:nth-child(2)', 2, {
    delay:.91,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.leaves .layer:nth-child(3)', 2, {
    delay:.92,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.leaves .layer:nth-child(4)', 2, {
    delay:.93,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.leaves .layer:nth-child(5)', 2, {
    delay:.94,
    opacity:0,
    y:-800,
    ease: Expo.easeInOut
})
TweenMax.from('.title', 1, {
    delay:.7,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})
TweenMax.from('.tagline', 1, {
    delay:.75,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})
TweenMax.from('.pages', 1, {
    delay:.8,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})
TweenMax.from('.more', 1, {
    delay:.85,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})
TweenMax.from('.desc', 1, {
    delay:.9,
    opacity:0,
    y:20,
    ease: Expo.easeInOut
})

TweenMax.from('.arrows', 1, {
    delay:1,
    opacity:0,
    ease: Expo.easeInOut
})