$(document).ready(function () {
    /* When document is ready add functions to button */
    $('#buttonSend').on('click', sendMessage);
    $('#message').on('keypress',function(e) {
        if(e.which == 13) {
            sendMessage();
        }
    });
});


function sendMessage() {
	let messageInput = $('#message');
	let errorAlert = $('#error');
	let warningAlert = $('#warning');
	let successAlert = $('#success');
	if (messageInput && errorAlert && warningAlert) {
		if (messageInput.val()) {
		    $.post('/wwi318/message', { message: messageInput.val() },
		            function (returnedData) {
		        		messageInput.val('');
		        		successAlert.html("Odroid responds: " + returnedData);
		        		successAlert.css("display", "block");
		        		errorAlert.css("display", "none");
		        		warningAlert.css("display", "none");
		        		
		            }).fail(function () {
		            	errorAlert.css("display", "block");
		            	warningAlert.css("display", "none");
		            	successAlert.css("display", "none");
		                messageInput.val('');
		        });
		} else {
			warningAlert.css("display", "block");
			errorAlert.css("display", "none");
			successAlert.css("display", "none");
		}

	}

}

