function topPage(){
	eventHandle();
	eventHandle1();
	sou();
	moveMain();
}

function sou(){
	var oInput=document.getElementById("sou").children[0];
	oInput.onclick=function(e){
		oInput.value="";
		e.preventDefault();
	}
	oInput.onblur=function(){
		oInput.value="粘贴淘宝天猫商品标题或关键字开始购物";
	}
}
function moveMain(){
	var nav = document.getElementById('ul');
	var cells = nav.getElementsByTagName('a');
	var ball = document.getElementById('move');
	var obj = {
		left:50,
		width:50
	};
	for(var i = 0;i < cells.length;i++){
		cells[i].index = i;
		cells[i].onmouseenter = function(){
			var self = this;
			console.log(this.offsetLeft);
			console.log(this.offsetWidth);
			animations(ball,{
				left:this.offsetLeft-10,
				width:this.offsetWidth+20
			},200,function(){
			
			});
		}
		cells[i].onmouseleave = function(){
			animations(ball,{
				left:obj.left,
				width:obj.width
			},200);

		}
		cells[i].onclick = function(){
			for(var j = 0;j < cells.length;j++){
				cells[j].style.background = '';
			}
			this.style.background = '#ff3b7f';
			obj.left = this.offsetLeft;
			obj.width = this.offsetWidth;
		}
	}
}

function eventHandle(){
	var _wei=document.getElementById("weixin");
	//var _img=_wei.getElementsByTagName("img")[0];
	var _san=document.getElementById("san");
	_wei.onmouseover=show;
	_wei.onmouseout=hidd;
	
	_san.onmouseover=show;
	_san.onmouseout=hidd;
}		
function show(){
	var _wei=document.getElementById("weixin");
	var _img=_wei.getElementsByTagName("img")[0];
	var _san=document.getElementById("san");
	_img.style.display="block";
	_wei.style.color="#000000";
	_san.style.display="block";
}	
function hidd(){
	var _wei=document.getElementById("weixin");
	var _img=_wei.getElementsByTagName("img")[0];
	var _san=document.getElementById("san");
	_wei.style.color="#9999b0";
	_san.style.display="none";
	_img.style.display="none";
}		
function eventHandle1(){
	var _hot=document.getElementById("hot");
	var _deng=document.getElementById("deng");
	_hot.onmouseover=show1;
	_hot.onmouseout=hidd1;
	
	_deng.onmouseover=show1;
	_deng.onmouseout=hidd1;
}		
function show1(){
	var _hot=document.getElementById("hot");
	var _deng=document.getElementById("deng");
	_deng.style.display="block";
	_hot.style.color="#000000";
}	
function hidd1(){
	var _hot=document.getElementById("hot");
	var _deng=document.getElementById("deng");
	_hot.style.color="#9999b0";
	_deng.style.display="none";
}		


