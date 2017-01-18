window.onload=function(){
	$("#ziyemian1_top").load("taofenba.html",function(data,textStatus){
		if(textStatus=="success"){
			topPage();
		}
	});
	$("#ziyemian1_foot").load("yejiao.html",function(data,textStatus){
		if(textStatus=="success"){
			yejiao();
		}
	});
	timer();
	loadImage("ziyemian1");
	loadImage2("ziyemian2");
	fixed();
	fixedBlock();
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
	window.onscroll = function(){
	var _top = document.body.scrollTop || document.documentElement.scrollTop;
			if(_top >=700){
				_fixLast.style.display = "block";
			} else {
				_fixLast.style.display = "none";
			}
		}
		function goTop(){
			document.body.scrollTop = document.documentElement.scrollTop = 0;
		}
}
var _timer=0;
function timer(){
	window.clearTimeout(_timer);
	var o_date=new Date("2017/1/19");
	var s_date=new Date();
	var _milli=o_date.getTime()-s_date.getTime();
	var _date=new Date(_milli);
	document.getElementById("time").innerHTML=_date.getDate()+" 天 "+_date.getHours()+" 小时 "+_date.getMinutes()+" 分 "+_date.getSeconds()+" 秒";
	_timer=window.setTimeout(timer,10);
}
function loadImage(a){
 	var span1=null,span2=null,span3=null,span4=null,img=null,img2=null,p=null,div=null;
	var _box=document.getElementById("main_center_cont");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data[a]){
			div=document.createElement("div");
			img="<span  id=\"zhuYeMain_img0\"><img src=\"images/xinxin.png\"+ alt=\"\">喜欢</span>";
			img2="<span  id=\"zhuYeMain_img10\"><img src=\"images/pinpai_03.jpg\"alt=\"\"></span>";
			span2="<a href=\"#\"><img id=\"zhuYeMain_img11\" src=\""+_data[a][key][0]+"\"+ alt=\"\">";
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
function loadImage2(a){
 	var span1=null,span2=null,span3=null,span4=null,img=null,img2=null,p=null,div=null;
	var _box=document.getElementById("main_bottom_cont");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data[a]){
			div=document.createElement("div");
			span2="<a href=\"#\"><img id=\"main_bottom_cont_img2\" src=\""+_data[a][key][0]+"\"+ alt=\"\">";
			span3="<span id=\"main_bottom_cont_img3\">"+_data[a][key][1]+"</span>";
			img="<img id=\"main_bottom_cont_img8\" src=\""+_data[a][key][4]+"\"+ alt=\"\">";
			span4="<span id=\"main_bottom_cont_img7\"><span id=\"main_bottom_cont_img4\">"+_data[a][key][2]+"</span><span id=\"main_bottom_cont_img5\"><img src=\"images/jia.jpg\" alt=\"\">"+_data[a][key][3]+"</span></span><span id=\"main_bottom_cont_img6\"></span></a>";
			div.innerHTML=span2+img+span3+span4;
			_box.appendChild(div);
		}
	})
}