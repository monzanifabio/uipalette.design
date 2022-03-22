function getGradients() {
  sessionStorage.setItem('view', 'gradients');
  $("html, body").animate({ scrollTop: 0 }, "fast");
  $.getJSON("gradients.json",
  function (data) {
    var icon = '';
    var palette = 0;
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      palette++;
      icon += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      icon += '<div class="card">';
      icon += '<div class="card-body p-2">';
      icon += '<div id="palette'+ palette +'" class="gradient-palette">';
      icon += '<div class="gp1 block" style="background: linear-gradient(to right, ' + value.a + ', ' + value.b + ');"></div>';
      icon += '<div class="gp2 block text-uppercase copy colorhover" data-clipboard-text="' + value.a + '" style="color:' + value.a + '">' + value.a + '</div>';
      icon += '<div class="gp3 block text-uppercase copy colorhover" data-clipboard-text="' + value.b + '" style="color:' + value.b + '">' + value.b + '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '<div class="d-flex justify-content-end">';
      icon += '<button name="get-css" class="btn btn-light" onclick="getGradientCssCode(this);" data-a="' + value.a + '" data-b="' + value.b + '"><img src="img/css.svg" height="18" alt="get css icon"></button>';
      icon += '<button name="save-palette" class="btn btn-light" onclick="savePalette(palette'+ palette +')"><img src="img/download.svg" height="18" alt="download gradient icon"></button>';
      icon += '</div>';
      icon += '</div>';
    });

    $('#paletteList').html(icon);
  });
};
