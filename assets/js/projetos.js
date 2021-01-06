var projetos = projetos || {};

var element = $(".chosen-project");

var cursorPosition = {};

projetos.addClickHandler = function () {
    $(element).hide();
    $(".card-projeto").each( function () {
        $(this).click( projetos.show );
    });
    $(element).click( projetos.hide );
}

projetos.show = function () {
    var heading = $(this).find("span.card-heading").html();
    var img = $(this).find("img").attr("src");
    var description = $(this).find(".project-description span").html();
    var html = '<span>' + heading + '</span><img src="' + img + '" /><div class="project-description"><span>' + description + '</span></div>'
    $(element).html(html);
    $(element).fadeIn(600);
}

projetos.hide = function () { $(element).fadeOut( 600 ); }

projetos.cursorPosition = function (e) {
	cursorPosition.x = (window.Event) ? e.pageX : event.clientX + (document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft);
	cursorPosition.y = (window.Event) ? e.pageY : event.clientY + (document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop);
    if ( cursorPosition.y > window.innerHeight  + window.innerHeight / 4 && window.innerWidth > 1199 || $(".icofont-close").is(":visible") ) { $("#header").css({"left": "0"}); $("#footer").css({"left": "0"});}
    else { $("#header").css({"left": "-300px"}); $("#footer").css({"left": "-300px"}); }
}