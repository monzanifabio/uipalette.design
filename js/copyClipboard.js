//Clipboard JS
var clipboard = new ClipboardJS('.copy');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    //Play copy sound
    var sound = document.getElementById("picker");
    sound.play();
    //Show toast notification
    toast.show()
    $('#toast-wrapper').css("z-index", 9999);
    $('#toastColor').css("display", 'block');
    $('#toastColor').css("backgroundColor", e.text);
    $('#toastText').text(e.text + " copied to clipboard");

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});

var clipboard = new ClipboardJS('.copyCss');

clipboard.on('success', function(e) {
    console.info('Action:', e.action);
    console.info('Text:', e.text);
    console.info('Trigger:', e.trigger);
    //Play copy sound
    var sound = document.getElementById("picker");
    sound.play();
    //Show toast notification
    toast.show()
    $('#toast-wrapper').css("z-index", 9999);
    $('#toastColor').css("display", 'none');
    $('#toastText').text("CSS code copied to clipboard");
    $('#gradientCssModal').modal('hide');

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
