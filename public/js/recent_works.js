(function($){
	$.fn.recent_works = function( options ){
		var __self = null;
		this.div_recent_work = $(this);
		this.base_url = options['base_url'];
		this.data_url = "/public/data/recent_works.json";
		this.get = function( array_params ){

			$.ajax({
				url: __self.data_url,
				type: "GET",
				data: {},
				error: function(x,t,r){},
				beforeSend: function(){
					var div_str  = [
						"<div style='display:block;width:100%;min-height:300px;background: url(\""+ __self.base_url +"/public/img/loading.gif\") rgba(255,255,255,.3) center no-repeat;opacity:.7;border-radius:5px;'>",
						"</div>",
					].join("");
					__self.div_recent_work.html(div_str);
				},
				success: function(response){
					console.log( response );
					if( typeof response=='object' ){
						__self.view({ "data" : response });
					}

				}
			})
		}
		this.view = function( array_params ){
			var datas = array_params['data'];
			var html_value = "";
			var limit = typeof options['limit'] ? parseInt(options['limit']) : 0;
			var count = 0;
			$.each( datas,function(key,data){
				if( typeof data['hide']!='undefined' ){
					return true;
				}
				var img_list = data['img-list'];
				$.each( img_list, function(key,img_url){
					img_list[key] = __self.base_url + "/" + img_url; 
				});
				data['img-list'] = img_list;
				var data_json = encodeURIComponent( JSON.stringify(data) );
				

				html_value+= [
					'<div class="item col-lg-4 col-md-6">',
						'<div class="icon">',
					       '<img class="img-responsive img-hasload" src="'+ (typeof img_list[0] ? img_list[0] : '') +'"  style="width:100%;height: auto;border-radius: 5px;">',
					    '</div>',
					    '<div style="background:rgba(255,255,255,.3);padding:10px;border-radius:3px;border:solid 1px rgba(255,255,255,.3);">',
						    '<h3 class="h5">',
						    	data['title'],
						    '</h3>',
						    '<h5 style="font-size: 12px;color: rgba(5, 130, 17,.5);">' + ( data['is_active']==true ? '- Active -' : '' ) + '</h5>',
					    '</div>',
					    '<p style="text-align: left;">',
						   	 (function(description){
						   	 	 if( description.length>=100 ){
						   	 	 	description = description.substring(0,100) + "...";
						   	 	 }
						   	 	 return description;
						   	 })(data['description']),
					    '</p>',
					    '<div style="text-align: center;">',
					    	(function(dt){
						        return ( (dt['is_active']==true && dt['link']!=null)  ? (
						        	['<a target="_blank" class="btn btn-success btn-sm " href="' + dt['link'] + '">',
						              'Visit <span class="fa fa-globe"></span>',
						        	 '</a>'
						        	].join("")
						        ) : '' );
					    	})(data),
					        '&nbsp;',
					    	'<button class="btn btn-warning btn-sm btn-see-details" data-toggle="modal" data-target=".bd-example-modal-lg" data-recentwork="'+ data_json +'">',
					              'See Details',
					        '</button>',

					    '</div>',
					'</div>'
				].join("");

				count++;
				if( limit!=0 && count>=limit){return false;}
			});

			this.div_recent_work.html( html_value );
			__self.after_load({});

		}
		this.after_load = function( array_params ){
			if( typeof options['after_load']=='function' ){
				options['after_load']();
			}
		}
		__self = this;
		__self.data_url = __self.base_url + "/public/data/recent_works.json";
		__self.get();
	}
})(jQuery);