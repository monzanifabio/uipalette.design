//Save and download palette
function savePalette(palette){
  var savePalette = palette.id
  domtoimage.toBlob(document.getElementById(savePalette))
    .then(function (blob) {
        window.saveAs(blob, 'palette.png');
    });
};
