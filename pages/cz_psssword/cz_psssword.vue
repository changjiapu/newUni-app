<template>
	<view class="content">
		<view class="item">
			<text>旧密码</text>
			<input type="text" value="" placeholder="请输入旧支付密码" />
		</view>
		<view class="item">
			<text>支付密码</text>
			<input type="text" value="" placeholder="请输入新支付密码" />
		</view>
		<view class="item">
			<text>确认密码</text>
			<input type="text" value="" placeholder="请输入确认密码" />
		</view>
		<view class="btn">立即重置</view>
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
	methods: {}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	padding: 20upx;
	box-sizing: border-box;
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		text {
			width: 200upx;
		}
		border-bottom: 1px solid #dddddd;
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
