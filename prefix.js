function prefixFree(style) {
	//获取兼容浏览器的所有样式
	var preStyle = addPre(style);
	//获取最终支持结果
	var styles = ST(preStyle);

	return styles;

	// 1.兼容所有前缀
	function addPre(style) {
		//浏览器前缀
		var prefix = ['Moz', 'webkit', 'ms', 'O'],
			//['Moz-Transform','webkit-Transform','ms-Transform','O-Transform'] 绑到样式上
			preStyle = prefix.map(function(val, idx) {
				return val + '-' + style;
			});
		preStyle.unshift(style);
		//把 '-'' 后面的第一个字母大写 webkit-Transform
		for (var i = 0; i < preStyle.length; i++) {
			//用正则替换
			preStyle[i] = preStyle[i].replace(/-(\w)/g, function($0, $1) {
				return $1.toUpperCase();
			})
		}

		return preStyle;
	}

	//2.返回浏览器支持值
	function ST(pre) {
		//获取浏览器的style样式
		var htmlStyle = document.documentElement.style;
		var styles = "";
		// 遍历 preStyle 是否存在 htmlStyle
		for (var i = 0; i < pre.length; i++) {
			if (pre[i] in htmlStyle) {
				styles = pre[i];
				break;
			}
		}
		return styles;
	}

}