<template>
	<view class="content">
		<!-- 头部 -->
		<view class="head">
			<view class="left">
				<image src="../../static/home/dizhi_03.png"></image>
				<text>西安</text>
			</view>
			<view class="input">
				<image src="../../static/home/sousuo_06.png" mode=""></image>
				<input type="text" value="" placeholder="请输入要搜索的商品或店铺" />
			</view>
			<view class="img"><image src="../../static/home/fenlei_06.png" mode=""></image></view>
		</view>
		<swiper class="swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
			<swiper-item><image src="../../static/home/gengduo_31.png" mode=""></image></swiper-item>
			<swiper-item><image src="../../static/home/ganhuo_26.png" mode=""></image></swiper-item>
			<swiper-item><image src="../../static/home/liangyou_13.png" mode=""></image></swiper-item>
		</swiper>
		<!-- 公告 -->
		<view class="gonggao">
			<view class="img"><image src="../../static/home/tongzhi_03.png" mode=""></image></view>
			<view class="msg">
				<text class="title">最新公告 NEWS GONGGAO</text>
				<text class="neirong">买房子的注意啦，不错的公告，这里的房子最便宜啦。呵呵哒</text>
				<image src="../../static/home/tongzhigengduo_03.png" mode=""></image>
			</view>
		</view>
		<!-- 分类 -->
		<view class="fenlei">
			<view class="item" v-for="(item, index) in 8" :key="index">
				<image src="../../static/home/shuoguo_14.png" mode=""></image>
				<text>水果</text>
			</view>
		</view>
		<view class="product_title">
			<text>热卖商品</text>
			<text>更多 ></text>
		</view>
		<scroll-view class="scroll-view" scroll-x>
			<view class="list-item" v-for="(item, index) in 6" :key="index" @click="gotoDetail()">
				<image src="../../static/home/tongzhi_03.png" mode=""></image>
				<view class="list_msg">
					<text>新鲜黄瓜</text>
					<text>新鲜蔬菜商品详情</text>
					<text>￥2.5元/斤</text>
					<image class="cart" src="../../static/home/gouwuche_44.png" mode=""></image>
				</view>
			</view>
		</scroll-view>
		<view class="liubai"></view>
		<!-- 滚动公告 -->
		<view class="gonggao_2">
			<view class="title">
				<image src="../../static/home/gonggaozhanshi_38.png" mode=""></image>
				<text>近期公告展示</text>
			</view>
			<swiper class="gonggao_2_swiper" :indicator-dots="true" :autoplay="true" :interval="3000" :duration="1000">
				<swiper-item><image src="../../static/home/shuichan_17.png" mode=""></image></swiper-item>
				<swiper-item><image src="../../static/home/ganhuo_26.png" mode=""></image></swiper-item>
				<swiper-item><image src="../../static/home/gonggaozhanshi_38.png" mode=""></image></swiper-item>
			</swiper>
		</view>
		<!-- 新品推荐 -->
		<view class="product_title">
			<text>新品推荐</text>
			<text>更多 ></text>
		</view>
		<view class="product_list">
			<view class="list_item" v-for="(item, index) in 6" :key="index">
				<image src="../../static/home/roushi_27.png" mode=""></image>
				<text>以纯</text>
				<text>精美连衣裙</text>
				<view class="price">
					<text>￥299元</text>
					<image src="../../static/home/gouwuche_44.png" mode=""></image>
				</view>
			</view>
		</view>
		<view class="product_title">
			<text>热门店铺</text>
			<text>更多 ></text>
		</view>
		<view class="shop_list">
			<view class="list_item" v-for='(item,index) in 3' :key='index'>
				<image src="../../static/home/dianpu_img.jpg" mode=""></image>
				<view class="shop_msg">
					<text class="title">水果超市</text>
					<text class="jieshao">最新鲜的橙子今日特卖进店抢购啦最新鲜的橙子今日特卖进店抢购啦</text>
					<view class="btn">
						<text>进店逛逛</text>
						<text>凤城七路</text>
					</view>
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
		console.log(222);
		getUserInfo().then(res => {
			console.log(res);
		});
	},
	methods: {
		gotoDetail() {}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 22upx;
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
		justify-content: space-around;
		font-size: 30upx;
		color: rgb(153, 153, 153);
		.left {
			height: 80upx;
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
			input{
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
	.swiper {
		margin-top: 180upx;
		height: 375upx;
		width: 100%;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.gonggao {
		height: 120upx;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		.img {
			height: 120upx;
			width: 120upx;
			align-items: center;
			image {
				width: 100upx;
				height: 100upx;
			}
		}
		.msg {
			position: relative;
			display: flex;
			flex-direction: column;
			width: 450upx;
			padding: 20upx;
			box-sizing: border-box;
			font-size: 22upx;
			.title {
				font-weight: bold;
			}
			.neirong {
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				color: rgb(97, 97, 97);
			}
			image {
				position: absolute;
				top: 30upx;
				right: -20upx;
				height: 36upx;
				width: 36upx;
			}
		}
	}
	.fenlei {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.item {
			display: flex;
			flex-direction: column;
			width: 100upx;
			font-size: 28upx;
			text-align: center;
			margin-left: 70upx;
			margin-top: 20upx;
			image {
				height: 90upx;
				width: 90upx;
				border-radius: 100%;
			}
		}
	}
	.product_title {
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: space-between;
		width: 100%;
		height: 88upx;
		background-color: #f7f7f7;
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
		text:last-of-type {
			font-size: 22upx;
		}
	}
	.scroll-view {
		height: 450upx;
		white-space: nowrap;
		.list-item {
			margin-top: 25upx;
			display: inline-block;
			height: 400upx;
			width: 320upx;
			border-radius: 10upx;
			box-shadow: 8upx 8upx 8upx #f4f4f4;
			margin-left: 50upx;
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
	.liubai {
		width: 100%;
		height: 20upx;
		background-color: #f7f7f7;
	}
	.gonggao_2 {
		.title {
			width: 100%;
			box-sizing: border-box;
			height: 70upx;
			padding: 0 20upx;
			display: flex;
			align-items: center;
			image {
				height: 50upx;
				width: 60upx;
			}
		}
		.gonggao_2_swiper {
			height: 220upx;
			width: 100%;
			image {
				width: 100%;
				height: 100%;
			}
		}
	}
	.product_list {
		width: 100%;
		display: flex;
		flex-wrap: wrap;
		.list_item {
			width: 200upx;
			margin-left: 35upx;
			text-align: center;
			display: flex;
			flex-direction: column;
			font-size: 30upx;
			margin-top: 40upx;
			text {
				margin: 10upx;
			}
			text:nth-of-type(2) {
				font-size: 22upx;
				color: rgb(153, 153, 153);
			}
			image {
				width: 100%;
				height: 200upx;
			}
			.price {
				font-weight: bold;
				display: flex;
				align-items: center;
				justify-content: space-between;
				image {
					height: 30upx;
					width: 30upx;
				}
			}
		}
	}
	.shop_list {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		.list_item {
			width: 100%;
			height: 200upx;
			display: flex;
			align-items: center;
			margin-top: 40upx;
			image {
				height: 200upx;
				width: 200upx;
			}
			.shop_msg {
				padding-left: 20upx;
				box-sizing: border-box;
				display: flex;
				flex-direction: column;
				.title {
					font-size: 30upx;
					font-weight: bold;
				}
				.jieshao {
					width: 400upx;
					margin-top: 20upx;
					font-size: 28upx;
					color: rgb(153, 153, 153);
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.btn {
					margin-top: 10upx;
					font-size: 28upx;
					display: flex;
					justify-content: space-between;
					text:first-of-type {
						padding: 10upx;
						color: rgb(233, 120, 130);
						border: 1px solid #e97882;
						border-radius: 10upx;
					}
					text:last-of-type {
						background-image: url(../../static/home/xiaodizhi_44.png);
						background-repeat: no-repeat;
						background-size: 30upx 30upx;
						background-position: left;
						padding-left: 30upx;
						display: flex;
						align-items: center;
					}
				}
			}
		}
		.list_item:first-of-type{
			margin-top: 10upx;
		}	
	}
}
</style>
