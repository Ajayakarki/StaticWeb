$(document).ready(function(){
	$(".toggle1").click(function(){
		if($(this).html()=="Hide"){
			$(this).html("Show");
			$("#part1").hide();
		}
		else{
			$(this).html("Hide");
			$("#part1").show();
		}
	});
	$(".toggle2").click(function(){
		if($(this).html()=="Hide"){
			$(this).html("Show");
			$("#part2").hide();
		}
		else{
			$(this).html("Hide");
			$("#part2").show();
		}
	});
});