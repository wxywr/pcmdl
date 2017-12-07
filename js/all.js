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

	$('.func').mouseover(function(){
		// $('.head .triangle').css('display','block');
		$('.head .big').css('display','block');
	})
	$('.func').mouseout(function(){
		// $('.head .triangle').css('display','none');
		$('.head .big').css('display','none');
	})


	$("input[type='checkbox']").click(function(){
		if($(this).is(':checked')){
			$(this).parent().parent().css('backgroundColor','#eee');
			$(this).parent().siblings('.h').children().eq(1).click(function(){
				if(window.confirm('确定要删除吗？')){
		           $(this).parent().parent().remove();
		            return true;
		        }else{
		            return false;
		        }
			})

			$(this).parent().siblings('.h').children().eq(0).click(function(){
				$('.layout').css('display','block');
			})
		}
		else{
			$(this).parent().parent().css('backgroundColor','#fff');
		}
	})

	$('.cancel').click(function(){
		$('.layout').css('display','none');
	})
	$('.refer').click(function(){
		$('.layout').css('display','none');
	})
		

})