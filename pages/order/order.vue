<template>
	<view class="content">
		<view class="head" scroll-x>
			<text :class="{ active: currentTab == 0 }" @click="tabs(0)">全部</text>
			<text :class="{ active: currentTab == 1 }" @click="tabs(1)">待确认</text>
			<text :class="{ active: currentTab == 2 }" @click="tabs(2)">待收货</text>
			<text :class="{ active: currentTab == 3 }" @click="tabs(3)">已完成</text>
			<text :class="{ active: currentTab == 4 }" @click="tabs(4)">待评价</text>
			<text :class="{ active: currentTab == 5 }" @click="tabs(5)">售后</text>
		</view>
		<view class="item" v-for="(item, index) in 6" :key="index">
			<image src="../../static/home/dianpupaihangmangguo_05.png" mode=""></image>
			<view class="msg">
				<view class="title">
					<text>果蔬超市</text>
					<text>￥12.5元</text>
				</view>
				<text class="msg_2">最新鲜的黄瓜限时抢购限时特卖</text>
				<view class="btn">
					<text v-if="currentTab == 4">查看订单</text>
					<text v-if="currentTab == 4" class="pingjia" @click="gotoComment()">立即评价</text>
					<text v-if="currentTab == 0||currentTab == 2">取消订单</text>
					<text v-if="currentTab == 0" class="pingjia">确认订单</text>
					<text v-if="currentTab == 2">确认收货</text>
					<text v-if="currentTab == 5">申请退款</text>
					<text v-if="currentTab == 5" @click="shouHou()">申请售后</text>
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
			currentTab: 0
		};
	},
	onLoad() {},
	methods: {
		tabs(e) {
			this.currentTab = e;
		},
		gotoComment(){
			uni.navigateTo({
				url:'/pages/comment/comment'
			})
		},
		shouHou(){
			uni.navigateTo({
				url:'/pages/shouHou/shouHou'
			})
		}
		
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	background-color: #f7f7f7;
	font-size: 28upx;
	display: flex;
	flex-direction: column;
	align-items: center;
	.head {
		box-sizing: border-box;
		padding: 0 20upx;
		width: 100%;
		display: flex;
		justify-content: space-around;
		height: 95upx;
		align-items: center;
		background-color: white;
		text {
			position: relative;
			&::after {
				content: '';
				position: absolute;
				left: 0;
				bottom: -10upx;
				height: 2px;
				width: 100%;
				background-color: #e91e63;
				transition: all 0.4s;
				transform: scaleX(0);
			}
			&.active {
				color: red;
				&::after {
					transform: scaleX(1);
				}
			}
		}
	}
	.item {
		margin-top: 20upx;
		width: 95%;
		background-color: #ffffff;
		display: flex;
		padding: 20upx;
		box-sizing: border-box;
		image {
			height: 160upx;
			width: 200upx;
		}
		.msg {
			flex: 1;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			.title {
				display: flex;
				justify-content: space-between;
				text:first-of-type {
					font-weight: bold;
				}
				text:last-of-type {
					color: #e91e63;
				}
			}
			.msg_2 {
				color: #999999;
			}
			.btn {
				margin-left: 120upx;
				margin-top: 30upx;
				color: #999999;
				text {
					padding: 8upx 15upx;
					border: 1px solid #dddddd;
					border-radius: 20upx;
					&:nth-of-type(2) {
						margin-left: 30upx;
					}
					&.pingjia {
						background-color: #6d71d5;
						color: #ffffff;
						border: none;
					}
				}
			}
		}
	}
}
</style>
