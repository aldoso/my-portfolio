$('#pills-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})


$("#nav-resume-tab").click(function () {
    $('#titlecover h6').text("My Resume")
})

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
