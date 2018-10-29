function dictation() {
	(function(win, doc) {

		"use strict";

		navigator.getUserMedia({
			audio: true
		}, _handleSuccess, _handleError);

		function _handleError() {
			alert("マイクの使用を許可してください。");
		}

		function _handleSuccess(evt) {

			var recognition = new webkitSpeechRecognition(),
			msg         = doc.getElementById("msg");

			recognition.lang = "ja";

			recognition.addEventListener("start", function() {
				document.getElementById('dic_start').play();
				document.getElementById('msg').textContent = "";
			});

			recognition.addEventListener("result", function(evt) {
				var txt = evt.results[0][0].transcript;

				if (txt) {
					msg.innerText += evt.results[0][0].transcript;
					msg.innerHTML += "<br />";
					document.getElementById('dic_stop').play();
				}
			}, false);

			recognition.addEventListener("end", function() {
				document.getElementById('dic_stop').play();
			});

			recognition.start();
		}

	})(this, document);
}