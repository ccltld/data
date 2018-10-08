var nav = document.querySelector('.nav');
var navLi = document.querySelectorAll('.nav-r li');
var phone=document.querySelector('.phone');
phone.onmouseenter = function(){
	nav.style.backgroundColor="#fff";
	var a =document.querySelector('.weight');
	// if(a){
	// 	for(var i=0; i<navLi.length; i++){
			nav.style.color = '#000';
	// 	}
	// }
	
}
phone.onmouseleave = function(){
	nav.style.backgroundColor="transparent";
	// for(var i=0; i<navLi.length; i++){
		nav.style.color = '#fff';
	// }
}
// var nav =document.getElementByTagName('a');
// for{
	
// }
