import {postRequest,getRequest}from'@/request/index.js'
export function getUserInfo(){
	return getRequest('/slides/getSlidesList').then(res => res)
}