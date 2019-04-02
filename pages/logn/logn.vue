<template>
	<view class="content">
		<image class="logo" src="../../static/home/logo_03.png" mode=""></image>
		<view class="input">
			<image src="../../static/home/wodedenglu_07.png" mode=""></image>
			<input type="text" placeholder="请输入手机号" />
		</view>
		<view class="input">
			<image src="../../static/home/shurumima_10.png" mode=""></image>
			<input type="text" placeholder="请输入密码" />
		</view>
		<view class="btn" @click="gotoHome">立即登录</view>
		<view class="logn">
			<text @click="register()">新用户注册</text>
			<text>忘记密码?</text>
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
		gotoHome(){
			uni.reLaunch({
				url:'/pages/index/index'
			})
		},
		register(){
			uni.navigateTo({
				url:'/pages/register/register'
			})
		},
	}
};
</script>

<style lang="less" scoped>
.content {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	font-size: 30upx;
	.logo {
		margin-top: 100upx;
		width: 235upx;
		height: 280upx;
	}
	.input {
		margin-top: 30upx;
		height: 100upx;
		width: 620upx;
		display: flex;
		align-items: center;
		border: 1px solid #cccccc;
		border-radius: 10upx;
		padding: 0 20upx;
		image {
			height: 35upx;
			width: 35upx;
		}
	}
	.btn {
		margin-top: 30upx;
		height: 100upx;
		line-height: 100upx;
		width: 620upx;
		border: 1px solid #cccccc;
		border-radius: 10upx;
		background-color: #00a4e2;
		color: #ffffff;
		text-align: center;
	}
	.logn{
		margin-top: 20upx;
		padding: 0 40upx;
		box-sizing: border-box;
		width: 100%;
		display: flex;
		justify-content: space-between;
	}
}
</style>
