<template>
	<view class="content">
		<view class="head">
			<image class="img_1" src="../../static/home/touxiang_03.png" mode=""></image>
			<view class="msg">
				<text>孤芳不自赏</text>
				<text>自由坚持才能成功</text>
			</view>
			<image class="img_2" src="../../static/home/baigou.png" mode=""></image>
		</view>
		<view class="tabs">
			<navigator class="item" url="/pages/addressList/addressList">
				<image src="../../static/home/dizhiguanli_07.png" mode=""></image>
				<text>地址管理</text>
			</navigator>
			<navigator class="item" url="/pages/collect/collect">
				<image src="../../static/home/wodeshoucnag_10.png" mode=""></image>
				<text>我的收藏</text>
			</navigator>
			<navigator class="item" url="/pages/zhuji/zhuji">
				<image src="../../static/home/shangpinzuji_09.png" mode=""></image>
				<text>商品足迹</text>
			</navigator>
			<navigator class="item">
				<image src="../../static/home/wodefenxiang_15.png" mode=""></image>
				<text>我的分享</text>
			</navigator>
		</view>
		<navigator class="GG" url="/pages/ggList/ggList"><image src="../../static/home/dianpugonggao_03.png" mode=""></image></navigator>
		<view class="list">
			<navigator class="list_item" url="/pages/merchant/merchant">
				<image src="../../static/home/shangjiaruzhu_26.png" mode=""></image>
				<text>商家入驻</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/complain/complain">
				<image src="../../static/home/tousujianyi_29.png" mode=""></image>
				<text>投诉建议</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/callCenter/callCenter">
				<image src="../../static/home/kefuzhongxin_33.png" mode=""></image>
				<text>客服中心</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/Account_center/Account_center">
				<image src="../../static/home/zhanghuanquan_37.png" mode=""></image>
				<text>账户安全</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
			<navigator class="list_item" url="/pages/system_setup/system_setup">
				<image src="../../static/home/xitongshezhi_41.png" mode=""></image>
				<text>系统设置</text>
				<image src="../../static/home/gengduo_41.png" mode=""></image>
			</navigator>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {};
	},
	onLoad() {},
	methods: {}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	font-size: 30upx;
	background-color: #f7f7f7;
	.head {
		padding: 0 30upx;
		box-sizing: border-box;
		height: 220upx;
		width: 100%;
		color: #ffffff;
		background-color: #6d71d5;
		display: flex;
		align-items: center;
		// justify-content: space-between;
		.img_1 {
			height: 130upx;
			width: 130upx;
		}
		.img_2 {
			height: 40upx;
			width: 40upx;
		}
		.msg {
			margin-left: 20upx;
			width: 70%;
			display: flex;
			flex-direction: column;
			text:first-of-type {
				font-weight: bold;
			}
		}
	}
	.tabs {
		border-radius: 10upx;
		padding: 0 20upx;
		box-sizing: border-box;
		margin: 0 auto;
		width: 90%;
		height: 160upx;
		background-color: #ffffff;
		display: flex;
		justify-content: space-between;
		.item {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			image {
				height: 45upx;
				width: 35upx;
			}
		}
	}
	.GG {
		width: 90%;
		margin: 20upx auto;
		height: 220upx;
		image {
			height: 100%;
			width: 100%;
		}
	}
	.list {
		width: 90%;
		margin: 0 auto;
		padding: 0 20upx;
		box-sizing: border-box;
		background-color: #ffffff;
		border-radius: 20upx;
		margin-bottom: 30upx;
		.list_item {
			height: 95upx;
			width: 100%;
			display: flex;
			align-items: center;
			border-bottom: 1px solid #dddddd;
			image:first-of-type {
				height: 40upx;
				width: 40upx;
			}
			image:last-of-type {
				height: 30upx;
				width: 30upx;
			}
			text {
				margin-left: 5%;
				width: 85%;
			}
		}
	}
}
</style>
