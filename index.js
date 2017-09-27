$('#pills-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})


//$("#nav-resume-tab").click(function () {
//    $('#titlecover h6').text("My Resume")
//})

$("#nav-portfolio-tab").click(function () {
    $('#titlecover h6').text("My Latest Work")
})


$("#portfolio-button").click(function () {
    $('#titlecover h6').text("My Latest Work")
    $('#nav-resume').removeClass("show").removeClass("active")
    $('#nav-portfolio').addClass("active").addClass("show")
})

$("#resume-button").click(function () {
    $('#titlecover h6').text("My Resume")
    $('#nav-portfolio, #nav-portfolio-tab').removeClass("active").removeClass("show")
    $('#nav-resume, #nav-resume-tab').addClass("show").addClass("active")
})


$("#nav-portfolio-tab").click(function () {
    $('#titlecover h6').text("My Latest Work")
    $('#nav-resume').removeClass("show").removeClass("active")
    $('#nav-portfolio').addClass("active").addClass("show")
    window.open("#gohere", "_self")
})


$("#nav-resume-tab").click(function () {
    $('#titlecover h6').text("My Resume")
    $('#nav-portfolio, #nav-portfolio-tab').removeClass("active").removeClass("show")
    $('#nav-resume, #nav-resume-tab').addClass("show").addClass("active")
    window.open("#gohere", "_self")
})


// Scroll Reveal Animation
//window.sr = ScrollReveal({
//    reset: true
//});

sr.reveal('.smallones', {
    duration: 1000,
    origin: 'top',
    delay: 400,
    opacity: 0,
    scale: 0.25,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.bigones', {
    duration: 1000,
    origin: 'bottom',
    delay: 800,
    opacity: 0,
    scale: 0.25,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)'
});

sr.reveal('.name', {
    duration: 1000,
    //    origin: 'bottom',
    //    delay: 500,
    opacity: 0,
    scale: 0.5,
    easing: 'ease-in-out'
});

sr.reveal('#bottom_navbar', {
    duration: 1000,
    origin: 'bottom',
    useDelay: 'always',
    delay: 2000,
    opacity: 0,
    scale: 0.25,
    easing: 'ease-in-out',
    reset: true,
    container: window.document.querySelector('.coverup')
});
