<template>
	<view class="content">
		<view class="head">
			<image src="../../static/home/dianpupaihangmangguo_05.png" mode=""></image>
			<view class="msg">
				<text>西红柿</text>
				<text>订单号 27389988888888</text>
				<view >
					<text>2018-06-30</text>
					<text>12.5x1</text>
				</view>
			</view>
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
		width: 100%;
		background-color: #f7f7f7;
		.head{
			display: flex;
			image{
				width: 200upx;
				height: 180upx
			}
		}
	}
</style>
