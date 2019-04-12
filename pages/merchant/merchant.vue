<template>
	<view class="content">
		<view class="item">
			<text>手机号</text>
			<input type="text" value="" placeholder="请输入注册人电话" />
		</view>
		<view class="item">
			<text>微信号</text>
			<input type="text" value="" placeholder="请输入相关微信号" />
		</view>
		<view class="item">
			<text>身份证号</text>
			<input type="text" value="" placeholder="请输入身份证号码" />
		</view>
		<view class="zhaopian">
			<text>上传身份证正反照片</text>
			<view class="img">
				<view class="img_item" v-if="img1.length == 0" @click="paizhao1()"><image src="../../static/home/zhengmianzhao_03.png" mode=""></image></view>
				<image v-else class="img_1" :src="img1[0]" mode=""></image>
				<view class="img_item" v-if="img2.length == 0" @click="paizhao2()"><image src="../../static/home/fanmianzhao_05.png" mode=""></image></view>
				<image v-else class="img_1" :src="img2[0]" mode=""></image>
			</view>
		</view>
		<view class="item">
			<text>店铺名称</text>
			<input type="text" value="" placeholder="请输入店铺名称" />
		</view>
		<view class="item">
			<text>店铺简介</text>
			<input type="text" value="" placeholder="请输入店铺描述" />
		</view>
		<view class="LG">
			<text>上传店铺LOGO</text>
			<text class="lg_img">点击上传</text>
			<!-- 	<image src="" mode=""></image> -->
		</view>
		<view class="code">
			<text>上传微信支付宝收款二维码</text>
			<view class="code_list">
				<text class="code_img">点击上传</text>
				<text class="code_img">点击上传</text>
				<!-- 					<image src="" mode=""></image> -->
			</view>
		</view>
		<view class="btn">完成</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			img1: [], //身份证正面
			img2: [] //身份证反面
		};
	},
	onLoad() {},
	methods: {
		paizhao1() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					this.img1 = res.tempFilePaths;
				}
			});
		},
		paizhao2() {
			uni.chooseImage({
				count: 1, //默认9
				sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
				sourceType: ['album', 'camera'], //从相册选择
				success: res => {
					this.img2 = res.tempFilePaths;
				}
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	padding: 20upx;
	.item {
		display: flex;
		height: 95upx;
		align-items: center;
		border-bottom: 1px solid #dddddd;
		text {
			width: 200upx;
		}
	}
	.zhaopian {
		margin: 20upx 0;
		.img {
			width: 100%;
			display: flex;
			.img_item {
				width: 320upx;
				height: 210upx;
				display: flex;
				align-items: center;
				justify-content: center;
				border: 1px dashed #dddddd;
				image {
					height: 75upx;
					width: 75upx;
				}
			}
			.img_1 {
				width: 320upx;
				height: 210upx;
			}
		}
	}
	.LG {
		.lg_img {
			color: #999999;
			margin: 20upx 0;
			display: block;
			width: 200upx;
			height: 140upx;
			text-align: center;
			line-height: 140upx;
			border: 1px dashed #dddddd;
		}
	}
	.code {
		.code_list {
			color: #999999;
			width: 100%;
			display: flex;
			.code_img {
				margin: 20upx 0;
				margin-left: 40upx;
				display: inline-block;
				width: 200upx;
				height: 140upx;
				text-align: center;
				line-height: 140upx;
				border: 1px dashed #dddddd;
			}

			.code_img:first-of-type {
				margin-left: 0upx;
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
