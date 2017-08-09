$(document).ready(function(){
  //var $body = $('body');
  //$body.html('');

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div></div>');
    $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + moment().calendar());
    $tweet.addClass("tweet");
    $tweet.appendTo($('.feed'));
    index -= 1;
  }

  $('.refresh').on('click', function() {
    for(var i = 0; i < streams.home.length - 1; i++) {
      var tweet = streams.home[i];
      var $tweet = $('<div></div>');
      $tweet.addClass("tweet");
      $tweet.text('@' + tweet.user + ': ' + tweet.message + ' ' + moment().calendar());
      $tweet.appendTo($('.feed'));
    }
    console.log($(this).text());
  });

});