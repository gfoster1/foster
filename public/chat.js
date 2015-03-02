window.onload = function() {
 
    var messages = [];
    var content = document.getElementById("content");
 
    var socket = io.connect('http://localhost:3700');
    socket.on('message', function (data) {
        if(data.message) {
            messages.push(data.message);
            var html = '';
            for(var i=0; i<messages.length; i++) {
                html += messages[i] + '<br />';
            }
            content.innerHTML = html;
        } else {
            console.log("There is a problem:", data);
        }
    });
 
    var field = document.getElementsByClassName('field')[0];
    var sendButton = document.getElementsByClassName('send')[0];
    sendButton.onclick = function() {
        var text = field.value;
        socket.emit('send', { message: text });
    };
 
}
