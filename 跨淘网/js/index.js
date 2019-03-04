/*
* @Author: TomChen
* @Date:   2019-02-26 18:15:35
* @Last Modified by:   TomChen
* @Last Modified time: 2019-02-26 19:41:36
*/
;(function($){
	$('.dropdown').dropdown({js:true,mode:'slideDownUp',delay:200});
	$('.dropdown').on('dropdown-show dropdown-shown dropdown-hide dropdown-hidden',function(ev){
		console.log("!:::",ev.type);
	});
	//dropdown暴露接口测试   不能有之前设置的 ‘click’事件
	// $('button').on('click',function(){
	// 	$('.dropdown').dropdown('show')
	// })
})(jQuery);