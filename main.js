var hide = function(){
		$('.container').hide();
}
var state = true;
var main = function(){
	if(state){
	var Username = $('#username_input').val();
	var happy_birthday_txt = $('#happy_birthday_output');



	$('#usernameh1').text(Username);
	$('.container').show();
	for (var i = 0; i <= 3; i++) {
		console.log(i);
		if (i == 1) {
				$('<div>').text("Happy Birthday to " + Username + "!!!!").prependTo(happy_birthday_txt);
		}else{
			 $('<div>').text("Happy Birthday to You!!!!").prependTo(happy_birthday_txt);
		}
	}
}else{
  alert("Please reload page");
  location.reload();
}
state = !state;
}