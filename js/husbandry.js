(function(window){
	var longitude, latitude, data;
    var id = window.location.search.split("=")[1];
    console.log(id)
    var geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(function(r){
        longitude = r.longitude;
        latitude = r.latitude;
        console.log(longitude,latitude)
        $.ajax({
        url: URL + '/commer/sy/index?id='+id+'&lng='+longitude+'&lat='+latitude,
        type: 'get',
        dataType: 'json',
        async: false,
        success: function(msg){
            console.log(msg)
            if(msg.data != 0){
            	 var sex = msg.data.product.sex;
            	 var fodder = msg.data.product.fodder;
	            if(sex==1){
	                msg.data.product.sex = '雄性';
	            }else{
	                msg.data.product.sex = '雌性';
	            }
	            if(fodder==1){
	                msg.data.product.fodder = '自制饲料';
	            }else{
	                msg.data.product.fodder = '普通饲料';
	            }
	            msg.data.product['id'] = id;
            }
            data = msg;
            console.log(data)
           var html = template('test', data);
           $("#tabBar").html(html);
            html = template('category_templ', data);
            $("#top_img_wrapper").append(html);
            // 内容为空 li选项隐藏
            for (var i = 0; i < $('.content_son').length; i++) {
                console.log($('.content_son').eq(i).children('p').length)
                if($('.content_son').eq(i).children('p').length==0){
                    console.log(i);
                    $('.ul_m_wrapper li').eq(i).css({'display':'none'});
                }
            }

           // 排他思想 横向tab选项卡
           $("#ul_m_wrapper").on("click",'li',function(){
				var index = $(this).index();
				$("#ul_m_wrapper > li").removeClass('active');
				$(this).addClass("active");
				$(".content_son").css({'display':'none'});
				$(".content_son").eq(index).css({'display':'block'});
				console.log(index)
			})
           $(".checkData img").on('click',function(e){
                $(".checkData img").css({'width':'150px'});
                $(this).css({'width':'500px'});
                console.log(1111)
                e.stopPropagation();
                e.returnValue = false;
            })
           $(document).on('click',function(e){
                $(".checkData img").css({'width':'150px'});
                e.stopPropagation();
                e.returnValue = false;
            })

        },
        error: function(xhr){

            console.log(xhr)
        }
        })
    })

}(window))