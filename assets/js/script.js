$(function() {
  var i = 0;
  $('button').click(function() {
    // let i = $('input').val();
    i = i + 1;
    $('input').attr('value', i );
  });
});
