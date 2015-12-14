$(document).ready(function(){
	$("button").click(function(){
		var i = 0;
		while(i<64){
		$("#container").append("<div class='box'></div>");
	}
	});

	$(".box").hover(
		function(){
        	$(this).css("background","red");
    	},
    	function(){
        	$(this).css("background","blue");
    	}
    );
});