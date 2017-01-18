window.onload=function(){
	lunbo();
	cardcontent();
	createDiv();
	fixed();
	fixedBlock();
	pushButton(10);
	lunbo2();
	$("#zhuyetop").load("taofenba.html",function(data,textStatus){
					if(textStatus=="success"){
						topPage();
					}
				});
	$("#ziyemian1_foot").load("yejiao.html",function(data,textStatus){
		if(textStatus=="success"){
			yejiao();
		}
	});
}
function pushButton(n){
            var _span=null;
            var _root=document.getElementById("button").children[1];
            var _button=document.getElementById("button");
            for(var i=0;i<n;i++){
                _span=document.createElement("span");
                _span.innerText=i+1;
                _root.appendChild(_span);
            }
            boundEvent(_root);
        }
function boundEvent(_root){
            for(var i=0;i<_root.children.length;i++){
            	 _root.children[i].onmouseover=function(){
            	 	this.style.backgroundColor="#e9156b";
            	 	this.style.color="#fff";
            	 }
            	 _root.children[i].onmouseout=function(){
            	 	this.style.backgroundColor="#fff";
            	 	this.style.color="#000";
            	 }
                _root.children[i].onclick=function(){
                   var _box=document.getElementById("zhuYeMain");
                   _box.innerHTML="";
                   for(var i=0;i<_root.children.length;i++){
                   		_root.children[i].style.backgroundColor="#fff";
                   }
                   this.style.backgroundColor="#e9156b";
                    loadImage("b"+parseInt(this.innerText)+"");
                   changeButtonText(_root,this);
                }
            }
        }
 function changeButtonText(_root,_current){
            var _length=_root.children.length;
            if(_current===_root.children[_length-1]){
                if(parseInt(_current.innerText)<30) {
                    for (var i = 0; i < _length; i++) {
                        _root.children[i].innerText = parseInt(_current.innerText) - 4+ i;
                        if(parseInt(_root.children[i].innerText)>30){
                            _root.children[i].style.display="none";
                        }
                    }
                    for(var i=0;i<_root.children.length;i++){
                   		//_root.children[i].style.backgroundColor="#fff";
                   	}
                    _root.children[4].style.backgroundColor="#e9156b"
                   // _root.children[4].style.color="#fff";
                    
                }
            }
            if(_current===_root.children[0]){
                var _value=parseInt(_current.innerText);
                if(_value-5>0) {
                    for (var i = 0; i < _length; i++) {
                        _root.children[i].innerText = _value - 5 + i;
                        _root.children[i].style.display="inline-block";
                         console.log( _root.children[i]);
                    }
                     for(var i=0;i<_root.children.length;i++){
                   		_root.children[i].style.backgroundColor="#fff";
                   	}
                    _root.children[4].style.backgroundColor="#e9156b"
                    _root.children[4].style.color="#fff";
                }
            }

        }
function loadImage(a){
 	var span1=null,span2=null,span3=null,span4=null,img=null,img2=null,p=null,div=null;
	var _box=document.getElementById("zhuYeMain");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data[a]){
			div=document.createElement("div");
			img="<span  id=\"zhuYeMain_img0\"><img src=\"images/xinxin.png\"+ alt=\"\">喜欢</span>";
			img2="<span  id=\"zhuYeMain_img10\"><img src=\"images/pinpai_03.jpg\"alt=\"\"></span>";
			span2="<a href=\"#\"><img src=\""+_data[a][key][0]+"\"+ alt=\"\">";
			p="<p>[包邮]"+_data[a][key][1]+"</p>";
			span3="<span id=\"zhuYeMain_img2\">"+_data[a][key][2]+"</span>";
			span4="<span><span id=\"zhuYeMain_img3\">"+_data[a][key][3]+"</span><span id=\"zhuYeMain_img4\"><img src=\"images/jia.jpg\" alt=\"\"><span>"+_data[a][key][4]+"</span></span><span id=\"zhuYeMain_img5\"><img src=\""+_data[a][key][5]+"\"alt=\"\"></span></span></a>"
			if(_data[a][key][6]==1){
				div.innerHTML=span2+p+img+img2+span3+span4;
			}else{
				div.innerHTML=span2+p+img+span3+span4;
			}
			_box.appendChild(div);
		}
	})
}
function lunbo(){
		var box = document.getElementById('box');
		var ball = document.getElementById('ball');
		var btns = document.getElementById('points').getElementsByTagName('span');
		var prev = document.getElementById('prev');
		var next = document.getElementById('next');
		var first = ball.children[0].cloneNode(true);
		ball.appendChild(first);
		var flag = true;
		box.index = 0;
		box.w = box.clientWidth;
		box.timer = setTimeout(move,3000);
		function move(){
			box.index--;
			if(box.index==-(btns.length)){
				box.index =0;
				ball.style.left = 0;
			}
			for(var n=0;n<btns.length;n++){
				btns[n].style.backgroundColor="#eeeeee";
			}
			btns[Math.abs(box.index)].style.backgroundColor="pink";
			animation(ball,'left',box.w * box.index,function(){
				clearTimeout(box.timer);
				if(flag){
					box.timer = setTimeout(move,3000);
				}
			});
		}
		for(var i = 0;i < btns.length;i++){
			btns[i].index = -i;
			btns[i].onclick = function(){
	
				if(box.index==-btns.length){
					ball.style.left = 0;
				}
				for(var n=0;n<btns.length;n++){
					btns[n].style.backgroundColor="#eeeeee";
				}
				this.style.backgroundColor="pink";
				box.index = this.index;
	
				animation(ball,'left',box.w*box.index);
			}
		}
		box.onmouseover = function(){
			flag = false;
			clearTimeout(box.timer);
			animation(prev,'opacity',1);
			animation(next,'opacity',1);
		}
		box.onmouseout = function(){
			flag = true;
			box.timer = setTimeout(move,3000);
			animation(prev,'opacity',0);
			animation(next,'opacity',0);
		}
		prev.onclick = function(){
			box.index++;
			if(box.index==1){
				box.index = -(btns.length-1);
				ball.style.left = -(box.w * btns.length) + 'px';
			}
			for(var n=0;n<btns.length;n++){
				btns[n].style.backgroundColor="#eeeeee";
			}
			btns[Math.abs(box.index)].style.backgroundColor="pink";
			animation(ball,'left',box.w*box.index);
		}
		next.onclick = move;
	}
function lunbo2(){
		var box = document.getElementById('lunbo2');
		var ball = document.getElementById('lunbo2_center');
		var prev = document.getElementById('lunbo2_center_prev');
		var next = document.getElementById('lunbo2_center_next');
		var first = ball.children[0].cloneNode(true);
		var flag = true;
		box.index = 0;
		box.w = box.clientWidth;
		box.timer = setTimeout(move,3000);
		function move(){
			box.index--;
			if(box.index==-3){
				box.index=0;
				ball.style.left =0;
			}
			animation(ball,'left',box.w * box.index,function(){
				clearTimeout(box.timer);
				if(flag){
					box.timer = setTimeout(move,3000);
				}
			});
		}
			
		box.onmouseover = function(){
			flag = false;
			clearTimeout(box.timer);
			animation(lunbo2_center_prev,'opacity',1);
			animation(lunbo2_center_next,'opacity',1);
		}
		box.onmouseout = function(){
			flag = true;
			box.timer = setTimeout(move,3000);
			animation(lunbo2_center_next,'opacity',0);
			animation(lunbo2_center_prev,'opacity',0);
		}
		prev.onclick = function(){
			box.index++;
			animation(ball,'left',box.w*box.index);
		}
		next.onclick = move;
	}
function cardcontent(){
	var span1=null,span2=null,span3=null,span4=null,img=null,p=null,div=null;
	var _box_card1=document.getElementById("card1");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data["a"]){
			div=document.createElement("div");			
			span1="<span class=\"card1_span1\" id=\"card1_span1\"><img src=\""+_data["a"][key][0]+"\"+ alt=\"\"></span>";
			span2="<span class=\"card1_span2\" id=\"card1_span2\"><a href=\"#\"><img src=\""+_data["a"][key][4]+"\"+ alt=\"\">";
			p="<p>[包邮]"+_data["a"][key][1]+"</p>";
			span3="<span id=\"card1_jia\">"+_data["a"][key][2]+"</span>";
			span4="<span><span id=\"card1_jia1\">"+_data["a"][key][3]+"</span><span id=\"card1_jia2\"><img src=\"images/jia.jpg\" alt=\"\"><span>"+_data["a"][key][5]+"</span></span><span id=\"card1_jia3\"><img src=\""+_data["a"][key][6]+"\"alt=\"\"></span></span></a></span>"
			div.innerHTML=span1+span2+p+span3+span4;
			_box_card1.appendChild(div);
		}
		imgOpacity(0);
		imgOpacity(1);
		imgOpacity(2);
		imgOpacity(3);
	})
}

function createDiv(){
	var span1=null,span2=null,span3=null,span4=null,img=null,img2=null,p=null,div=null;
	var _box_card1=document.getElementById("zhuYeMain");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data["b1"]){
			div=document.createElement("div");
			img="<span  id=\"zhuYeMain_img0\"><img src=\"images/xinxin.png\"+ alt=\"\">喜欢</span>";
			img2="<span  id=\"zhuYeMain_img10\"><img src=\"images/pinpai_03.jpg\"alt=\"\"></span>";
			span2="<a href=\"#\"><img src=\""+_data["b1"][key][0]+"\"+ alt=\"\">";
			p="<p>[包邮]"+_data["b1"][key][1]+"</p>";
			span3="<span id=\"zhuYeMain_img2\">"+_data["b1"][key][2]+"</span>";
			span4="<span><span id=\"zhuYeMain_img3\">"+_data["b1"][key][3]+"</span><span id=\"zhuYeMain_img4\"><img src=\"images/jia.jpg\" alt=\"\"><span>"+_data["b1"][key][4]+"</span></span><span id=\"zhuYeMain_img5\"><img src=\""+_data["b1"][key][5]+"\"alt=\"\"></span></span></a>"
			if(_data["b1"][key][6]==1){
				div.innerHTML=span2+p+img+img2+span3+span4;
			}else{
				div.innerHTML=span2+p+img+span3+span4;
			}
			_box_card1.appendChild(div);
		}
	})
}
function fixed(){
	var _fix=document.getElementById("fixed_kefu").children;
	for(var i=0;i<_fix.length;i++){
		_fix[i].index=i;
		_fix[i].onmouseover=function(){
			this.children[0].children[0].style.display="none";
		}
		_fix[i].onmouseout=function(){
			this.children[0].children[0].style.display="block";
		}
	}
}
function fixedBlock(){
	var _fixLast=document.getElementById("fixed_kefu").children[3];
	var _fixedTop=document.getElementById("fixed_top");
	window.onscroll = function(){
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
			if(_top >=750){
				_fixedTop.style.opacity =0.9;
				_fixedTop.style.width ="1100px";
				_fixedTop.style.position ="fixed";
				_fixLast.style.display = "block";
			} else {
				_fixLast.style.display = "none";
				_fixedTop.style.opacity =1;
				_fixedTop.style.position ="";
			}
		}
		function goTop(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
}

function imgOpacity(n){
	var timer=0;
	var _flag=0;
	var _opacity=1;
	var _card=document.getElementById("card1");
	_card.children[n].onmouseover=function(){
		function mo(){
			window.clearTimeout(timer);
			_opacity-=0.1;
			if(_opacity<=0.1){
				_opacity=0;
				_flag=1;
			}
			_card.children[n].children[0].style.opacity=_opacity;
			if(_flag==0){
				timer=window.setTimeout(mo,30);
			}else{
				_card.children[n].children[0].style.display="none";
				_card.children[n].children[1].style.display="block";	
				_opacity=1;
			}
		}
		mo();
	}
	_card.children[n].onmouseout=function(){
		_card.children[n].children[0].style.opacity=1;
		_card.children[n].children[0].style.display="block"
		_card.children[n].children[1].style.display="none";
	}
	
}








