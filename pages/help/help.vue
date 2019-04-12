<template>
	<view class="content">
		<text class="title">常见问题</text>
		<text  @click="gotoDeatail()">商品签收前我应该做哪些检查?</text>
		<text>能否换货?</text>
		<text>如何开具发票?</text>
		<text>我下单之后多久开始发货?</text>
		<text>超时未收到该怎么办?</text>
		<view class="btn" @click="callUp()">
			<image src="../../static/home/dianhua_07.png" mode=""></image>
			<text>客服热线：029-2678386</text>
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
	onLoad() {},
	methods: {
		callUp() {
			uni.makePhoneCall({
				phoneNumber: '029-2678386'
			});
		},
		gotoDeatail(){
			uni.navigateTo({
				url:'/pages/helpDetail/helpDetail'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	padding: 20upx;
	display: flex;
	flex-direction: column;
	text {
		height: 90upx;
		line-height: 90upx;
	}
	.title{
		margin-left: 20upx;
		position: relative;
	}
	.title::after {
		position: absolute;
		top: 20upx;
		left: -20upx;
		content: '';
		height: 50%;
		width: 5upx;
		background-color: red;
	}
	.btn {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 95upx;
		width: 80%;
		margin: auto;
		background-color: #6d71d5;
		margin-top: 30upx;
		border-radius: 10upx;
		color: #ffffff;
		image {
			height: 40upx;
			width: 40upx;
		}
	}
}
</style>
