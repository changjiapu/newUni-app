const baseUrl=''
export function postRequest(data,url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl+url, 
			method:post,
			data: {
				...data
			},
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
export function getRequest(url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl+url, 
			method:get,
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
