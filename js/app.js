$(document).ready(function() {

	// initialize the awesomeness

	// tab completion codemirror+emmet
	CodeMirror.fromTextArea(document.getElementById("the-editor"), {
		theme: "ambiance",
		mode : "htmlmixed",
		lineNumbers : true,
		profile: 'xhtml' /* define Emmet output profile */
	});

});