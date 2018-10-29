function dictation() {
  (function(win, doc) {

    navigator.getUserMedia({
      audio: true
    }, _handleSuccess, _handleError);
    
    function _handleSuccess(evt) {
      btn.addEventListener("click", () => {
        _handleClick(evt);
      }, false);
    }

    function _handleError() {
      alert("Error!");
    }

    "use strict";

    var recognition = new webkitSpeechRecognition(),
        msg         = doc.getElementById("msg");

    recognition.lang = "ja";

    recognition.addEventListener("start", function() {

    });

    recognition.addEventListener("result", function(evt) {
      var txt = evt.results[0][0].transcript;

      if (txt) {
        msg.innerText += evt.results[0][0].transcript;
      }
    }, false);

    recognition.start();

  })(this, document);
}