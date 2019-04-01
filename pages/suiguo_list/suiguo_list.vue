<template>
	<view class="content">
		<!-- 头部 -->
		<view class="head">
			<view class="left" @click="gotoBack()"><image src="../../static/home/xiangzuofanhui_03.png" mode=""></image></view>
			<view class="input">
				<image src="../../static/home/sousuo_06.png" mode=""></image>
				<input type="text" value="" placeholder="请输入要搜索的商品或店铺" />
			</view>
		</view>
		<view class="title">
			<text>全部商品</text>
			<text>价格排序</text>
		</view>
		<view class="scroll-view">
			<view class="list-item" v-for="(item, index) in 6" :key="index" @click="gotoDetail()">
				<image src="../../static/home/tongzhi_03.png" mode=""></image>
				<view class="list_msg">
					<text>新鲜黄瓜</text>
					<text>新鲜蔬菜商品详情</text>
					<text>￥2.5元/斤</text>
					<image class="cart" src="../../static/home/gouwuche_44.png" mode=""></image>
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
	onLoad() {},
	methods: {
		gotoBack() {
			uni.navigateBack({
				delta: 1
			});
		},
		gotoDetail(){
			uni.navigateTo({
				url:'/pages/product_detaill/product_detaill'
			})
		},
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 22upx;
	width: 100%;
	background-color: #f7f7f7;
	.head {
		z-index: 999;
		background-color: #ffffff;
		position: fixed;
		top: 0;
		width: 100%;
		padding-top: 30upx;
		height: 150upx;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 30upx;
		color: rgb(153, 153, 153);
		.left {
			position: absolute;
			left: 30upx;
			height: 80upx;
			width: 80upx;
			display: flex;
			align-items: center;
			justify-content: center;
			image {
				height: 30upx;
				width: 30upx;
			}
		}
		.input {
			height: 80upx;
			width: 50%;
			font-size: 22upx;
			display: flex;
			align-items: center;
			background-color: rgb(235, 235, 235);
			padding: 0 20upx;
			border-radius: 10upx;
			input {
				width: 100%;
			}
			image {
				height: 30upx;
				width: 30upx;
			}
		}
		.img {
			height: 80upx;
			display: flex;
			align-items: center;
			image {
				height: 50upx;
				width: 50upx;
			}
		}
	}
	.title {
		position: fixed;
		top: 160upx;
		z-index: 999;
		height: upx;
		display: flex;
		width: 100%;
		background-color: #ffffff;
		text {
			width: 50%;
			height: 80upx;
			line-height: 80upx;
			text-align: center;
		}
	}
	.scroll-view {
		margin-top: 270upx;
		 width: 100%;
		.list-item {
			margin-top: 25upx;
			display: inline-block;
			height: 400upx;
			width: 320upx;
			border-radius: 10upx;
			box-shadow: 8upx 8upx 8upx #f3f3f3;
			margin-left: 35upx;
			image {
				width: 100%;
				height: 220upx;
			}
			.list_msg {
				position: relative;
				width: 100%;
				box-sizing: border-box;
				padding: 20upx 15upx;
				display: flex;
				flex-direction: column;
				text {
					margin-top: 5upx;
				}
				text:first-of-type {
					font-size: 30upx;
				}
				text:nth-of-type(2) {
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
					font-size: 22upx;
					color: rgb(153, 153, 153);
				}
				text:last-of-type {
					font-size: 28upx;
					color: rgb(227, 84, 97);
				}
				.cart {
					position: absolute;
					bottom: 20upx;
					right: 20upx;
					height: 30upx;
					width: 30upx;
				}
			}
		}
	}
}
</style>
