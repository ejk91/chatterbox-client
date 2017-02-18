// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm8.hackreactor.com/'
};

app.init = function() {

};

app.send = function(message) {
  $.ajax({
    url: app.server,
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
  $('#chats').append('<div>' + message + '</div>');
  $('#main').append('<div class="username">' + message.username + '</div>');
};

app.renderRoom = function(room) {
  $('#roomSelect').append('<div>room</div>');
};

app.handleUsernameClick = function() {
};

app.handleSubmit = function() {
};

$(document).ready(function() {
  $('#main').on('click', '.username', function() {
    app.handleUsernameClick();
  });
  $('#send').on('submit', '.submit', function() {
    app.handleSubmit();
  });
}); 