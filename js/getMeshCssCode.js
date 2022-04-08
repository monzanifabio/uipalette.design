function getMeshCssCode(el) {
  var rawStyle = $(el).attr('data-style');
  var style = rawStyle.split(';').join(';\n').split('radial-gradient').join('\n radial-gradient');

  var code = '';
  code += style;

  $('#gradientCssCode').html(code)
  $('#gradientCssModal').modal('show');
}
