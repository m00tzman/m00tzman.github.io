window.onload = function () {
    var target = $(".trig").offset().top;
    var interval = setInterval(function () {
        if ($(window).scrollTop() >= target) {
            console.log("it works!");
            $("#skills-list li").each(function (i) {
                $(this).delay(100 * i).fadeIn(500);
            });
            clearInterval(interval);
        }
    }, 250);
}