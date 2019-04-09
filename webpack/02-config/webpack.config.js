const path = require('path');

module.exports = {
	//指定打包环境
  	mode:'development',
  	//指定入口
  	//单入口写法1
  	entry:{
	  	//chunk名称:入口文件路径
	  	main:'./src/index.js',
	  	about:'./src/about.js',
	  	contact: "./src/contact.js"
	},
	//单入口写法2
  	// entry: './src/index.js',
  	//指定出口
  	output: {
	  	//出口文件名称
	  	filename: '[name].bundle.js',
	  	///出口的文件所在的目录
	  	path: path.resolve(__dirname, 'dist'),
	},
  	module: {
	  	rules: [
		    //处理css
		    {
		    	test: /\.css$/i,
		    	use: [
			    	'style-loader',
			    	'css-loader'
		    	]
		    },
		    //处理图片 
		    {
		    	test: /\.(png|jpg|gif)$/i,
		    	use: [
			    	{
			    		loader: 'url-loader',
			    		options: {
			    			limit: 10
			    		}
			    	}
		    	]
		    }		   
		]
	} 
};