	function yejiao(){
		var time=0;
		var _h=0;
		(function move(){
			window.clearTimeout(time);
			_h-=32;
			if(_h<=-128){
				$("#center_1").css({"top":"0px"})
				_h=0;
			}
			$("#center_1").animate({"top":""+(_h)+"px"},300);
			time=setTimeout(move,3000);
		})();
		
	}

