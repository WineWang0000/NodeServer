button.addEventListener('click', function(e){
	var req = new XMLHttpRequest()
	req.open('GET','/xxx') //请求第一部分（可设置）
	req.setRequestHeader('winewang', 'nice')
	req.setRequestHeader('Content-Type', 'x-www-form-urlencoded') //可设置第二部分请求头
	req.onreadystatechange = function(){
		if(req.readyState === 4){	
			console.log('状态码=4')
			if((req.status >= 200 && req.status < 300) || req.status === 304){
				console.log('请求成功了')
				console.log(req.responseText)
				console.log(typeof req.responseText)
				let string = req.responseText 
				let object = window.JSON.parse(string)
				//把符合json语法的字符串转换成js对应的值 
				req.status
				console.log(req.status) //获取第一部分
				console.log(req.getAllResponseHeaders)  //获取第二部分-响应头 getResponseHeader()
				req.responseText
			  console.log(req.responseText) //获取第四部分
				console.log(object)
				console.log(typeof object)
				console.log(object.note.to)
			}else if(req.status >= 400){
				console.log('请求错了啦')
			}
		}
	}
	req.send()
})