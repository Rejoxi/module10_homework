const wsUri = "wss://echo-ws-service.herokuapp.com";

const output = document.getElementById("output");
const btnSend = document.querySelector('.j-btn-send');
const btnOpen = document.querySelector('.j-btn-open');

let websocket;

function writeToScreen(message) {
  let pre = document.createElement("p");
  pre.style.wordWrap = "break-word";
  pre.innerHTML = message;
  output.appendChild(pre);
}

btnOpen.addEventListener('click', () => {
    websocket = new WebSocket(wsUri);
    websocket.onopen = function(evt) {
      writeToScreen("CONNECTED");
    };
    websocket.onclose = function(evt) {
      writeToScreen("DISCONNECTED");
    };
    websocket.onmessage = function(evt) {
      writeToScreen(
        '<span style="color: blue;">RESPONSE: ' + evt.data+'</span>'
      );
    };
    websocket.onerror = function(evt) {
      writeToScreen(
        '<span style="color: red;">ERROR:</span> ' + evt.data
      );
    };
  });


btnSend.addEventListener('click', () => {
  let message = document.getElementById('test').value;
  writeToScreen("SENT: " + message);
  websocket.send(message);
});
