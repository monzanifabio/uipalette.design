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
    $('#toastColor').css("backgroundColor", e.text);
    $('#toastText').text(e.text + " copied to clipboard");

    e.clearSelection();
});

clipboard.on('error', function(e) {
    console.error('Action:', e.action);
    console.error('Trigger:', e.trigger);
});
