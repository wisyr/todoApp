$(window).on("load", function () {
    setTimeout(function () {
        var n = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
        n ? $(".loadingAnimation").fadeOut() : $(".loadingAnimation").css({display: "none"}), $(".content").fadeIn(), $(".mainContainer").css({
            "-webkit-filter": "brightness(100%)",
            filter: "brightness(100%)"
        })
    }, 850)
}), function () {
    $(".manageTodosButton").on("click", function () {
        $(".manageTodosButton").toggleClass("revealCleanTodosButton")
    })
}();
