<template>
	<view class="content">
		<view class="head">
			<text>共5个商品</text>
			<text @click="editorChange()">{{ editor ? '完成' : '管理' }}</text>
		</view>
		<view class="collect_item" v-for="(item,index) in 6" :key='index'>
			<view class="left" v-if="editor">
				<image v-if="isShow" src="../../static/home/sheweimoren_18.png" mode=""></image>
				<image v-else src="../../static/home/morendizhi_07.png" mode=""></image>
			</view>
			<view class="center"><image src="../../static/home/dakoufu_36.png" mode=""></image></view>
			<view class="right">
				<text class="title">大甜橙</text>
				<text class="title2">大甜橙子显示特惠</text>
				<view class="price">
					<text>￥5.8元/斤</text>
					<text class="GG" v-if="editor">进店逛逛</text>
				</view>
			</view>
		</view>
		<view class="btn" v-if="editor">
			<image v-if="isShow" src="../../static/home/sheweimoren_18.png" mode=""></image>
			<image v-else src="../../static/home/morendizhi_07.png" mode=""></image>
			<text @click="sellAll()">全选</text>
			<text  @click="Delete()">删除</text>
		</view>
	</view>
</template>

<script>
import { getUserInfo } from '@/request/API/index.js';
export default {
	data() {
		return {
			editor: false,
			isShow: true
		};
	},
	onLoad() {},
	methods: {
		editorChange() {
			this.editor = !this.editor;
		},
		sellAll(){
			this.isShow=!this.isShow
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	.head {
		color: #999999;
		height: 85upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0 20upx;
		box-sizing: border-box;
		text:last-of-type {
			color: #ef7f89;
		}
	}
	.collect_item {
		display: flex;
		align-items: center;
		padding: 20upx;
		box-sizing: border-box;
		.left {
			image {
				height: 35upx;
				width: 35upx;
			}
		}
		.center {
			height: 200upx;
			width: 200upx;
			margin-left: 20upx;
			image {
				height: 100%;
				width: 100%;
			}
		}
		.right {
			flex: 1;
			margin-left: 20upx;
			display: flex;
			flex-direction: column;
			.title {
				font-weight: bold;
			}
			.title2 {
				margin-top: 20upx;
				color: #999999;
			}
			.price {
				margin-top: 20upx;
				display: flex;
				justify-content: space-between;
				text:first-of-type {
					color: #ef7f89;
					font-weight: bold;
				}
				.GG {
					color: #999999;
					padding: 10upx 20upx;
					border: 1px solid #999999;
					border-radius: 20upx;
				}
			}
		}
	}
	.btn{
		height: 110upx;
		width: 100%;
		padding: 0 30upx;
		display: flex;
		z-index: 9999;
		align-items: center;
		position: fixed;
		left: 0;
		bottom: 0;
		background-color: #ffffff;
		border-top: 1px solid #dddddd;
		image{
			height: 35upx;
			width: 35upx;
		}
		text{
			margin-left: 20upx;
		}
		text:last-of-type{
			color: #ffffff;
			margin-left: 350upx;
			padding: 20upx 80upx;
			background-color: #6d71d5;
			border-radius: 10upx;
			
		}
	}
}
</style>
