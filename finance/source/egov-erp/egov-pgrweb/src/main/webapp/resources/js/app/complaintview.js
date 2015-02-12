jQuery(document).ready(function($)
{
	$('#toggleactions').click(function(){
		if($(this).html()== "More..")
		{
			$(this).html('Less..');
			$('.show-action-more').show();
		}else
		{
			$(this).html('More..');
			$('.show-action-more').hide();
		}
		
	});
	
	$("#btn_submit").click(function(){
		if($('#inc_messge').val() == '')
		{
			$('#inc_messge').addClass('error');
		}else
		{
			document.forms[0].submit();
			//alert("Submitted Successfully");
			$('#inc_messge').removeClass('error');
		}
		
	});
	
	$('.slide-history-menu').click(function(){
		$('.history-slide').slideToggle();
		if($('#toggle-his-icon').hasClass('entypo-down-open'))
		{
			$('#toggle-his-icon').removeClass('entypo-down-open').addClass('entypo-up-open');
			$('#see-more-link').hide();
			}else{
			$('#toggle-his-icon').removeClass('entypo-up-open').addClass('entypo-down-open');
			$('#see-more-link').show();
		}
	});
	
	$('#ct-sel-jurisd').change(function(){
		console.log("came jursidiction");	
	});

	$.ajax({
		url: "http://example.appspot.com/rest/app",
		type: "POST",
		data: JSON.stringify(),
		dataType: "json",
		success: function (response) {
			console.log("success");
		},
		error: function (response) {
			console.log("failed");
		}
	});
	
	
});
