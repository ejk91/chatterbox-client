// YOUR CODE HERE:
var app = {
  server: 'http://parse.sfm8.hackreactor.com/chatterbox/classes/messages',
  username: window.location.search.slice(10),
  incomingData: []
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
    url: app.server + '?limit=200&order=-createdAt',
    type: 'GET',
    //data: JSON.stringify(message),
    //contentType: 'application/json',
    success: function (data) {
      console.log('Connected to Server!');
      app.clearMessages();
      var message = data.results;
      for (var i = 0; i < message.length; i++) {
        var test = [ '&', '<', '>', '"', "'"];
        var text = message[i].text;
        //var hack = message[i].text;
        if (!!text && test.indexOf(text[0]) !== -1) {
          var hack = text.slice(1);
          text = 'Attempted Hack:' + hack;
        }

        $('#chats').append('<div>' + message[i].username + ': ' + text + '<span class=' +
          message[i].roomname + '></span></div>');
      }
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
  for (var i = 0; i < message.length; i++) {
    $('#chats').append('<div>' + message[i].username + ': ' + message[i].text + '</div>');
  }
};

app.renderRoom = function(room) {
  $('#roomSelect').append('<div>room</div>');
};

app.handleUsernameClick = function() {
};

app.handleSubmit = function() {
  var message = {
    username: app.username,
    text: $('#message').val(),
    roomname: 'Death Star'
  };
  console.log(typeof (message.text));
  app.send(message);
};
app.escape = function(message) {
  var escape = [ '&', '<', '>', '"', "'"];
  var text = message.text;
  var hack = message.text;

  if (escape.indexOf(text[0]) !== -1) {
    text = "Attempted Hack:" + hack;
  }
};

$(document).ready(function() {
  $('#main').on('click', '.username', function() {
    app.handleUsernameClick();
  });
  $('#send').on('click', '.submit', function() {
    app.handleSubmit();
    $('#message').val('');
  });
  $('.button').on('click', function() {
    app.renderRoom();
  });
});

app.fetch();
// setInterval(function () {
//   app.fetch();
// }, 1000);
