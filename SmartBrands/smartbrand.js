function blink_text() {
    $('.blink').fadeOut(1000);
    $('.blink').fadeIn(1000);
}
setInterval(blink_text, 1000);
