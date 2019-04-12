<template>
	<view class="content">
		<view class="fb">发布</view>
		<view class="list" v-for="(item, index) in 6" :key="index" @click="gotoDetail">
			<image src="../../static/home/dianpugonggao_03.png" mode=""></image>
			<view class="msg">
				<text>时令水果超市</text>
				<text>上上个月因为医疗事故自己惹上官司，到底是睡的错上官司，到底是睡的错上官司，到底是睡的错</text>
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
	onLoad() {},
	methods: {
		gotoDetail(){
			uni.navigateTo({
				url:'/pages/ggDetail/ggDetail'
			})
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	font-size: 30upx;
	width: 100%;
	.fb {
		width: 100%;
		height: 80upx;
		line-height: 80upx;
		text-align: right;
		padding-right: 20upx;
		background-color: #f7f7f7;
		box-sizing: border-box;
	}
	.list {
		padding: 0 20upx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		height: 180upx;
		width: 100%;
		border-bottom: 1px solid #dddddd;
		image {
			height: 120upx;
			width: 210upx;
		}
		.msg {
			margin-left: 20upx;
			flex: 1;
			text {
				display: block;
			}
			text:first-of-type {
				font-weight: bold;
			}
			text:last-of-type {
				color: #999999;
				overflow: hidden;
				text-overflow: ellipsis;
				display: -webkit-box;
				-webkit-box-orient: vertical;
				-webkit-line-clamp: 2;
			}
		}
	}
}
</style>
