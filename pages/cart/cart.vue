<template>
	<view >
		<!-- 			<view class='no-data' style='background-color:#f4f4f4' v-if='no_data'>
				<image src="../../static/home/duanwaitao_07.png"></image>
				<text>购物车为空，赶紧去逛逛吧~~</text>
			</view> -->
		<block>
			<view class="title">
				<text>购物车共有6个商品</text>
				<text @click="Editor">{{ editor ? '完成' : '编辑' }}</text>
			</view>
			<view class="list">
				<view class="list-item" v-for="(item, index) in 6" :key="index">
					<view class="clear">
						<image src="../../static/home/clear.png" :style="{ display: editor ? '' : 'none' }" @click="clear(index)"></image>
						<view :style="{ display: editor ? 'none' : '' }" @click="statusChange(index)">
							<image v-if="select_all" src="../../static/home/weixuanzhong_03.png" mode=""></image>
							<image v-else src="../../static/home/xuanzhong_07.png" mode=""></image>
						</view>
					</view>
					<view class="img"><image src="../../static/home/duanwaitao_07.png" style="width:100%;height:100%"></image></view>
					<view class="msg-detail">
						<view class="product-name">新鲜辣椒约400g大炮辣子盒装</view>
						<view class="price">
							<text>￥</text>
							25元
						</view>
					</view>
					<view class="count">
						<text @click="sub(index)">-</text>
						<input class="input" type="number" value="1" @blur="handleBlur($event, index)" />
						<text @click="add(index)">+</text>
					</view>
				</view>
			</view>
		</block>
		<view class="empty" style="width:100%;height:114upx;"></view>
		<view class="buy-btn">
			<view class="left" @click="selectAll">
				<image v-if="select_all" src="../../static/home/weixuanzhong_03.png" mode=""></image>
				<image v-else src="../../static/home/xuanzhong_07.png" mode=""></image>
				<text>全选</text>
			</view>
			<view class="right">
				<view>
					合计￥
					<text>200</text>
				</view>
				<view @click="gotoPay">立即下单</view>
			</view>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			empty: '',
			editor: false,
			no_data: true,
			select_all: true
		};
	},
	onLoad() {},
	methods: {
		Editor() {
			this.editor = !this.editor;
		},
		statusChange(e) {
			var index = e;
		},
		selectAll(){
			this.select_all=!this.select_all
		}
	}
};
</script>

<style scoped>
.no-data {
	height: 400upx;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #707070;
}

.no-data image {
	width: 150upx;
	height: 150upx;
	margin-bottom: 40upx;
}

.title {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 20upx;
	height: 80upx;
	background-color: #eee;
	font-size: 28upx;
	color: #888;
}

.title text:nth-child(2) {
	color: #c30;
	font-size: 30upx;
}

.list {
	width: 100%;
	overflow: hidden;
	background-color: #fff;
}

.list .list-item {
	width: 750upx;
	padding: 15upx 0;
	display: flex;
	position: relative;
}

.list .list-item .clear {
	width: 70upx;
	height: 160upx;
	display: flex;
	align-items: center;
	justify-content: center;
}

.list .list-item .clear image {
	width: 40upx;
	height: 40upx;
}

.list .list-item .img {
	width: 160upx;
	height: 160upx;
	margin-left: 20upx;
	background-color: #eee;
	position: relative;
}

.list .list-item .img::after {
	content: '';
	width: 710upx;
	border-top: 1px solid #eee;
	position: absolute;
	bottom: -15upx;
	left: 0upx;
}

.list .list-item .msg-detail {
	height: 160upx;
	width: 460upx;
	padding: 0 20upx;
}

.list .list-item .msg-detail .product-name {
	font-size: 28upx;
	height: 80upx;
	line-height: 40upx;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}

.list .list-item .msg-detail .versions {
	color: #999;
	font-size: 24upx;
	margin-top: 3px;
}

.list .list-item .msg-detail .price {
	color: #c30;
	font-size: 32upx;
	margin-top: 3px;
}

.list .list-item .msg-detail .price text {
	font-size: 24upx;
}

.list .list-item .count {
	position: absolute;
	right: 20upx;
	bottom: 15upx;
	width: 170upx;
	height: 50upx;
	font-size: 26upx;
	border-radius: 3px;
	color: #555;
	border: 1px solid #ddd;
	display: flex;
}

.list .list-item .count text {
	width: 50upx;
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	box-sizing: border-box;
	border-right: 1px solid #ddd;
}

.list .list-item .count text:nth-child(3) {
	border-right: none;
}

.list .list-item .count input {
	width: 70upx;
	text-align: center;
	height: 50upx;
	line-height: 50upx;
	box-sizing: border-box;
	border-right: 1px solid #ddd;
}

.buy-btn {
	width: 100%;
	height: 100upx;
	position: fixed;
	bottom:0;
	background-color: #fff;
	padding-bottom: 5px;
	z-index: 2000;
	border-top: 1px solid #eee;
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.buy-btn .left {
	margin-left: 25upx;
	display: flex;
	align-items: center;
}

.buy-btn .left icon {
	display: block;
}

.buy-btn .left text {
	margin-left: 5px;
}
.buy-btn .left image {
	height: 35upx;
	width: 35upx;
}
.buy-btn .right {
	font-size: 30upx;
	color: #999;
	display: flex;
	align-items: center;
}

.buy-btn .right view text {
	font-size: 34upx;
	color: #c30;
	font-weight: bold;;
}

.buy-btn .right view:nth-child(2) {
	width: 220upx;
	height: 112upx;
	line-height: 112upx;
	text-align: center;
	color: #fff;
	background-color: #6d71d5;
	font-size: 34upx;
	margin-left: 5px;
}

icon {
	display: block;
}
</style>
