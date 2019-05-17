var aList1 = document.querySelectorAll('.top4-top-list2 li');
	var aBtn1 = document.querySelectorAll('.top4-top-list2 span');
	for(var i=0;i<aList1.length;i++){
		aList1[i].index=i;
		var j=0;
		aList1[i].onclick=function(){
			
			if (j++%2 == 0){
				aBtn1[this.index].style.background="rgb(255, 103, 0)";
			}else{
				aBtn1[this.index].style.background="#fff";
			}
			console.log(j)
		}
	}
var aBtnr1=document.querySelectorAll('#recommednd-button1')[0];
var aBtnr2=document.querySelectorAll('#recommednd-button2')[0];
var oRcl=document.querySelectorAll('.recommednd-content-list')[0];
console.log(aBtnr1);
console.log(aBtnr2);
console.log(oRcl);
function css(obj,attr,val){
	obj.attr=val;
}
aBtnr2.onclick=function(){
	css(aBtnr2.className='btn');
	css(aBtnr1.className='btn-active');
	css(oRcl.style.marginLeft='-1240'+'px');
}
aBtnr1.onclick=function(){
	css(aBtnr1.className='btn');
	css(aBtnr2.className='btn-active');
	css(oRcl.style.marginLeft='0'+'px');
}