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
		$(this).css('cursor','pointer');
		// $('.head .triangle').css('display','block');
		$('.head .big').css('display','block');
	})
	$('.func').mouseout(function(){
		// $('.head .triangle').css('display','none');
		$('.head .big').css('display','none');
	})



// ---------------------------
	// $('.h .edit').on('click',function(){
	// 	// 点击编辑按钮的时候给 tr 上增加按钮 on
	// 	// $(this).parents('tr').addClass('on');
	// 	var parents = $(this).parents('tr');
	// 	$('#name').html(parents.find('.c').html());
	// 	var box = parents.find('.i').html();

	// 	if(box == 'A'){
	// 		$("input[name='sex']").eq(0).attr('checked','checked');
	// 	}else if(box == 'B'){
	// 		$("input[name='sex']").eq(1).attr('checked','checked');
	// 	}else if(box == 'C'){
	// 		$("input[name='sex']").eq(2).attr('checked','checked');
	// 	}
	// 	// ......
	// 	parents.addClass('on');

	// })



// 、、、、、、、、、、、、、、、
	// $('.refer').on('click',function(){
	// 	// ajax 请求数据接口，如果返回成功 则修改
	// 	$('#table').find('.on .c').html('修改后的数据');
	// 	//修改数据 方法同上

	// 	// 不管Ajax成功失败，都删除 class，然后关闭弹出层
	// 	$('#table').find('tr').removeClass('on');
	// })



	// $("input[type='checkbox']").click(function(){
	// 	if($(this).is(':checked')){
	// 		$(this).parent().parent().css('backgroundColor','#eee');
	// 		$(this).parent().siblings('.h').children().eq(1).click(function(){
	// 			if(window.confirm('确定要删除吗？')){
	// 	           $(this).parent().parent().remove();
	// 	            return true;
	// 	        }else{
	// 	            return false;
	// 	        }
	// 		})

	// 		$(this).parent().siblings('.h').children().eq(0).click(function(){
	// 			$('.layout').css('display','block');
	// 		})
	// 	}
	// 	else{
	// 		$(this).parent().parent().css('backgroundColor','#fff');
	// 	}
	// })


	$('.table-wrap tr:gt(0)').click(function(){
		$(this).css('backgroundColor','#eee').siblings().css('backgroundColor','#fff');
	})
	$('.table-wrap .h .edit').click(function(){
		$('.layout').css('display','block');
		var parents = $(this).parents('tr');
		var xm = parents.find('.c').html();
		$('.layout #name').val(xm);

		var sj = parents.find('.d').html();
		$('.layout #phone').val(sj);

		var yx = parents.find('.e').html();
		$('.layout #email').val(yx);

		var dz = parents.find('.f').html();
		$('.layout #address').val(dz);

		var gs = parents.find('.g').html();
		$('.layout #company').val(gs);


		var one = parents.find('.i').html();
		if(one == '质量好'){
			$("input[name='sex']").eq(0).attr('checked','checked');
		}else if(one == '价格便宜'){
			$("input[name='sex']").eq(1).attr('checked','checked');
		}else if(one == '速度快'){
			$("input[name='sex']").eq(2).attr('checked','checked');
		}

		var two = parents.find('.j').html();
		if(two == '质量好'){
			$("input[name='sex1']").eq(0).attr('checked','checked');
		}else if(two == '价格便宜'){
			$("input[name='sex1']").eq(1).attr('checked','checked');
		}else if(two == '速度快'){
			$("input[name='sex1']").eq(2).attr('checked','checked');
		}

		var three = parents.find('.k').html();
		if(three == '质量好'){
			$("input[name='sex2']").eq(0).attr('checked','checked');
		}else if(three == '价格便宜'){
			$("input[name='sex2']").eq(1).attr('checked','checked');
		}else if(three == '速度快'){
			$("input[name='sex2']").eq(2).attr('checked','checked');
		}
	})
		
	


	$('.cancel').click(function(){
		$('.layout').css('display','none');
	})
	$('.layout .revise i').click(function(){
		$('.layout').css('display','none');
	})

	$('.refer').click(function(){
		$('.layout').css('display','none');
		var name = $('#name').val();
		var phone = $('#phone').val();
		var email = $('#email').val();
		var address = $('#address').val();
		var company = $('#company').val();

		var answer_1 = $('input:radio[name="sex"]:checked').val();
		var answer_2 = $('input:radio[name="sex1"]:checked').val();
		var answer_3 = $('input:radio[name="sex2"]:checked').val();

		if(name==""){
			alert("请输入姓名");
			return false;
		}
		if(!(/^1[3|4|5|7|8][0-9]{9}$/.test(phone))){
			alert('请输入正确的手机号码');
			return false;
		}
		if(!(/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/.test(email))){
			alert('请输入正确的邮箱地址');
			return false;
		}
		if(address==''){
			alert("联系地址不能为空");
			return false;
		}
		if(company==''){
			alert("公司名称不能为空");
			return false;
		}

		$.ajax({
			type : "post",
			url : "XXXXXX",
			// dataType : "json",
			data : {
				"name": name, 
				"phone": phone,
				"email":email,
				"address" :address,
				"company": company,
				"answer_1":answer_1,
				"answer_2":answer_2,
				"answer_3":answer_3,
			},
			success : function(data) {
				// window.laction.href = "Submit-success.html";
			},
			error : function() {
				// alert("页面出错！");
			}
		});

	})
	

})