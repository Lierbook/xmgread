const baseUrl="https://wechat.idejian.com"

export function myRequestGet(url,data){
	return new Promise((resolve,reject)=>{
		var requesturl = ""
		//#ifdef MP-WEIXIN
		requesturl = baseUrl + url;
		
		//#endif
		//#ifdef H5
		requesturl = url;
		//#endif
		uni.request({
			url:requesturl,
			method:"GET",
			data:data,
			success:function(res){
				console.log("收到get请求的数据",res);
				resolve(res.data)
			},
			fail:function(err){
				reject(err)
			}
		})
	})
}
export function myRequestPost(url,data){
	return new Promise((resolve,reject)=>{
		uni.request({
			url:baseUrl+url,
			header:{
				'Content-Type':'application/x-www-from-urlencodeed'
			},
			method:"POST",
			data:data,
			success:function(res){
				// console.log("收到get请求的数据",res);
				resolve(res.data)
			},
			fail:function(err){
				reject(err)
			}
		})
	})
}