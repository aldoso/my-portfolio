$('#pills-tab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})


$("#nav-resume-tab").click(function () {
    $('#titlecover h5').text("My Resume")
})

$("#nav-portfolio-tab").click(function () {
    $('#titlecover h5').text("My Latest Work")
})

$("#resume-button").click(function () {
    $('#titlecover h5').text("My Resume")
    $('#nav-resume').addClass("show").addClass("active")
    $('#nav-portfolio').removeClass("active").removeClass("show")
})

$("#portfolio-button").click(function () {
    $('#titlecover h5').text("My Latest Work")
    $('#nav-resume').removeClass("show").removeClass("active")
    $('#nav-portfolio').addClass("active").addClass("show")
})
