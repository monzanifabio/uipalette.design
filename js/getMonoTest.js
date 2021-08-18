function getMonoTest(el) {
  $('#monoExperimentalModal').modal('show');
  var a = $(el).attr('data-a');
  var b = $(el).attr('data-b');
  var c = $(el).attr('data-c');
  console.log(a,b,c);
  $('.mono-test-primary').css('fill', a);
  $('.mono-test-primary-text').css('fill', b);
  $('.mono-test-accent').css('fill', c);
}
