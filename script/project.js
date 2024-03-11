$(document).ready(function () {
    $("#project_list").hover(
        function () {
            // Mouse enter event
            $("#me").css("display", "block");
        },
        function () {
            // Mouse leave event
            $("#me").css("display", "none");
        }
    );
});