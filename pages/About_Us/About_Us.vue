<template>
	<view class="content">
		<image class="logo" src="../../static/home/logo_03.png" mode=""></image>
		<image class="code" src="../../static/home/erweima1_07.png" mode=""></image>
		<view class="footer">
			<text>陕西省西安市西安农贸公司所有</text>
			<text>copyright@2013ganxike.com</text>
			<text>All Rights Reserves</text>
		</view>
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
		display: flex;
		flex-direction: column;
		align-items: center;
		width: 100%;
		.logo{
			margin-top: 80upx;
			height: 285upx;
			width: 255upx;
		}
		.code{
			margin-top: 30upx;
			height: 335upx;
			width: 335upx;
		}
		.footer{
			margin-top: 100upx;
			display: flex;
			flex-direction:column;
			align-items: center;
			text{
				font-size: 26upx;
				color: #999999;
				&:first-of-type{
					margin-bottom: 20upx;
					font-size: 30upx;
					color: #000000;
				}
			}
		}
	}
</style>
