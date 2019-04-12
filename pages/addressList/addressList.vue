<template>
	<view class="content">
		<view class="address_list" v-for="(item,index) in 4" :key='index'>
			<view class="head">
				<image src="../../static/home/xiaodizhi_44.png" mode=""></image>
				<view class="info">
					<text>收货人:&nbsp;张晓&nbsp;1889898998</text>
					<text>收货地址:&nbsp;陕西省汉中市汉台区张三路</text>
				</view>
			</view>
			<view class="footer">
				<image class="img_1" v-if="moren" src="../../static/home/sheweimoren_18.png" mode=""></image>
				<image class="img_1" v-else src="../../static/home/morendizhi_07.png" mode=""></image>
				<text>{{ moren ? '默认地址' : '设为默认' }}</text>
				<image class="img_2" src="../../static/home/bianji_09.png" mode=""></image>
				<text>编辑</text>
				<image class="img_3" src="../../static/home/bianji_09.png" mode=""></image>
				<text>删除</text>
			</view>
		</view>
		<view class="btn">添加地址</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			moren: false
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
	background: #f7f7f7;
	.address_list {
		width: 100%;
		padding: 20upx;
		box-sizing: border-box;
		.head {
			background-color: #ffffff;
			height: 158upx;
			width: 100%;
			display: flex;
			justify-content: space-around;
			align-items: center;
			border-bottom: 1px solid #dddddd;
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
		.footer {
			height: 70upx;
			width: 100%;
			padding: 0 20upx;
			display: flex;
			align-items: center;
			background-color: #ffffff;
			.img_1 {
				height: 35upx;
				width: 35upx;
				margin: 0 20upx;
			}
			.img_2 {
				margin-left: 210upx;
				margin-right: 10upx;
				height: 45upx;
				width: 45upx;
			}
			.img_3 {
				margin-left: 30upx;
				margin-right: 10upx;
				height: 45upx;
				width: 45upx;
			}
		}
	}
	.btn {
		height: 95upx;
		line-height: 95upx;
		width: 80%;
		background-color: #6d71d5;
		margin: auto;
		margin-top: 30upx;
		text-align: center;
		border-radius: 10upx;
		color: #ffffff;
	}
}
</style>
