$(document).ready(function(){

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
    var $tweet = $('<div class="tweet"></div>');
    var $user = $('<p class="user" id="' + tweet.user + '"></p>');
    var $time = $('<p class="time"></p>');
    var $text = $('<p class="text"></p>');

    $user.text('@' + tweet.user + ':');
    $time.text(moment().calendar());
    $text.text(tweet.message);

    $('.feed').append($tweet);
    $tweet.append($user);
    $tweet.append($time);
    $tweet.append($text);

    index -= 1;
  }

  $('.refresh').on('click', function() {
    for(var i = 0; i < streams.home.length - 1; i++) {
      var tweet = streams.home[i];
      var $tweet = $('<div class="tweet"></div>');
      var $user = $('<p class="user" id="' + tweet.user + '"></p>');
      var $time = $('<p class="time"></p>');
      var $text = $('<p class="text"></p>');

      $user.text('@' + tweet.user);
      $time.text(moment().calendar());
      $text.text(tweet.message);

      $('.feed').append($tweet);
      $tweet.append($user);
      $tweet.append($time);
      $tweet.append($text);
    }
    console.log($(this).text());
  });

});