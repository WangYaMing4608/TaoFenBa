	function main() {
            $("#sign").click(function () {
                var user=$("#userAccount").val();
                var pwd_f = $("#password").val();
                var _params = {
                    "mobile": user,
                    "password": pwd_f
                };
                var comment2=document.getElementById("comment2");
                spanValue = document.getElementById("code1");
                inputValue = document.getElementById("code").value;	
				var str =spanValue.innerHTML;
				var num=0;
					for (var i=0; i<str.length; i++) {
						if (inputValue.charCodeAt(i) == str.charCodeAt(i) || inputValue.charCodeAt(i) == str.charCodeAt(i)+32) {
							if (num%3==0 && num!=0) {
								 $.post("api/login.php", _params, function (data,textStatus) {
					                    try{
											if(data=="0"){
												alert("忘记信息了吗?");
												$("#top").html("<a href=\"login.html\">login</a>");
											}else{
												alert("欢迎:"+data+" 光顾!!");
												window.location.href="index.html";
											}
					                    }catch (e){
					                        alert("忘记密码了吗?");
					                    }
					               });
								return;
							}else{
								num++;
							}
						}else{	
							comment2.innerHTML="验证码不符合，请重新输入";
							return;
						}
					}
            });
    }
	function Shu(tag,val,typ){
		var _self=this;
		this.name=document.getElementById(tag);
		this.va=document.getElementById("comment1");
		this.reg=null;
		this.main=function(){
			this.fn();
		}
		this.fn=function(){
			_self.name.onclick=function(e){
				if(_self.name[typ]==val){
					_self.name[typ]="";
				}
			}
			_self.name.onblur=function(){
				if(_self.name.value==""){
					_self.name[typ]=val;
					_self.va.innerHTML="";
				}else if(tag=="userAccount"){
					if(!(_self.reg.test(_self.name.value))){
						_self.va.innerHTML="*手机号不正确";
					}else{
						_self.va.innerHTML="";
					}
				}
			}
		}
	}
	function Yan(){
		var _self=this;
		this.spanValue = document.getElementById("code1");
		this.sign = document.getElementById("sign");
		this.span = document.getElementById("code2");
		this.inputValue = document.getElementById("code");
		this.span.onclick=function(){
			var str="";
			for (var i=0; i<4; i++) {
				str+=_self.pan();
				_self.spanValue.innerHTML=str;
			}
			
		}
		this.pan=function(){
			var n=Math.floor(Math.random()*91);
			while(!((n>=48 && n<=57) || (n>=65 && n<=90))){
				n=Math.floor(Math.random()*91);
			}
			return String.fromCharCode(n);
		}
		this.sign.onclick=function(){
			inputValue = document.getElementById("code").value;	
			var str = _self.spanValue.innerHTML;
			var num=0;
				for (var i=0; i<str.length; i++) {
					if (inputValue.charCodeAt(i) == str.charCodeAt(i) || inputValue.charCodeAt(i) == str.charCodeAt(i)+32) {
						if (num%3==0 && num!=0) {
							return;
						}else{
							num++;
						}
					}else{					
						return;
					}
				}
			}	
	}
        $(function(){
        	document.onselectstart=function (){ return false;};
        	var _new=new Shu("userAccount","请输入11为手机号","value");
        	_new.reg=/^1[345678]\d{9}$/g;
        	_new.main();
        	var _new1=new Shu("password","密码","placeholder");
        	_new1.main();
        	var _new2=new Shu("code","请输入图片验证码","value");
        	_new2.main();
        	var _yan=new Yan();
			main();
		})