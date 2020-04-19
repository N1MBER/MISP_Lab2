$(document).ready(function () {
    i = false
    $("#press").click(function () {
        i = !i
        if (i == true)
            $("#press").css('background-color',"white")
        else
            $("#press").css('background-color',"black")
    });
    j=false
    $("#change").click(function () {
        j = !j
        if (i == true) {
            $("div").css('background-color', "white")
            $("div").css('color', "black")
        }
        else {
            $("div").css('background-color', "black")
            $("div").css('color', "white")
        }
    });
})

