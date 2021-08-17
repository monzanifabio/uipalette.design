function getGradientCssCode(el) {
  var a = $(el).attr('data-a');
  var b = $(el).attr('data-b');
  console.log(a, b);
  var code = '';

  code += 'background: '+ a +';<br>';
  code += 'background:linear-gradient(90deg, '+ a +' 0%, '+ b +' 100%);<br>';
  code += 'background:-webkit-linear-gradient(90deg, '+ a +' 0%, '+ b +' 100%);<br>';
  code += 'background:-moz-linear-gradient(90deg, '+ a +' 0%, '+ b +' 100%);<br>'
  code += 'background:-o-linear-gradient(90deg, '+ a +' 0%, '+ b +' 100%);<br>'
  code += 'background:-ms-linear-gradient(90deg, '+ a +' 0%, '+ b +' 100%);<br>'
  code += 'filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='+ b +', endColorstr='+ a +', GradientType=0 );'

  $('#gradientCssCode').html(code)
  $('#gradientCssModal').modal('show');
}
