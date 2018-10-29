window.onload = function check() {

	"use strict";

	navigator.getUserMedia({
		audio: true
	}, _handleSuccess, _handleError);

	function _handleSuccess() {

	}

	function _handleError() {
		alert("マイクの使用を許可してください。");
	}

}


document.getElementById("speak").onclick = function dic() {
	(function(win, doc) {
		var recognition = new webkitSpeechRecognition(),
		msg         = doc.getElementById("msg");

		recognition.lang = "ja";

		recognition.addEventListener("start", function() {
			document.getElementById('dic').play();
			document.getElementById('msg').textContent = "";
		});

		recognition.addEventListener("result", function(evt) {
			var txt = evt.results[0][0].transcript;

			if (txt) {
				msg.innerText += evt.results[0][0].transcript;
				msg.innerHTML += "<br />";
				document.getElementById('dic').play();
			}
		}, false);

		recognition.start();
	})(this, document);
}