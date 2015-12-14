var cor;

$(document).ready(function(){
	$("#comecar").click(function(){
		var i = 0;
		while(i<324){
			$("#container").append("<div class='box'></div>");
			i++;
		}
	});

	$("#limpar").click(function(){
		$(".box").css("background","white");
	});

	$(".cor").click(function(){
		$(this).css("border","1px solid black");
		cor = $(this).attr("id");
	});

});

$(document).on("mouseenter",".box", function(){
	$(this).css("background",cor);
});