$(document).ready(function(){

	var t = setInterval(function(){
		$("#carousel ul").animate({marginLeft:-940},1000,function(){
			$(this).find("li:last").after($(this).find("li:first"));
			$(this).css({marginLeft:0});

		})
	},4000); 
});

