$("document").ready(function() {

    console.log('Im working!');

    $(".poem-title").mouseenter(changeColor);
    $(".poem-title").mouseleave(changeBack);


});

function changeColor() {
    $("h1").css("color","lightgrey");
}


function changeBack() {
    $("h1").css("color","white");
}
