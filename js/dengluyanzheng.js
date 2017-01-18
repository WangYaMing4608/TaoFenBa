 function main(){
 	var _yanZhengMa=new Yan();
    var _reg={
		        "account":/^\w{6,12}$/g,//验证用户账号的长度够不够，并且限制只能字母数字下横线
		        "mobile":/^1[345678]\d{9}$/g,//验证手机号
		        "mail":/^\w+@([a-z0-9-]+\.)+[a-z]+$/gi,//验证邮箱
		        "secret":/^.{6,20}$/g //验证密码
      		 }
            document.getElementById("user").onblur=function(){
				_reg.account.lastIndex=0;
                if(_reg.account.test(this.value)) {
                    var _self=this;
                    $.post("api/checkUser.php", {"condition": "user='" + this.value + "'"}, function (data,textStatus) {
                        if (textStatus=="success" && parseInt(data) > 0) {
                        	_self.parentNode.children[1].style.color="red";
                            _self.parentNode.children[1].innerHTML = "**用户账号已被占用，请重新输入！！";
                        }else{
							_self.parentNode.children[1].innerHTML = "";
						}
                    });
                }else{
                	this.parentNode.children[1].style.color="red";
                    this.parentNode.children[1].innerHTML = "*用户账号只能由6-12个字母数字或者下横向组成";
                }
            }
            document.getElementById("mail").onblur=function(){
				_reg.mail.lastIndex=0;
                if(_reg.mail.test(this.value)) {
                    var _self=this;
                    $.post("api/checkUser.php", {"condition": "mail='" + this.value + "'"}, function (data, textStatus) {
                        if (textStatus=="success" && parseInt(data) > 0) {
                        	_self.parentNode.children[1].style.color="red";
                            _self.parentNode.children[1].innerHTML = "*该邮箱账号已被占用，请重新输入！！";
                        } else {
                            _self.parentNode.children[1].innerHTML = "";
                        }
                    });
                }else{
                	this.parentNode.children[1].style.color="red";
                    this.parentNode.children[1].innerHTML = "*邮箱格式不正确！！";
                }
            }
            document.getElementById("mobile").onblur=function(){
                _reg.mobile.lastIndex=0;
				if(_reg.mobile.test(this.value)) {
                    var _self=this;
                    $.post("api/checkUser.php", {"condition": "mobile='" + this.value + "'"}, function (data,textStatus) {
                        if (textStatus=="success" && parseInt(data) > 0) {
                        	_self.parentNode.children[1].style.color="red";
                            _self.parentNode.children[1].innerHTML = "**手机号码已被占用，请重新输入！！";
                        } else {
                            _self.parentNode.children[1].innerHTML = "";
                        }
                    });
                }else{
                	this.parentNode.children[1].style.color="red";
                    this.parentNode.children[1].innerHTML = "*手机格式不正确！！";
                }
            }
            document.getElementById("deng_lu_button").onclick=function(){
            	inputValue = document.getElementById("yanzhengma").value;	
				var str = document.getElementById("yanzhengma1").innerHTML;
				var pwd_f=document.getElementById("password").value;
                var pwd_s=document.getElementById("rpassword").value;
				var num=0;
				for (var i=0; i<str.length; i++) {
					if (inputValue.charCodeAt(i) == str.charCodeAt(i) || inputValue.charCodeAt(i) == str.charCodeAt(i)+32) {
						if (num%3==0 && num!=0) {
							     if(pwd_f==pwd_s){
			                    var _params={
			                        "user":document.getElementById("user").value,
			                        "mobile":document.getElementById("mobile").value,
			                        "mail":document.getElementById("mail").value,
			                        "secret":document.getElementById("password").value,
			                        "name":document.getElementById("user").value
			                    };
								_reg.account.lastIndex=0;
								_reg.mobile.lastIndex=0;
								_reg.mail.lastIndex=0;
								_reg.secret.lastIndex=0;
			                    if(_reg.account.test(_params.user) && _reg.mobile.test(_params.mobile) && _reg.mail.test(_params.mail) && _reg.secret.test(_params.secret)) {
			                        $.post("api/registerUser.php", _params, function (data,textStatus) {
			                            if (textStatus=="success" && parseInt(data) > 0) {
			                                alert("您已顺利成为会员！！！");
			                            } else {
			                                alert("尊敬的用户您好，您注册会员操作失败，请重试，或者联系管理员！！！");
			                            }
			                        });
			                    }else{
			                        alert("尊敬的用户您好，您的基本信息不完整，为了安全请完善！！");
			                    }
			                }else{
			                	document.getElementById("rpassword1").style.color="red";
			                    document.getElementById("rpassword1").innerHTML="两次输入的密码不匹配，请重新输入";
			                }
							return;
						}else{
							num++;
						}
					}else{	
						document.getElementById("yanzhengma3").style.color="red";
						document.getElementById("yanzhengma3").innerHTML="验证码不符合，请重新输入";
						return;
					}
				}
            }
    }
 function Yan(){
		var _self=this;
		this.spanValue = document.getElementById("yanzhengma1");
		this.sign = document.getElementById("deng_lu_button");
		this.span = document.getElementById("yanzhengma2");
		this.inputValue = document.getElementById("yanzhengma");
		console.log(document.getElementById("yanzhengma2"));
		this.span.onclick=function(){
			console.log(document.getElementById("yanzhengma2"));
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
			inputValue = document.getElementById("yanzhengma").value;	
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
        window.onload=main;

