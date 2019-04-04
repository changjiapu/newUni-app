<template>
	<view class="content">
		<view class="address">
			<image src="../../static/home/xiaodizhi_44.png" mode=""></image>
			<view class="info">
				<text>收货人:&nbsp;张晓&nbsp;1889898998</text>
				<text>收货地址:&nbsp;陕西省汉中市汉台区张三路</text>
			</view>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</view>
		<view class="product_detail">
			<image src="../../static/home/dianpupaihangmangguo_05.png" mode=""></image>
			<text>青皮泰芒600g</text>
			<text>￥12.5元/斤</text>
		</view>
		<view class="prict">
			<view>
				<text>商品总额</text>
				<text>￥12.5</text>
			</view>
			<view>
				<text>配送费</text>
				<text>￥0</text>
			</view>
		</view>
		<view class="beizhu">
			<text>订单备注</text>
			<input type="text" value="" placeholder="可输入备注,最多50个字" />
		</view>
		<view class="btn">
			<text>待支付:</text>
			<text>￥12.5</text>
			<text>确认订单</text>
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
	font-size: 30upx;
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 25upx;
	box-sizing: border-box;
	background-color: #f7f7f7;
	.address {
		background-color: #ffffff;
		height: 158upx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		align-items: center;
		image {
			height: 35upx;
			width: 35upx;
		}
		.info {
			width: 85%;
			display: flex;
			flex-direction: column;
		}
	}
	.product_detail {
		margin-top: 20upx;
		padding: 0 20upx;
		box-sizing: border-box;
		font-weight: bold;
		background-color: #ffffff;
		height: 158upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		image {
			height: 110upx;
			width: 110upx;
		}
		text:nth-of-type(2) {
			color: rgb(227, 81, 97);
		}
	}
	.prict {
		width: 100%;
		margin-top: 20upx;
		background-color: #ffffff;
		view {
			padding: 0 20upx;
			box-sizing: border-box;
			width: 100%;
			height: 95upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			&:first-of-type {
				border-bottom: 1px solid #dddddd;
			}
		}
	}
	.beizhu {
		width: 100%;
		margin-top: 20upx;
		padding: 0 20upx;
		background-color: #ffffff;
		height: 95upx;
		display: flex;
		align-items: center;
		input{
			margin-left: 20upx;
		}
	}
	.btn{
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 95upx;
		display: flex;
		align-items: center;
		border-top: 1px solid #eeeeee;
		text:first-of-type{
			margin-left: 300upx;
		}
		text:nth-of-type(2){
			margin-left: 10upx;
			font-weight: bold;
			color: rgb(227, 81, 97)
		}
		text:last-of-type{
			margin-left: 15upx;
			height: 70upx;
			width: 190upx;
			text-align: center;
			line-height: 70upx;
			background-color: #6d71d5;
			border-radius: 10upx;
			color: #ffffff;
		}
	}
}
</style>
