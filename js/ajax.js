function httpRequest(){
	try{
		return new window.XMLHttpRequest();
	}catch(e){
		return new ActiveXObject("Microsoft.XMLHttpRequest");
	}
}
function ajax(_method,_url,_ansy,_parameter,_fn){
	var _xhr=httpRequest();
	if(_xhr){
		_xhr.onreadystatechange=function(){
			if(_xhr.readyState==4){
				_fn(_xhr.responseText);
			}
		}
			_xhr.open(_method,_url,_ansy);
			_xhr.send(_parameter);
	}else{
		alert("你的浏览器版本过低！！！！")
	}
}
