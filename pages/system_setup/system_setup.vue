<template>
	<view class="content">
		<navigator class="item" url="/pages/complain_2/complain_2">
			<text>意见反馈</text>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</navigator>
		<navigator class="item" url="/pages/About_Us/About_Us">
			<text>关于</text>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</navigator>
		<navigator class="item" url="/pages/help/help">
			<text>帮助</text>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</navigator>
		<view class="btn">退出登录</view>
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
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	padding: 20upx 30upx;
	box-sizing: border-box;
	.item {
		height: 95upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		border-bottom: 1px solid #dddddd;
		image {
			height: 35upx;
			width: 35upx;
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
