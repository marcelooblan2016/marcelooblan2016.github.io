$(document).ready(function(){
	//img-hasload loaded
	$('#contact-form').on('shown.bs.modal', function (e) {
  // do something here...
  		if( typeof grecaptcha !='undefined' ){
  			grecaptcha.reset();
  		}
  		
	});
	$(".btn-reload").unbind().bind({
		click: function(){
			if( typeof grecaptcha !='undefined' ){
				  grecaptcha.reset();
			}
			return false;
		}
	})

	$("#submit-form-contact").unbind().bind({
		click: function(){
			var form = $("#form-contact");
			var form_data = form.serialize();
			var div_status = form.find(".div-status");
			$.ajax({
				url: form.attr("action"),
				type: "POST",
				data: form_data,
				beforeSend: function(){
						response_string = [
									"<div class='alert alert-info'>",
										"Sending...",
									"</div>",
								].join("");
						div_status.html( response_string );
				},
				error: function(x,t,r){
						response_string = [
									"<div class='alert alert-danger'>",
										"Unexpected error occured, Please try again later.",
									"</div>",
								].join("");
						div_status.html( response_string );
				  		if( typeof grecaptcha !='undefined' ){
				  			grecaptcha.reset();
				  		}
				},
				success: function(response){
					console.log(response);
					var response_string = "";
					var is_ok = false;
					if( typeof response=='object' )
					{
						if( response.code=='200' ){
							is_ok = true;
						response_string = [
									"<div class='alert alert-success'>",
										"Sent successfully.",
									"</div>",
								].join("");
						}
						else{
							
							if( typeof response['data']=='object' && Object.keys(response['data']).length >=1 ){
							
								response_string = [
									"<div class='alert alert-danger'>",
									(function(response_data){
										var str = "";
										$.each( response_data, function(key,val){
											str+='<div>&bullet;&nbsp;' + ( val[0] )+ '</div>';
										});
										return str;
									})(response['data']),
									"</div>",
								].join("");	
							
							}
							else if( response.status='ICAPTCHA' ){
									response_string = [
												"<div class='alert alert-danger'>",
													response['message'],
												"</div>",
											].join("");
							}
							else{
						response_string = [
									"<div class='alert alert-danger'>",
										"An error occured.",
									"</div>",
								].join("");
							}
						}	
					}
					else{
						response_string = [
									"<div class='alert alert-danger'>",
										"An error occured, Please try again later.",
									"</div>",
								].join("");
					}

					div_status.html( response_string );
					if(is_ok==false){
				  		if( typeof grecaptcha !='undefined' ){
				  			grecaptcha.reset();
				  		}
					}
				}
			})
			return false;
		}
	})
});
var onImgLoad = function(selector, callback){
	console.log($(selector).length);
	$(selector).each(function(){
		if (this.complete || /*for IE 10-*/ $(this).height() > 0) {
		    callback.apply(this);
		}
		else {
		      $(this).on('load', function(){callback.apply(this);});
		}
	});
};