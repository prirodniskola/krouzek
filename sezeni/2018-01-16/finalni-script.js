(function () {
    var leftPosition = 300;
    $(document).ready(function () {
        $("#box").offset({ top: 200, left: leftPosition });
        $("#left").click(() => OnLeftButtonClicked());
        $("#right").click(() => OnRightButtonClicked());
    });
    function OnLeftButtonClicked() {
        leftPosition = leftPosition - 10;
        if (leftPosition < 0) leftPosition = 0;
        $("#box").offset({ top: 200, left: leftPosition });
    }
    function OnRightButtonClicked() {
        leftPosition = leftPosition + 10;
        var boxWidth = $("#box").outerWidth();
        var windowWidth = $(window).outerWidth();
        if (leftPosition > windowWidth - boxWidth) {
            leftPosition = windowWidth - boxWidth;
        }
        $("#box").offset({ top: 200, left: leftPosition });
    }
})();
