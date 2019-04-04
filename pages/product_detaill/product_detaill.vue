<template>
	<view class="content">
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item><image src="../../static/home/shilingmangguo_05.png" mode=""></image></swiper-item>
			<swiper-item><image src="../../static/home/xiangjiao_23.png" mode=""></image></swiper-item>
			<swiper-item><image src="../../static/home/xiangcheng_25.png" mode=""></image></swiper-item>
		</swiper>
		<view class="tishi">温馨提示！下单前请联系商家确认是否有货！</view>
		<view class="msg">
			<view class="title">
				<text>黄皮芒果600G</text>
				<image src="../../static/home/shoucang_03.png" mode=""></image>
			</view>
			<view class="info">如果收到的芒果果是生的，建议与苹果或者香蕉同放一两天。</view>
			<view class="price">￥12.5元/斤</view>
			<view class="address">
				<text>送至</text>
				<text>西安市未央区长和国际A座</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</view>
		</view>
		<view class="liubai"></view>
		<view class="guige" @click="isShowguige">
			<text>规格</text>
			<text>已选600GX1</text>
			<image src="../../static/home/gengduo_41.png" mode=""></image>
		</view>
		<view class="liubai"></view>
		<view class="comment">
			<view class="title">
				<text>用户评价(18)</text>
				<text @click="gotoComment()">查看全部></text>
			</view>
			<view class="item">
				<image class="h_img" src="../../static/home/roushi_27.png" mode=""></image>
				<text>我叫马冬梅</text>
				<image class="x_img" src="../../static/home/wujiaoxing_03.png" mode="" v-for="(item, index) in 5" :key="index"></image>
			</view>
		</view>
		<view class="liubai"></view>
		<view class="product_title"><text>热门店铺</text></view>
		<view class="img_list"><image src="../../static/home/xiangjiao_23.png" mode="" v-for="(item, index2) in 4" :key="index2"></image></view>
		<view class="bottom">
			<image src="../../static/home/weixin_07.png" mode=""></image>
			<image src="../../static/home/dianhua_07.png" mode="" @click="callUp"></image>
			<text @click="addCart()">加入购物车</text>
			<text @click="gotoPay">立即下单</text>
		</view>
		<view class="bottomWindow" v-if="showGuige">
			<view class="content">
				<view class="head">
					<image src="../../static/home/xiangjiao_23.png" mode=""></image>
					<view class="msg">
						<text>￥12.5元/斤</text>
						<text>已选择600g</text>
					</view>
				</view>
				<text>规格</text>
				<view class="guige2">
					<text>600g</text>
					<text>700g</text>
					<text>800g</text>
				</view>
				<view class="shuliang">
					<text>选数量</text>
					<view class="list-cont">
						<text class="sub" @click="sub">-</text>
						<input type="number" :value="buy_count" @blur="inputBuycount" />
						<text class="add" @click="add">+</text>
					</view>
				</view>
				<view class="btn" @click="isOK()">完成</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			showGuige: false,
			buy_count: 1
		};
	},
	onLoad() {},
	methods: {
		isShowguige() {
			this.showGuige = true;
		},
		isOK() {
			this.showGuige = false;
		},
		callUp() {
			uni.makePhoneCall({
				phoneNumber: '1340000'
			});
		},
		addCart() {
			uni.showToast({
				title: '加入购物车成功',
				duration: 2000
			});
		},
		sub() {},
		add() {},
		inputBuycount() {},
		gotoPay() {
			uni.navigateTo({
				url: '/pages/confirmOrder/confirmOrder'
			});
		},
		gotoComment() {
			uni.navigateTo({
				url: '/pages/commentList/commentList'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 26upx;
	.swiper {
		height: 375upx;
		width: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.tishi {
		color: #999999;
		padding: 20upx;
	}
	.msg {
		box-sizing: border-box;
		padding: 20upx 30upx;
		.title {
			display: flex;
			justify-content: space-between;
			font-weight: bold;
			font-size: 30upx;
			image {
				height: 40upx;
				width: 40upx;
			}
		}
		.info {
			color: #999999;
			margin-top: 10upx;
		}
		.price {
			color: #ee7181;
			font-weight: bold;
			font-size: 30upx;
			padding-bottom: 15upx;
			margin-top: 10upx;
			border-bottom: 1px solid #eeeeee;
		}
		.address {
			height: 100upx;
			color: #999999;
			display: flex;
			align-items: center;
			image {
				width: 35upx;
				height: 35upx;
			}
			text:nth-of-type(2) {
				margin-left: 30upx;
				width: 560upx;
			}
		}
	}
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.comment {
		width: 100%;
		padding: 0 20upx;
		box-sizing: border-box;
		.title {
			display: flex;
			justify-content: space-between;
			text:last-of-type {
				color: #ed7180;
			}
		}
		.item {
			margin-top: 10upx;
			display: flex;
			align-items: center;
			color: #999999;
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
	.guige {
		width: 100%;
		padding: 20upx 30upx;
		height: 100upx;
		color: #999999;
		display: flex;
		align-items: center;
		image {
			width: 35upx;
			height: 35upx;
		}
		text:nth-of-type(2) {
			margin-left: 30upx;
			width: 560upx;
		}
	}
	.product_title {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 88upx;
		padding: 0 20upx;
		text:first-of-type {
			font-size: 34upx;
			font-weight: bold;
			margin-left: 20upx;
			position: relative;
		}
		text:first-of-type::after {
			position: absolute;
			top: 0;
			left: -20upx;
			content: '';
			height: 100%;
			width: 5upx;
			background-color: red;
		}
	}
	.img_list {
		width: 100%;
		padding: 0 25upx;
		box-sizing: border-box;
		image {
			margin-top: 10upx;
			width: 100%;
			height: 400upx;
		}
	}
	.bottom {
		font-size: 30upx;
		color: #ffffff;
		position: fixed;
		bottom: 0;
		z-index: 999;
		height: 95upx;
		width: 100%;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		image {
			height: 50upx;
			width: 50upx;
			margin-left: 50upx;
		}
		text {
			text-align: center;
			line-height: 95upx;
			height: 95upx;
			width: 250upx;
			&:first-of-type {
				margin-left: 50upx;
				background-color: #f0b3ba;
			}
			&:last-of-type {
				background-color: #ed7180;
			}
		}
	}
	.bottomWindow {
		width: 100%;
		height: 100%;
		background-color: rgba(000, 000, 000, 0.5);
		z-index: 99999;
		position: fixed;
		top: 0;
		right: 0;
		.content {
			font-size: 30upx;
			position: fixed;
			bottom: 0;
			height: 580upx;
			width: 100%;
			background-color: #ffffff;
			padding: 25upx 40upx;
			box-sizing: border-box;
			.head {
				display: flex;
				margin-bottom: 20upx;
				image {
					height: 140upx;
					width: 140upx;
				}
				.msg {
					display: flex;
					flex-direction: column;
					text:first-of-type {
						color: #ee7181;
						font-weight: bold;
						margin-bottom: 20upx;
					}
				}
			}
			.guige2 {
				display: flex;
				margin-top: 20upx;
				margin-bottom: 20upx;
				text {
					padding: 10upx 20upx;
					display: flex;
					align-items: center;
					justify-content: center;
					border: 1px solid #999999;
					border-radius: 10upx;
					&:not(:first-of-type) {
						margin-left: 20upx;
					}
				}
			}
			.shuliang {
				display: flex;
				align-items: center;
				justify-content: space-between;
				margin-bottom: 30upx;
				.list-cont {
					height: 60upx;
					width: 200upx;
					line-height: 60upx;
					margin-left: 20upx;
					display: flex;
					border: 1px solid #ddd;
					border-radius: 3px;
				}

				.list-cont text {
					width: 60upx;
					text-align: center;
					font-weight: bold;
					font-size: 38upx;
				}

				.list-cont input {
					height: 60upx;
					line-height: 60upx;
					width: 80upx;
					text-align: center;
					font-size: 30upx;
					border-right: 1px solid #ddd;
					border-left: 1px solid #ddd;
				}
			}
			.btn {
				width: 518upx;
				height: 96upx;
				background-color: rgb(237, 113, 128);
				color: #ffffff;
				border-radius: 10upx;
				text-align: center;
				line-height: 96upx;
				margin: 0 auto;
			}
		}
	}
}
</style>
