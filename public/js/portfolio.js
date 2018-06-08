function portfolio(options){
		return {
			"show_details" : function(data_recent_work){
				// console.log( data_recent_work );
				var modal_title = $(".modal-title");
				modal_title.html( data_recent_work['title'] );
				var description = $(".modal-body .description");
				description.html( data_recent_work['description'] );
				var img_list = data_recent_work['img-list'];
				var carousel_indicators = $(".carousel-indicators");
				carousel_indicators.html("");
				var carousel_inner = $(".carousel-inner");
				carousel_inner.html("");
				count = 0;
				$.each(img_list ,function(key,img_url){
					
					carousel_inner.append('<div class="carousel-item"></div>');
					var carousel_item = carousel_inner.find(".carousel-item:last-child");
					carousel_item.html( [
							'<div class="img-hasload">',
								'<img class="d-block img-fluid" src="' + img_url + '" >',
							'</div>',
						].join("") );
					carousel_item.find("img").css({
						"margin" : "0 auto",
						//"width"  : "85%"
					});
					var li = document.createElement('li');
					carousel_indicators.append( li );
					li = carousel_indicators.find("li:last-child");
					li.attr("data-target","#carouselExampleIndicators");
					li.attr("data-slide-to",count);


					if( count==0 ){
						li.addClass("active");
						carousel_item.addClass("active");
					}
					count++;
					
				});
			    // <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
			}
		}


	}