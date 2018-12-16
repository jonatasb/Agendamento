var $doc = $('html, body');
$('a').click(function() {
    $doc.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 600);
    return false;
});