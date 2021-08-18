function storedView() {
  $('#modalHere').load('monoModal.html')
  var storedView = sessionStorage.getItem('view');
  console.log(storedView);
  if (storedView == 'mono') {
    $(".tab").removeClass("filter-active");
    $('#monoBtn').addClass("filter-active");
    getMonoPalette();
  } else if (storedView == 'duo') {
    $(".tab").removeClass("filter-active");
    $('#duoBtn').addClass("filter-active");
    getDuoPalette();
  } else if (storedView == 'advance') {
    $(".tab").removeClass("filter-active");
    $('#advBtn').addClass("filter-active");
    getAdvancePalette();
  } else if (storedView == 'gradients') {
    $(".tab").removeClass("filter-active");
    $('#gradBtn').addClass("filter-active");
    getGradients();
  }
}
