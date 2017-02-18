// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  username: window.location.search.slice(10)
};

app.init = function() {

};   

app.send = function(message) {
  // $.ajax({
  //   url: app.server,
  //   type: 'POST',
  //   data: JSON.stringify(message),
  //   contentType: 'application/json',
  //   success: function (data) {
  //     console.log('chatterbox: Message sent');
  //   },
  //   error: function (data) {
  //     // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
  //     console.error('chatterbox: Failed to send message', data);
  //   }
  // });
  $.ajax({
  // This is the url you should use to communicate with the parse API server.
    url: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    url: app.server,
    type: 'GET',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function (data) {
      console.log('chatterbox: Message sent');
    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#chats').empty();
};

app.renderMessage = function(message) {
  $('#chats').prepend('<div>' + app.username + ': ' + message + '</div>');
};

app.renderRoom = function(room) {
  $('#roomSelect').append('<div>room</div>');
};

app.handleUsernameClick = function() {
};

app.handleSubmit = function() {
  var message = $('#message').val();
  app.renderMessage(message);
};

$(document).ready(function() {
  $('#main').on('click', '.username', function() {
    app.handleUsernameClick();
  });
  $('#send').on('click', '.submit', function() {
    app.handleSubmit();
  });
  $('.button').on('click', function() {
    app.renderRoom();
  });
});

// setInterval(function () {
//   app.send();

// }, 1000);


