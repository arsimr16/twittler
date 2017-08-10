$(document).ready(function(){

  var index = streams.home.length - 1;
  while(index >= 0){
    var tweet = streams.home[index];
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

    index -= 1;
  }

  $('.refresh').on('click', function() {
    $('.show').removeClass('show');
    $('.tweet').not('.show').show();
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

  $('#shawndrost1').on('click', function(){
    $('.show').removeClass('show');
    $('.tweet').not('.show').show();
    $('.tweet').find('#shawndrost').closest('.tweet').addClass('show');
    $('.tweet').not('.show').hide();
  });

  $('#sharksforcheap1').on('click', function(){
    $('.show').removeClass('show');
    $('.tweet').not('.show').show();
    $('.tweet').find('#sharksforcheap').closest('.tweet').addClass('show');
    $('.tweet').not('.show').hide();
  });

  $('#mracus1').on('click', function(){
    $('.show').removeClass('show');
    $('.tweet').not('.show').show();
    $('.tweet').find('#mracus').closest('.tweet').addClass('show');
    $('.tweet').not('.show').hide();
  });

  $('#douglascalhoun1').on('click', function(){
    $('.show').removeClass('show');
    $('.tweet').not('.show').show();
    $('.tweet').find('#douglascalhoun').closest('.tweet').addClass('show');
    $('.tweet').not('.show').hide();
  });

});