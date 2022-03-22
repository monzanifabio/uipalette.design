function getDuoPalette() {
  sessionStorage.setItem('view', 'duo');
  $("html, body").animate({ scrollTop: 0 }, "fast");
  $.getJSON("duotone.json",
  function (data) {
    var icon = '';
    var palette = 0;
    // ITERATING THROUGH OBJECTS
    $.each(data, function (key, value) {
      palette++;
      icon += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
      icon += '<div class="card">';
      icon += '<div class="card-body p-2">';
      icon += '<div id="palette'+ palette +'" class="duo-palette">';
      icon += '<div class="dp1 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary + '" style="background-color:' + value.primary + '; color:' + value.primary + '" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top">' + value.primary + '</div>';
      icon += '<div class="dp2 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary + '" style="background-color:' + value.secondary + '; color:' + value.secondary + '">' + value.secondary + '</div>';
      icon += '<div class="dp3 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary_text + '" style="background-color:' + value.primary_text + '; color:' + value.primary_text + '">' + value.primary_text + '</div>';
      icon += '<div class="dp4 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary_text + '" style="background-color:' + value.secondary_text +'; color:' + value.secondary_text + '">' + value.secondary_text +'</div>';
      icon += '<div class="dp5 block text-uppercase copy colorhover" data-clipboard-text="' + value.accent + '" style="background-color:' + value.accent + '; color:' + value.accent + '">' + value.accent + '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '</div>';
      icon += '<div class="d-flex justify-content-end">';
      icon += '<a href="' + value.design_link + '" class="btn btn-light" target="_blank"><img src="img/link.svg" height="18" alt="palette-link"></a>';
      icon += '<button name="save-palette" class="btn btn-light" onclick="savePalette(palette'+ palette +')"><img src="img/download.svg" height="18" alt="download palette"></button>';
      icon += '</div>';
      icon += '</div>';
    });

    $('#paletteList').html(icon);
  });
};
