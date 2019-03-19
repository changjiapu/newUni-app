const baseUrl='http://114.115.211.170:8080/web/'
export function postRequest(data,url) {
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl+url, 
			method:'post',
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
			//uni.showLoading()
		uni.request({
			url: baseUrl+url, 
			method:'get',
			header: {
				'content-type': 'application/x-www-form-urlencoded'
			},
			success: (res) => {
			// uni.hideLoading()
				resolve(res)
			}
		});
	}).catch(err => console.log(err))
}
