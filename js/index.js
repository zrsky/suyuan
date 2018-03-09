$(function() {
    // 图片轮播
    var left, left_j, windowWidth;
    $(".next_gt").on('click', function(e) {
        console.log($('.next_gt'))
        var index = $(".next_gt").index($(this));
        console.log(index)

      left = parseInt($(".img_ul").eq(index).css("left"));
        var num = $(".img_ul").eq(index).children('li').length;
        windowWidth = $(window).width();
        console.log(windowWidth)
        console.log(left)
        if (windowWidth > 1200) {
            left_j = parseInt(left.toString().substring(1) / 1035);
            if (left_j == Math.ceil(num / 3) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({
                'left': left - 1035 + 'px'
            }, '1');
        } else if (windowWidth <= 1200 && windowWidth >= 992) {
            if (left.toString().substring(1) % 670 != 0) {
                left_j = parseInt(left.toString().substring(1) / 670);
            }else {
                left_j = parseInt(left.toString().substring(1) / 670);
            }
            if (left_j == Math.ceil(num / 2) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({
                'left': left - 690 + 'px'
            }, '1');
        } else if (windowWidth < 992) {
            left_j = parseInt(left.toString().substring(1) / 325);
            if (left_j == Math.ceil(num) - 1) {
                return false;
            }
            $(".img_ul").eq(index).animate({
                'left': left - 345 + 'px'
            }, '1');
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
            if (left >= -350 && left < 0) {
                $(".img_ul").eq(index).animate({
                    'left': left + 345 + 'px'
                }, '1');
            } else if (left >= -690 && left < 0) {
                $(".img_ul").eq(index).animate({
                    'left': left + 690 + 'px'
                }, '1');
            } else {
                $(".img_ul").eq(index).animate({
                    'left': left + 1035 + 'px'
                }, '1');
            }
        } else if (windowWidth <= 1200 && windowWidth >= 992) {
            if (left >= -350 && left < 0) {
                $(".img_ul").eq(index).animate({
                    'left': left + 345 + 'px'
                }, '1');
            } else {
                $(".img_ul").eq(index).animate({
                    'left': left + 690 + 'px'
                }, '1');
            }
            console.log(left)
        } else if (windowWidth < 992) {
            $(".img_ul").eq(index).animate({
                'left': left + 345 + 'px'
            }, '1');
        }

        e.stopPropagation();
    })
    // $("#btn").click(function(){
    //     getMap();
    // })
    //当溯源码为空时  阻止form表单的提交
    $("#suyuanSearch").click(function() {
        if ($("#suyuanInput").val() == "") {
            alert("溯源码不能为空");
            return false;
        }
    })


    //canvas画图

    // for (var i = 1; i < 9; i++) {
    //     console.log(111)
    //     var canvas = document.getElementById('canvas'+i);
    //     // canvas.style.border = '1px solid #E2E0E0';
    //     if (canvas.getContext) {
    //         var ctx = canvas.getContext('2d');
    //         var text = ['1家','41条','1家','59514人次','1家','8条','19个','2858条'];
    //         var arcLength = [4/5,3/5,9/10,1/10,14/15,7/10,4/5,1/2];
    //         draw(ctx,91, 91, 81, -Math.PI / 2, 2*Math.PI*arcLength[i-1], true, '#EFEEEE', '#D8D7D7', 'red', text[i-1])
    //     }
    // }

    // function draw(ctx, x, y, radius, startAngle, endAngle, anticlockwise, innerStyle, outerStyle, wordStyle, text) {
    //     ctx.lineWidth = 8
    //     ctx.beginPath();

    //     ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
    //     ctx.strokeStyle = innerStyle
    //     ctx.stroke();
    //     ctx.closePath();
    //     //外圆
    //     ctx.lineWidth = 1
    //     ctx.beginPath();
    //     ctx.arc(x, y, radius + 10, 0, 2 * Math.PI, anticlockwise)
    //     ctx.strokeStyle = wordStyle;
    //     ctx.font = "20px serif";
    //     ctx.strokeText(text, x - ctx.measureText(text).width / 2, y + 10);
    //     ctx.strokeStyle = outerStyle;
    //     ctx.stroke()
    // }
})

