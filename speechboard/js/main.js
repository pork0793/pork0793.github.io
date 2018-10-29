function dictation() {
	(function(win, doc) {

		"use strict";

		navigator.getUserMedia({
			audio: true
		}, _handleSuccess, _handleError);

		function _handleSuccess(evt) {
			btn.addEventListener("click", () => {
		  		_handleClick(evt);
			}, false);

					document.getElementById('dic_start').play();
		document.getElementById('speak_switch').style.display = "none";
		document.getElementById('msg').textContent = "";

		var recognition = new webkitSpeechRecognition(),
		msg         = doc.getElementById("msg");

		recognition.lang = "ja";

		recognition.addEventListener("start", function() {

		});

		recognition.addEventListener("result", function(evt) {
			var txt = evt.results[0][0].transcript;

			if (txt) {
				msg.innerText += evt.results[0][0].transcript;
				msg.innerHTML += "<br />";
				document.getElementById('dic_stop').play();
				document.getElementById('speak_switch').style.display = "inline";
			}
		}, false);

		recognition.addEventListener("end", function() {
			document.getElementById('dic_stop').play();
			document.getElementById('speak_switch').style.display = "inline";
		});

		recognition.start();
		}

		function _handleError() {
			alert("マイクの使用を許可してください。");
		}

	})(this, document);
}