/*
* @Author: TomChen
* @Date:   2019-02-26 18:15:35
* @Last Modified by:   TomChen
* @Last Modified time: 2019-02-26 19:41:36
*/
//顶部
;(function($){
	var $menuDropdown = $('.dropdown');
	$menuDropdown.dropdown({js:true,mode:'slideDownUp',delay:200});
	$menuDropdown.on('dropdown-show',function(ev){
		var $elem = $(this);
		var loadUrl = $elem.data('load');
		if(!loadUrl) return;
		var isLoaded = $elem.data('isLoaded',true);
		if(!isLoaded) return;
		var $layer = $elem.find('.dropdown-layer')
		$.getJSON(loadUrl,function(data){
			// console.log(data)
			var html = '';
			for(var i = 0;i<data.length;i++){
				html += '<li><a href="'+data[i].url+'" class="menu-item">'+data[i].name+'</a></li>'
			}
			//模拟网络延迟
			setTimeout(function(){
				$layer.html(html);
				$elem.data('isLoaded',true);
			},1000)
			
		})
	});
	//dropdown暴露接口测试   不能有之前设置的 ‘click’事件
	// $('button').on('click',function(){
	// 	$('.dropdown').dropdown('show')
	// })

 //搜索框
  var $search = $('.header .search');
  $search.search();




})(jQuery);