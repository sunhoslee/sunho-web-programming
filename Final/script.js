$("document").ready(function() {

    console.log('Im working!');

    $(".poem-title").mouseenter(changeColor);
    $(".poem-title").mouseleave(changeBack);


    $("#serif").click(makeSerif);

    $("#sans-serif").click(makeSans);

    $("#monospace").click(makeMono);

});

function changeColor() {
    $("h1").css("color","red");

}


function changeBack() {
    $("h1").css("color","white");

}

function makeSerif() {
    $("p").css("font-family", "serif");

}

function makeSans() {
    $("p").css("font-family", "sans-serif");
}

function makeMono() {
    $("p").css("font-family", "monospace");
}