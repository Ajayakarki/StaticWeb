$(document).ready(function(){
	$("#submit").click(function(){
		var fname=$("#fname").val();
		var lname=$("#lname").val();
		var email=$("#email").val();
		var number=$("#number").val();
		var message=$("#message").val();
		if(((fname=="")||(lname=="")||(email=="")||(number=="")||(message==""))==false){
			var obj={firstname:fname , lastname:lname, email:email, number:number, message:message};
			var objJSON=JSON.stringify(obj);
			localStorage.setItem(email,objJSON);
			$("#fname").val("");
			$("#lname").val("");
			$("#email").val("");
			$("#number").val("");
			$("#message").val("");
		}
		else{
			alert("fill all field");
		}
	});
});