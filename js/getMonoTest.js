function getMonoTest(el) {
  $('#monoExperimentalModal').modal('show');
  var a = $(el).attr('data-a');
  var b = $(el).attr('data-b');
  var c = $(el).attr('data-c');
  console.log(a,b,c);
  $('#color-a').css('background-color', a);
  $('#color-b').css('background-color', b);
  $('#color-c').css('background-color', c);

  $('.mono-test-primary').css('fill', a);
  $('.mono-test-primary-text').css('fill', b);
  $('.mono-test-accent').css('fill', c);
}
