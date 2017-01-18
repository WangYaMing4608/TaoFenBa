 window.onload=function(){
 	alert("ok")
            //loadImage("1");
            pushButton(10);
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
        function changeButtonText(_root,_current){
            var _length=_root.children.length;
            if(_current===_root.children[_length-1]){
                if(parseInt(_current.innerText)<14) {
                    for (var i = 0; i < _length; i++) {
                        _root.children[i].innerText = parseInt(_current.innerText) - 2 + i;
                        if(parseInt(_root.children[i].innerText)>14){
                            _root.children[i].style.display="none";
                        }
                    }
                }
            }
            if(_current===_root.children[0]){
                var _value=parseInt(_current.innerText);
                if(_value-2>0) {
                    for (var i = 0; i < _length; i++) {
                        _root.children[i].innerText = _value - 2 + i;
                        _root.children[i].style.display="block";
                    }
                }
            }

        }
        function boundEvent(_root){
            for(var i=0;i<_root.children.length;i++){
                _root.children[i].onclick=function(){
                   var _box_card1=document.getElementById("zhuYeMain");
                   _box_card1.innerHTML="";
                    loadImage("\""+parseInt(this.innerText)+"\"");
                    changeButtonText(_root,this);
                }
            }
        }
        
        function pushButton(n){
            var _span=null;
            var _root=document.createElement("span");
            _root.className="root";
            var _button=document.getElementById("button");
            _button.appendChild(_root);
            for(var i=0;i<n;i++){
                _span=document.createElement("span");
                _span.innerText=i+1;
                _root.appendChild(_span);
            }
            //boundEvent(_root);
        }
