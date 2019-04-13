window.jQuery = function(nideOrSelector){
	let nodes = {}
	nodes.addClass = function(){}
	nodes.html = function(){}
	return nodes
}
window.$.ajax = function(options){
	let method = options.method
	let url = options.url
	let sFn = sFn
	let fFn = fFn
	var req = new XMLHttpRequest()
	req.open(method, url) //请求第一部分（可设置）
	req.onreadystatechange = function(){
		if(req.readyState === 4){	
			console.log('状态码=4')
			if((req.status >= 200 && req.status < 300) || req.status === 304){
				console.log('请求成功了')
				sFn.call(undefined, req.responseText)
			}else if(req.status >= 400){
				fFn.call(undefined, req)
				console.log('请求错了啦')
			}
		}
	}
	req.send(body)
}

window.$ = window.jQuery

button.addEventListener('click', function(e){
	window.$.ajax({
		url: '/yyy',
		method: 'post',
		sFn: (x)=>{console.log(x)},
		fFn: (y)=>{console.log(y)}
	})
})