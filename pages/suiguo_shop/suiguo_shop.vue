<template>
	<view class="suiguo_shop">
		<view class="shop_list" v-for="(item, index) in 6" :key="index" @click="gotoDetaill()">
			<image src="../../static/home/guoshuhaoduomei_12.png"></image>
			<view class="shop_msg">
				<text>鲜果时光超市</text>
				<text>我们店铺已经营业,长达8年之久,都是好东西,欢迎大家来选购</text>
			</view>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	name: 'suiguo_shop',
	data() {
		return {
			title: 'Hello'
		};
	},
	onLoad() {},
	methods: {
		gotoDetaill() {
			uni.navigateTo({
				url: '/pages/suiguo_list/suiguo_list'
			});
		}
	}
};
</script>

<style lang="less" scoped>
.suiguo_shop {
	width: 100%;
	font-size: 26upx;
	background-color: #f7f7f7;
	.shop_list {
		margin-top: 20upx;
		background-color: #ffffff;
		display: flex;
		align-items: center;
		height: 200upx;
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		image {
			height: 150upx;
			width: 150upx;
		}
		.shop_msg {
			width: 500upx;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				margin-top: 15upx;
				color: rgb(158, 158, 158);
			}
		}
	}
}
</style>
