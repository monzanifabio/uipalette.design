function getMonoPalette() {
  sessionStorage.setItem('view', 'mono');
  $("html, body").animate({ scrollTop: 0 }, "fast");
  $.getJSON("mono.json",
  function (data) {
    var icon = '';
    var palette = 0;
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      palette++;
      icon += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      icon += '<div class="card">';
      icon += '<div class="card-body p-2">';
      icon += '<div id="palette'+ palette +'" class="mono-palette">';
      icon += '<div class="mp1 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary + '" style="background-color:' + value.primary + '; color:' + value.primary + '">' + value.primary + '</div>';
      icon += '<div class="mp2 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary_text + '" style="background-color:' + value.primary_text + '; color:' + value.primary_text + '">' + value.primary_text + '</div>';
      icon += '<div class="mp3 block text-uppercase copy colorhover" data-clipboard-text="' + value.accent + '" style="background-color:' + value.accent + '; color:' + value.accent + '">' + value.accent + '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '<div class="d-flex justify-content-end">';
      icon += '<button class="btn btn-light" onclick="getMonoTest(this)" data-a="' + value.primary + '" data-b="' + value.primary_text + '" data-c="' + value.accent + '"><img src="img/test.svg" height="18"></button>'
      icon += '<a href="' + value.design_link + '" class="btn btn-light" target="_blank"><img src="img/link.svg" height="18"></a>';
      icon += '<button class="btn btn-light" onclick="savePalette(palette'+ palette +')"><img src="img/download.svg" height="18"></button>';
      icon += '</div>';
      icon += '</div>';
    });

    $('#paletteList').html(icon);
  });
};
