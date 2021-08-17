function getAdvancePalette() {
  sessionStorage.setItem('view', 'advance');
  $("html, body").animate({ scrollTop: 0 }, "fast");
$.getJSON("advance.json",
function (data) {
  var icon = '';
  var palette = 0;
  // ITERATING THROUGH OBJECTS
  $.each(data, function (key, value) {
    palette++;
    icon += '<div class="col-xl-3 col-lg-4 col-md-6 col-12">';
    icon += '<div class="card">';
    icon += '<div class="card-body p-2">';
    icon += '<div id="palette'+ palette +'" class="advance-palette">';
    icon += '<div class="ap1 block text-uppercase copy colorhover" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top" data-clipboard-text="' + value.primary + '" style="background-color:' + value.primary + '; color:' + value.primary + '">' + value.primary + '</div>';
    icon += '<div class="ap2 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary + '" style="background-color:' + value.secondary + '; color:' + value.secondary + '">' + value.secondary + '</div>';
    icon += '<div class="ap3 block text-uppercase copy colorhover" data-clipboard-text="' + value.accent + '" style="background-color:' + value.accent + '; color:' + value.accent + '">' + value.accent + '</div>';
    icon += '<div class="ap4 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary_light + '" style="background-color:' + value.primary_light +'; color:' + value.primary_light + '">' + value.primary_light +'</div>';
    icon += '<div class="ap5 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary_dark + '" style="background-color:' + value.primary_dark + '; color:' + value.primary_dark + '">' + value.primary_dark + '</div>';
    icon += '<div class="ap6 block text-uppercase copy colorhover" data-clipboard-text="' + value.primary_text + '" style="background-color:' + value.primary_text + '; color:' + value.primary_text + '">' + value.primary_text + '</div>';
    icon += '<div class="ap7 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary_light + '" style="background-color:' + value.secondary_light + '; color:' + value.secondary_light + '">' + value.secondary_light + '</div>';
    icon += '<div class="ap8 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary_dark + '" style="background-color:' + value.secondary_dark + '; color:' + value.secondary_dark + '">' + value.secondary_dark + '</div>';
    icon += '<div class="ap9 block text-uppercase copy colorhover" data-clipboard-text="' + value.secondary_text + '" style="background-color:' + value.secondary_text + '; color:' + value.secondary_text + '">' + value.secondary_text + '</div>';
    icon += '</div>';
    icon += '</div>';
    icon += '</div>';
    icon += '<div class="d-flex justify-content-end">';
    icon += '<a href="' + value.design_link + '" class="btn" target="_blank"><img src="img/link.svg" height="18"></a>';
    icon += '<button class="btn" onclick="savePalette(palette'+ palette +')"><img src="img/download.svg" height="18"></button>';
    icon += '</div>';
    icon += '</div>';

  });

  $('#paletteList').html(icon);
});
};
