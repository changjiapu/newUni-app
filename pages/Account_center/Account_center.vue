<template>
	<view class="content">
		<navigator class="item" url="/pages/cz_psssword/cz_psssword">
			<image src="../../static/home/shurumima_10.png" mode=""></image>
			<text>修改登录密码</text>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</navigator>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
		  title: 'Hello'
		};
	},
	onLoad() {
	
	},
	methods: {

	}
};
</script>

<style lang="less" scoped>
	.content{
		width: 100%;
		padding: 20upx;
		font-size: 30upx;
		.item{
			display: flex;
			align-items: center;
			height: 95upx;
			border-bottom: 1px solid #dddddd;
			image{
				height: 35upx;
				width: 35upx;
			}
			text{
				margin-left: 30upx;
				margin-right: 400upx;
			}
			
		}
	}
</style>
