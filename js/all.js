$(function(){
	$('.submit').click(function(){
		var name = $('.name').val();
		var psd = $('.psd').val();
		if(name=="" || name==null){
			alert("请输入用户名");
			return false;
		}
		if(psd==''){
			alert("请输入密码");
			return false;
		}
		window.location.href="table.html";
	})
})