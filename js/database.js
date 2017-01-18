$(function(){
	$(".xia").each(function(i){
		$(".xia").eq(i).mouseenter(function(){
			$(".xia").eq(i).css({"background-color":"#fff"});
			$(".xia").eq(i).find("ul").css({"display":"block","z-index":"100"});
		})
		$(".xia").eq(i).mouseleave(function(){
			$(".xia").eq(i).css({"background-color":"#F5F5F5"});
			$(".xia").eq(i).find("ul").css({"display":"none"});
		})
	})
		$("#top_log_center_div1").mouseenter(function(){
			$("#top_log_center_div1").find("#dianpu").css({"display":"block","z-index":"100"});
		})
		$("#top_log_center_div1").mouseleave(function(){
			$("#top_log_center_div1").find("#dianpu").css({"display":"none"});
		})
	loadImage("databasedao");
	function loadImage(b){
 	var span1=null,h2=null,img=null,a=null;
	var _box=document.getElementById("dao");
	ajax("post","json/zhuye.json",true,null,function(data){
		var _data=JSON.parse(data);
		for(key in _data[b]){
			div=document.createElement("div");
		    h2=document.createElement("h2");
		    div.appendChild(h2)
			h2.innerHTML=""+_data[b][key][0]+"";
			for(var i=1;i< _data[b][key].length;i++){
				span1=document.createElement("span");
				a=document.createElement("a");
				span1.innerHTML=""+_data[b][key][i]+"";
				if(i==3){
					img=document.createElement("img");
					imgsrc="";
					a.appendChild(img);
				}
				a.appendChild(span1);
				div.appendChild(a);
				_box.appendChild(div);
			}
		}
	})
}
	
})
