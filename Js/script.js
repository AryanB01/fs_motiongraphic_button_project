// check for the jquery
window.console&&console.log('Console Check');


$(document).ready(function(){
   $(".switch").click(function(){
    $(this).toggleClass("active");
       //this is to prevent other cick from opening if one switch is on
    $(".switch2").removeClass("active2").find("h2").remove();
    if ($(this).hasClass("active")) {
        $(this).append("<h2>OFF</h2>");
        $("body").css({
            "background-color": "#a04343dc"
        });
    } else {
        $(this).find("h2").remove();
        $("body").css({
            "background-color":"rgba(128, 128, 128, 0.084)"
        });
    }
   })
   $(".switch2").click(function(){
    $(this).toggleClass("active2");
    //this is to prevent other cick from opening if one switch is on
    $(".switch").removeClass("active").find("h2").remove();
    if ($(this).hasClass("active2")) {
        $(this).append("<h2>ON</h2>");
        $("body").css({
            "background-color": "rgba(63, 102, 63, 0.768)"
        });
    } else {
        $(this).find("h2").remove();
        $("body").css({
            "background-color":"rgba(128, 128, 128, 0.084)"
        });
    }
   })
});