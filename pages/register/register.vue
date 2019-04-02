<template>
	<view class="content">
		<view class="item">
			<text>手机号</text>
			<input type="text" value="" placeholder="请输入手机号" />
		</view>
		<view class="item">
			<text>邮箱</text>
			<input type="text" value="" placeholder="请输入邮箱" />
		</view>
		<view class="item">
			<text>设置密码</text>
			<input type="text" value="" placeholder="请输入6-20位密码" />
		</view>
		<view class="item">
			<text>确认密码</text>
			<input type="text" value="" placeholder="请确认密码" />
		</view>
		<view class="xieyi" @click.stop="tongyixieyi()">
			<image v-if="!yueduxieyi" src="../../static/home/weixuanzhong_03.png" mode=""></image>
			<image v-else src="../../static/home/xuanzhong_07.png" mode=""></image>
			<text>
				我已阅读本协议，并同意
				<text style="color: #ED7180;">《西安农贸用户注册协议》</text>
			</text>
		</view>
		<view class="btn">提交并注册</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			title: 'Hello',
			yueduxieyi: false
		};
	},
	onLoad() {},
	methods: {
		tongyixieyi(){
			this.yueduxieyi=!this.yueduxieyi
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	padding: 0 30upx;
	box-sizing: border-box;
	.item {
		height: 100upx;
		width: 100%;
		display: flex;
		align-items: center;
		border-bottom: 1px solid #dddddd;
		text {
			width: 30%;
		}
	}
	.xieyi {
		font-size: 22upx;
		display: flex;
		height: 100upx;
		align-items: center;
		image {
			height: 30upx;
			width: 30upx;
		}
	}
	.btn {
		display: flex;
		height: 100upx;
		align-items: center;
		justify-content: center;
		color: #ffffff;
		background-color:#ED7180;
		border-radius: 10upx;
	}
}
</style>
