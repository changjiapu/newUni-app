<template>
	<view class="content">
		<view class="item">
			<text>主题</text>
			<input type="text" value="" placeholder="请输入主题" />
		</view>
		<textarea value="" placeholder="请输入反馈描述" />
		<view class="item">
			<text>姓名</text>
			<input type="text" value="" placeholder="选填" />
		</view>
		<view class="item">
			<text>电话</text>
			<input type="text" value="" placeholder="选填" />
		</view>
		<view class="btn">提交</view>
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
	padding: 20upx;
	font-size: 20upx;
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		border-bottom: 1px solid #dddddd;
		text {
			width: 150upx;
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
