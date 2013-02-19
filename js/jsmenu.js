/**
 * @author Isuru
 */
$(document).ready(function() {

	
	$("#first").show();
	$("#second").hide();
	$("#third").hide();
	$("#fourth").hide();

	$("#first_link").click(function() {
		//$(this).css("background-color", "#65E080");
		$("#first").show();
		$("#second").hide();
		$("#third").hide();
		$("#fourth").hide();
	});
	
	$("#second_link").click(function() {
		
		$("#first").hide();
		$("#second").show();
		$("#third").hide();
		$("#fourth").hide();
	});
	
	$("#third_link").click(function() {
		$("#first").hide();
		$("#second").hide();
		$("#third").show();
		$("#fourth").hide();
	});
	
	$("#fourth_link").click(function() {
		$("#first").hide();
		$("#second").hide();
		$("#third").hide();
		$("#fourth").show();
	});
});