function go() {
	$("#kills").css("font", "bold 30px sans-serif")
                   .css("color", "green");
                   //.css("margin-left", $("body").width/2- $("#kills").width / 2);
        $("#deaths").css("font", "bold 30px sans-serif")
                    .css("color", "red");
}

$(document).ready(function(){
	var socket = io();

	socket.on('whereAreYou',function(data){
		socket.emit('iAmHere',{});
	});
});
