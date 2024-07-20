function speedmeter() {
    var spdvalue = $("#Give").val();
    var initDegree = -120;

    var lastDegree = 120;
    var rotateDeg;
    if (spdvalue >= 0 && spdvalue <= 240) {
        rotateDeg = initDegree + (spdvalue / 2);

    }
    else if (spdvalue > 240 && spdvalue <= 480) {
        rotateDeg = (spdvalue / 2) - lastDegree;
    }
    else {
        alert("Wrong Value")
    }
    $("#sui").css({
        transition: "transform 3s",
        transform: "rotate(" + rotateDeg + "deg)"
    })
    $("#SUICIRCLE").css({
        transition: "transform 3s",
        transform: "rotate(" + rotateDeg + "deg)"
    })
}