$('#search').on('click',function(){
	var html = $("#main li").eq(0).html();
	var form = $('#searchForm');
	console.log(html=='新闻动态')
	var keyword = $("#oInput").val();
	if(keyword==''){
		alert('搜索内容不能为空');
		return false;
	}
switch(html){
	case '新闻动态':
		form.attr({'action':'./newsStatus.html'})
		break;
	case '特色产品':
		form.attr({'action':'./tsProduct.html'})
		break;
	case '企业展示':
		form.attr({'action':'./companyShow.html'})
		break;
	case '农家课堂':
		form.attr({'action':'./nj_course.html'})
		break;
}
})
