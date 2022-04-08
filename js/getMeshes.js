function getMeshes() {
  sessionStorage.setItem('view', 'meshes');
  $("html, body").animate({ scrollTop: 0 }, "fast");
  $.getJSON("./data/meshes.json",
  function (data) {
    var icon = '';
    var palette = 0;
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      palette++;
      icon += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      icon += '<div class="card">';
      icon += '<div class="card-body p-2">';
      icon += '<div id="palette'+ palette +'" class="mesh-gradient">';
      icon += '<div class="gp1 block" style="' + value.css + '"></div>';
      icon += '<div class="gp1 block text-uppercase opacityhover" style="color:black"><button class="btn" onclick="goFullscreen(this);" data-style="' + value.css + '"> <img src="img/fullscreen-light.svg" height="18" alt="fullscreen gradient"></button></div>';
      icon += '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '<div class="d-flex justify-content-end">';
      icon += '<button name="go-fullscreen" class="btn btn-light" onclick="goFullscreen(this);" data-style="' + value.css + '"><img src="img/fullscreen.svg" height="18" alt="fullscreen gradient"></button>'
      icon += '<button name="get-css" class="btn btn-light" onclick="getMeshCssCode(this);" data-style="' + value.css + '"><img src="img/css.svg" height="18" alt="get css icon"></button>';
      icon += '<button name="save-palette" class="btn btn-light" onclick="savePalette(palette'+ palette +')"><img src="img/download.svg" height="18" alt="download gradient icon"></button>';
      icon += '</div>';
      icon += '</div>';
    });

    $('#paletteList').html(icon);
  });
};

function goFullscreen(el) {
  $('#meshModal').modal('show');

  var css = $(el).attr('data-style');
  $('#meshModalBody').attr('style', css);
}
