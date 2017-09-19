window.onload = function () {
    var target = $(".trig").offset().top;
    var interval = setInterval(function () {
        if ($(window).scrollTop() >= target) {
            console.log("it works!");
            $("#skills-list li").each(function () {
                $(this).next().show(1000);
            });
            $("#skills-list li").last().css({ clear: both })
            clearInterval(interval);
        }
    }, 250);
}