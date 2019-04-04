<template>
	<view class="content">
		<view class="head">
			<image src="../../static/home/dianpupaihangmangguo_05.png" mode=""></image>
			<view class="msg">
				<text>果蔬超市</text>
				<text>最新鲜的黄瓜限时抢购限时特卖</text>
			</view>
		</view>
		<view class="title">
			<image src="../../static/home/dianpupingfen_03.jpg" mode=""></image>
			<text>店铺评分</text>
		</view>
		<view class="rate">
			<view>
				<text>描述相符</text>
				<uni-rate size="25" value="0" v-model="rate"></uni-rate>
			</view>
			<view>
				<text>服务态度</text>
				<uni-rate size="25" value="0" v-model="rate"></uni-rate>
			</view>
		</view>
		<view class="btn2">立即评价</view>
	</view>
</template>

<script>
import uniRate from '../../components/uni-rate.vue';
import { getUserInfo } from '@/request/API/index.js';
export default {
	components: {
		uniRate
	},
	data() {
		return {
			rate: 0
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
	.head {
		padding: 20upx;
		display: flex;
		box-sizing: border-box;
		border-bottom: 1px solid #dddddd;
		image {
			width: 130upx;
			height: 110upx;
		}
		.msg {
			flex: 1;
			display: flex;
			flex-direction: column;
			margin-left: 20upx;

			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				color: #999999;
			}
		}
	}
	.title {
		padding: 20upx;
		width: 100%;
		display: flex;
		align-items: center;
		image {
			margin-right: 30upx;
			height: 40upx;
			width: 40upx;
		}
	}
	.rate {
		padding: 20upx;
		color: #999999;
		margin-bottom: 30upx;
		text {
			margin-right: 20upx;
		}
		view {
			margin-top: 20upx;
			display: flex;
			align-items: center;
		}
	}
	.btn2 {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color:#6d71d5;
		margin: auto;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
