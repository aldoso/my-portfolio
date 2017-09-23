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

$("#opa").click(function () {
    //    $('#titlecover h5').text("My Resume")
    $('#titlecover h5').text("My Resume")
    $('#nav-portfolio-tab').removeClass("active")
    $('#nav-resume-tab').addClass("active")

})
