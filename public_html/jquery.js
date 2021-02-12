$(function () {
    init();
}) ;

function init() {
    $("#kezd").click(betolt);
    $("#kezd").on("click",function () {betolt();});
};
function betolt() {
    $("#jatekter").empty();
for (var i = 0, max = 7; i < max; i++) {
        $("#jatekter").append("<div>");
        $("#jatekter div").eq(i).append("<img>");
        $("#jatekter div").eq(i).append("<p>");
        $("#jatekter div p").eq(i).text("Nevek");
        $("#jatekter div img").eq(i).attr("src","kartya/makk-hetes.png");
    }
    //$("#jatekter").html(txt);
    $("#jatekter div p").css({"color":"red","font-size":"20px"});
    $("#jatekter div").addClass("kartya");
    $("#jatekter div").mouseleave(function () {
        $(this).css("background","white");
    });
    $("#jatekter div").mouseenter(function () {
        $(this).css("background","pink");
    });
    $("#jatekter div").click(function () {
        $(this).hide(1000);
        $(this).show(1000);
    });
    
    
}