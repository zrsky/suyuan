  // 分页
 (function(){
       $(".pagination").pagination({
        coping: true,
        pageCount: 50,
        homePage: '首页',
        endPage: '末尾',
        prevContent: '上页',
        nextContent: '下页',
        callback: function(api) {
            var data = {
                page: api.getCurrent(),
            };
            console.log(111)
            console.log(api.getCurrent());
            $.ajax('', data, function(data) {
                console.log(data);

            })
        }
    })
 }())