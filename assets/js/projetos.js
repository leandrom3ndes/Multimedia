var projetos = projetos || {};

var cursorPosition = {};

var initialStylingCard = {
    "display": "flex",
    "flex-flow": "column",
    "background-color": "white",
    "border-radius": "10px",
    "width": "100%",
    "text-align": "center",
    "align-items": "center",
    "margin-bottom": "2.5%",
    "margin-right": "15px",
    "height": "50vh",
    "position": "static",
    "z-index": "auto",
    "transform": "none"
};

var expandedStylingCard = {
    "left": "50%",
    "transform": "translateX(-50%)",
    "position": "absolute", 
    "background-color": "#E1D9FF"
}

var animationSpeed = 800;

var initialStylingDescription = {
    "display": "none",
    "visibility": "hidden"
};

var expandedSytlingDescripition = {
    "display": "block",
    "visibility": "visible"
};

var initialStylingImg = { "width": "80%" }

var expandedStylingImg = { "width": "20%" }

var initialStylingHeading = { "height": "20%" }

var expandedStylingHeading = { "height": "auto" }

projetos.addClickHandler = function () {
    $(".card-projeto").each( function () {
        $(this).click( projetos.expand );
    });
}

projetos.expand = function () {
    var animationSettings = {
        "width": "85vw",
        "height": "100vh"
    }
    $(this).css({"z-index": "99999"});
    $(this).animate( animationSettings, animationSpeed );
    var y = projetos.getMiddlePosition(cursorPosition.y);
    expandedStylingCard.top = "" + y + "px";
    $(this).css(expandedStylingCard);
    $(this).unbind("click");
    $(this).click( projetos.reverseExpand );

    var description = $(this).find(".project-description");
    $(description).css(expandedSytlingDescripition);

    var img = $(this).find("img");
    $(img).css(expandedStylingImg);

    var heading = $(this).find("span.card-heading");
    $(heading).css(expandedStylingHeading);
}

projetos.reverseExpand = function () {
    $(this).animate( initialStylingCard, animationSpeed );
    $(this).css( initialStylingCard );
    $(this).unbind("click");
    $(this).click( projetos.expand );

    var description = $(this).find(".project-description");
    $(description).css(initialStylingDescription);

    var img = $(this).find("img");
    $(img).css(initialStylingImg);

    var heading = $(this).find("span.card-heading");
    $(heading).css(initialStylingHeading);
}

projetos.cursorPosition = function (e) {
	cursorPosition.x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	cursorPosition.y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    console.log(cursorPosition);
    if ( cursorPosition.y > window.innerHeight  + window.innerHeight / 4 && window.innerWidth > 1199 || $(".icofont-close").is(":visible") ) { $("#header").css({"left": "0"}); $("#footer").css({"left": "0"});}
    else { $("#header").css({"left": "-300px"}); $("#footer").css({"left": "-300px"}); }
}

projetos.getMiddlePosition = function (currentYPosition) {
    var y = window.innerHeight;
    console.log(y);
    return currentYPosition - y/4;
}