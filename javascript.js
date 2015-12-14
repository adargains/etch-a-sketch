$(document).ready(function(){
	$("button").click(function(){
		var i = 0;
		while(i<405){
			$("#container").append("<div class='box'></div>");
			i++;
		}
	});
});

$(document).on("mouseenter",".box", function(){
        	$(this).css("background","red");
    	});