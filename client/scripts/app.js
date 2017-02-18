// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  username: window.location.search.split('=')[1],
  results: []

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
    url: app.server + '?limit=100&order=-createdAt',
    type: 'GET',
    //contentType: 'application/json',
    success: function (data) {
      var results = data.results;
      console.log(results);
      for (var i = 0; i < results.length; i++) {
        $('#chats').append('<div>' + results[i].username + ': ' + results[i].text 
          + '|| Room: ' + results[i].roomname + '</div>');
      }

    },
    error: function (data) {
      // See: https://developer.mozilla.org/en-US/docs/Web/API/console.error
      console.error('chatterbox: Failed to send message', data);
    }
  });
};

app.clearMessages = function() {
  $('#message').empty();
};

// app.renderMessage = function(results) {
//   for (var i = app.results.length; i > 0; i--) {
//     $('#chats').append('<div>' + app.results[i].username + ': ' + app.results[i].text +
//       '/n' + 'room: ' + app.results[i].roomname + '</div>');
//   }
// };

app.renderRoom = function(room) {
  $('#roomSelect').append('<div>room</div>');
};

app.handleUsernameClick = function() {
};

app.handleSubmit = function() {
  var message = {
    username: app.username,
    text: $('#message').val(),
    roomname: 'DEATHSTAR'
  };
  app.send(message);
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

app.fetch();


