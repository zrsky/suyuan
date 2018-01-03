$(function() {
    // hover图片改变
    $(".zh_ul").on("mouseover", 'li', function() {
        var index = $(this).index();
        // console.log(index);
        $(".tabContent img").attr({ "src": "images/z" + (parseInt(index) + 1) + ".png" });
    })
  
    // 图片轮播
    var left, left_j, windowWidth;
    $(".next_gt").on('click', function(e) {
        console.log($('.next_gt'))
        var index = $(".next_gt").index($(this));
        console.log(index)
        var left = parseInt($(".img_ul").eq(index).css("left"));
        var num = $(".img_ul").eq(index).children('li').length;
        windowWidth = $(window).width();
        console.log(windowWidth)
        console.log(left)
        if (windowWidth > 1200) {
            left_j = parseInt(left.toString().substring(1) / 1035);
            if (left_j == Math.ceil(num / 3) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({ 'left': left - 1035 + 'px' },'1');
        } else if (windowWidth <= 1200 && windowWidth >= 992) {
            if(left.toString().substring(1) % 670 != 0){
                left_j = parseInt(left.toString().substring(1) / 670)+1;
            }else{
                left_j = parseInt(left.toString().substring(1) / 670);
            }
            if (left_j == Math.ceil(num / 2) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({ 'left': left - 690 + 'px' },'1');
        } else if (windowWidth < 992) {
            left_j = parseInt(left.toString().substring(1) / 325);
            if (left_j == Math.ceil(num) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({ 'left': left - 345 + 'px' },'1');
        }
        e.stopPropagation();
    })
    $(".prev_lt").on('click', function(e) {
        var index = $(".prev_lt").index(this);
        console.log(index)
        windowWidth = $(window).width();
        left = parseInt($(".img_ul").eq(index).css("left"));
        console.log(left)
        if (left >= 0) {
            return false;
        }
        if (windowWidth > 1200) {
            $(".img_ul").eq(index).animate({ 'left': left + 1035 + 'px' },'1');
        } else if (windowWidth <= 1200 && windowWidth >= 992) {
            if(left>=-350&&left<0){
                $(".img_ul").eq(index).animate({ 'left': left + 345 + 'px' },'1');
            }else{
                $(".img_ul").eq(index).animate({ 'left': left + 690 + 'px' },'1');
            }
            console.log(left)
        } else if (windowWidth < 992) {
            $(".img_ul").eq(index).animate({ 'left': left + 345 + 'px' },'1');
        }

        e.stopPropagation();
    })
    //百度地图
    var longitude, latitude, point;

    function getMap() {
        var geolocation = new BMap.Geolocation();
        var map = new BMap.Map('map_wrapper');
        var points = [
            { "lng": 112.58, "lat": 26.89 },
            { "lng": 112.59, "lat": 26.90 },
            { "lng": 112.57, "lat": 26.88 }
        ];
        for (var i = 0, len = points.length; i < len; i++) {
            console.log(longitude)
            point = new BMap.Point(points[i].lng, points[i].lat);
            var marker = new BMap.Marker(point); //将点转化成标注点
            map.addOverlay(marker); //将标注点添加到地图上
            // 创建点坐标
            map.centerAndZoom(point, 15);
            map.setCurrentCity("新乡");
            map.enableScrollWheelZoom();
        }
    }
    getMap();
    // $("#btn").click(function(){
    //     getMap();
    // })
})