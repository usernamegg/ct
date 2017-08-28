$(function(){
	$(".hot li").hover(
			function(){
				$(this).addClass("font");
				$(this).find("a").css("color","#f9bb0c");

			},

			function(){
				$(this).removeClass("font");
				$(this).find("a").css("color","");
			}
		);

});