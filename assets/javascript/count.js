

$(document).ready(function () {

    $("div").click(function() {
        $(this).remove();
        event.stopPropagation();
    })

});