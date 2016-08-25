
function checkPasswordMatch() {
    var password = $("#npass").val();
    var confirmPassword = $("#cpass").val();

    if (password != confirmPassword)
        $("#divCheckPasswordMatch").html("Passwords do not match!");
    else
        $("#divCheckPasswordMatch").html("Passwords match.");
}

$(accS.html).ready(function () {
   $("#npass, #cpass").keyup(checkPasswordMatch);
});



/////////////////Script for other Password Verification//////
/*$("input[type=password]").keyup(function(){
	if($("#npass").val() == $("#cpass").val()){
		$("#pwmatch").removeClass("glyphicon-remove");
		$("#pwsmatch").addClass("glyphicon-ok");
		$("#pwmatch").css("color","#00A41E");
	}else{
		$("#pwmatch").removeClass("glyphicon-ok");
		$("#pwmatch").addClass("glyphicon-remove");
		$("#pwmatch").css("color","#FF0004");
	}
});
*/