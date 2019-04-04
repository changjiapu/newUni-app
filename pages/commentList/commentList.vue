<template>
	<view class="content">
		<view class="item" v-for="(item,index) in 6" :key="index">
			<image class="h_img" src="../../static/home/roushi_27.png" mode=""></image>
			<text>我叫马冬梅</text>
			<image class="x_img" src="../../static/home/wujiaoxing_03.png" mode="" v-for="(item, index2) in 5" :key="index2"></image>
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
	methods: {}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	.item {
		padding: 20upx;
		box-sizing: border-box;
		width: 100%;
		margin-top: 10upx;
		display: flex;
		align-items: center;
		color: #999999;
		border-bottom: 1px solid #eeeeee;
		.h_img {
			height: 80upx;
			width: 80upx;
		}
		.x_img {
			margin-left: 10upx;
			height: 30upx;
			width: 30upx;
		}
		text {
			margin-right: 280upx;
		}
	}
}
</style>
